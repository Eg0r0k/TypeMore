import { randomWords } from "./API.js"
import { header } from "./header.js";
document.addEventListener("DOMContentLoaded",() =>
{
    const app = async ()=>
    {
      
    
        let randList = async (length) => 
        {
            const randomAppWords =  await randomWords(length);        
            console.log(randomAppWords)
            let quoteList = []
            for(let i=0; i < length; i++)
            {
           
                quoteList.push(randomAppWords[i])
            }
            quoteList.forEach(element => {
                let p = document.createElement("p")
                p.textContent = element
                document.body.append(p)
            });
            return  quoteList
        }
        
        let result = await randList(10)
    
        header()
    } 
    app()
})
