export const header = async () => {
    const leaderBord = document.querySelector(".leaderBordMenu");
    const leaderBordMenuBtn = document.querySelector(".leaderBordBtn");
    const leaderBordCloseTest = document.querySelector(".leaderBoardMenu__btn--test");

    leaderBordMenuBtn.addEventListener("click", (clickEvent) => {
        clickEvent.preventDefault();
        leaderBord.classList.add("leaderBordMenu__open");
    });

    leaderBordCloseTest.addEventListener("click", () => {
        leaderBord.classList.remove("leaderBordMenu__open");
    });
};
