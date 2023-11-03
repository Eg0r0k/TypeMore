export const TypeContainer = document.querySelector(".TypeMore__container");                //Контейнер игры
export const inputElement = document.getElementById("TypeMore__input");     //Ввод для игры (может времено)
export let currentIndex = 0;

export const updateClasses = () => {

    let countCorrectLetter = document.querySelectorAll(".correct").length 

    const currentWord = TypeContainer.querySelector(".word.current");

    if (!currentWord) return;

    const letters = currentWord.querySelectorAll(".letter");

    const filteredLetters = Array.from(letters).filter(letter => !letter.classList.contains("overincorrect"));

    currentWord.innerHTML = "";

    filteredLetters.forEach((letter, index) => {
        const inputValue = inputElement.value[index];
        
        if (inputValue) {
            if (inputValue === letter.textContent) {
          
                letter.classList.remove("incorrect");
                letter.classList.add("correct");
            } else {
                letter.classList.remove("correct");
                letter.classList.add("incorrect");
            }
        } else {
            letter.classList.remove("incorrect");
            letter.classList.remove("correct");
        }

        currentWord.appendChild(letter);
    });
    
    if (inputElement.value.length > filteredLetters.length) {
        for (let i = filteredLetters.length; i < inputElement.value.length && i < filteredLetters.length + 10 ; i++) {
            const letterElement = document.createElement("span"); 
            letterElement.classList.add("letter", "overincorrect");
            letterElement.textContent = inputElement.value[i];
            currentWord.appendChild(letterElement);
        }
    }

    // Проверяем, если следующая буква для ввода
    const nextLetter = currentWord.querySelector(".letter:not(.correct):not(.incorrect)");

    // Убираем стиль с предыдущей следующей буквы (если она есть)
    const previousNextLetter = currentWord.querySelector(".letter.next");
    if (previousNextLetter) {
        previousNextLetter.classList.remove("next");
    }
    
    if (nextLetter) {
        nextLetter.classList.add("next");
    }
    
    // Проверяем, если все буквы имеют класс "correct"
    const allCorrect = [...letters].every(letter => letter.classList.contains("correct"));
   
    if (allCorrect) {
        inputElement.value='';
        showNextWord(); // Вызываем функцию переключения на следующее слово
    }
    return countCorrectLetter
};

export const showNextWord = () => {

    //=========================================================================Change=====================================================
    const words = TypeContainer.querySelectorAll(".word");
     
    let allWordsCorrect = [...document.querySelectorAll(".word")].every(word => {
        return [...word.querySelectorAll(".letter")].every(letter => letter.classList.contains("correct"));
    }); 

    if (allWordsCorrect) {
      inputElement.disabled = true;
    }
    //=====================================================================================================================================


    if (currentIndex <= words.length) {
      
       
        // Убираем класс "current" с предыдущего слова (если оно есть)
        const previousWord = TypeContainer.querySelector(".word.current");
        if (previousWord) {
            previousWord.classList.remove("current");
        
        }
     
        words[currentIndex].classList.add("current");
        currentIndex++;
    }
    
            //Доделать 
};