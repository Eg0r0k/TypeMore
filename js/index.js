import { randomWords } from "./API.js"              //Подключение API случайных слов
import { header } from "./header.js";                //Подключение Хедера 
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
        
        let resultQuote = await randList(60);       //Плдучаем результативный список слов 

        const TypeContainer = document.querySelector(".TypeMore__container");           //Контейнер игры
        const inputElement = document.getElementById("TypeMore__input");                //Импут игры (возможно временный)
        let currentIndex = 0;
        const updateClasses = () => {                                                  //При вводе в инпут обновляем классы букв и слов
            const currentWord = TypeContainer.querySelector(".word.current");           
            if (!currentWord) return;                   
        
            const letters = currentWord.querySelectorAll(".letter");
        
            letters.forEach((letter, index) => {
                const inputValue = inputElement.value[index];
                if (inputValue) {
                    if (inputValue === letter.textContent) {
                        letter.classList.remove("incorrect");
                        letter.classList.add("correct");                    //Тут пока что очень много багов ;(
                    } else {
                        letter.classList.remove("correct");
                        letter.classList.add("incorrect");
                    }
                } else {
                    if (letter.classList.contains("overincorrect")) {
                        letter.remove();
                    } else {
                        letter.classList.remove("correct", "incorrect");
                    }
                }
            });
        
            if (inputElement.value.length > letters.length) {
                for (let i = letters.length; i < inputElement.value.length && i < letters.length + 4; i++) {
                    const letterElement = document.createElement("span"); 
                    letterElement.classList.add("letter", "overincorrect");
                    letterElement.textContent = inputElement.value[i];
                    currentWord.appendChild(letterElement);
                }
            }
        };
        inputElement.addEventListener("input", () => {
            if (currentIndex < resultQuote.length) {
                updateClasses();
            }
        });

        const showNextWord = () => {                                            //Отображение текущего слова (присваивание класса текущего)
            const words = TypeContainer.querySelectorAll(".word");
            if (currentIndex < words.length) {
                words[currentIndex].classList.add("current");
                currentIndex++;
            }
        };

        showNextWord();    //запуск функции


    
        header() //запуск функции
    } 
    app() //запуск функции
})
