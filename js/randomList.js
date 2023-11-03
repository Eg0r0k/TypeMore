import { randomWords } from "./API.js"      //Подключение API случайных слов
export const randList = async (length) => {                       //(Типа) рандомный список слов
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