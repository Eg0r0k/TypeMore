
export const randomWords = async (length) => 
{
    try
    {
      
        const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${length}`)
        
 
        return await response.json()
    }
    catch(error)
    {
        console.log(error)
    }
}