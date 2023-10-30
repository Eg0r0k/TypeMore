export const header = async () => {     
  const leaderBord = document.querySelector(".leaderBordMenu");             //Подключение форм 
  const leaderBordMenuBtn = document.querySelector(".leaderBordBtn");       //Подключение кнопок 

  const settingsBtn = document.querySelector(".settingsBtn");               //Подключение кнопок 
  const settingsBord = document.querySelector(".settingsMenu");             //Подключение форм 

  settingsBtn.addEventListener("click", (clickEvent) => {                   //Открываем флому на клик
    clickEvent.preventDefault();
    settingsBord.classList.add("settingsMenu__open");
  });
  settingsBord.addEventListener("click", (clickEvent) => {
    if (
      clickEvent.target.classList.contains("settingsMenu__open") ==               //Если клик был на фон то закрываем форму
      settingsBord.classList.contains("settingsMenu__open")
    ) {
      settingsBord.classList.remove("settingsMenu__open");
    }
  });

  leaderBordMenuBtn.addEventListener("click", (clickEvent) => {     //Открываем флому на клик
    clickEvent.preventDefault();
    leaderBord.classList.add("leaderBordMenu__open");
  });

  leaderBord.addEventListener("click", (clickEvent) => {
    if (
      clickEvent.target.classList.contains("leaderBordMenu__open") ==           //Если клик был на фон то закрываем форму
      leaderBord.classList.contains("leaderBordMenu__open")
    ) {
      leaderBord.classList.remove("leaderBordMenu__open");
    }
  });
};
