import { randList } from "./randomList.js";
import { header } from "./header.js";                
import { updateClasses, showNextWord, TypeContainer, inputElement, currentIndex } from "./quoteValidation.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = async () => {
        const lengthListInput = document.getElementById("RandomListLenLength");

        const settingDoneButton = document.getElementById("settingDone");
        settingDoneButton.addEventListener("click", async () => {
            const inputValue = lengthListInput.value;
            let resultQuote = await randList(inputValue);                    //Работает не корректно! 
            // Дальше обрабатывайте результативный список слов
        });

        const test = lengthListInput.addEventListener("input", () => {
            const inputValue = lengthListInput.value
        });

        console.log(test);

        let resultQuote = await randList(2);

        inputElement.addEventListener("input", () => {
            if (currentIndex <= resultQuote.length) {
                updateClasses();
                let countCorrectLetter = updateClasses();
                let countAllLetters = document.querySelectorAll(".letter").length;
            }
        });

        showNextWord();
        header();
    }

    app();
});
