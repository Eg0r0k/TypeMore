import { randomWords } from "./API.js"              //Подключение API случайных слов
import { header } from "./header.js";                //Подключение Хедера 
import { updateClasses, showNextWord, TypeContainer, inputElement, currentIndex } from "./quoteValidation.js";
document.addEventListener("DOMContentLoaded",() =>          
{
    const app = async ()=>                  //Создание ассинхронного приложения        
    {

    
        let randList = async (length) => {                       //(Типа) рандомный список слов
            const randomAppWords = await randomWords(length);        
         
            let quoteList = []
        
            for(let i=0; i < length; i++) {
                quoteList.push(randomAppWords[i])
            }

            quoteList.forEach(key => {
                const p = document.createElement("p")
                p.classList.add("word") // Добавляем класс "word" к элементу p
                const TypeContainer = document.querySelector(".TypeMore__container")
                let word = ""
        
                for(let i = 0; i < key.length; i++) {
                    const letterElement = document.createElement("span")
                    letterElement.classList.add("letter")
                    letterElement.textContent = key[i]
                    word += key[i]
                 
                    p.appendChild(letterElement) // Добавляем букву к элементу p
                }
     
                TypeContainer.appendChild(p) // Добавляем элемент p с классом "word" в контейнер
            })
        
            return quoteList
        }
        
        let resultQuote = await randList(2);           //Плдучаем результативный список слов 
        inputElement.addEventListener("input", () => {
            if (currentIndex <= resultQuote.length) {
                updateClasses();
                let countCorrectLetter = updateClasses()
                let countAllLetters = document.querySelectorAll(".letter").length
                console.log(countCorrectLetter/countAllLetters * 100)
                let allWordsCorrect = [...document.querySelectorAll(".word")].every(word => {
                    return [...word.querySelectorAll(".letter")].every(letter => letter.classList.contains("correct"));
                });
        
                if (allWordsCorrect) {
                    console.log("Тест");
                }
            }
        });

        showNextWord();
        
 
     

        header() //запуск функции
    } 
    app() //запуск функции
})
