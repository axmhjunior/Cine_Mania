export const translator = async (text, inputLanguage="auto", outLanguage="en")=>{
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outLanguage}&dt=t&q=${text}`)
    const data = await res.json()
    
    
    return data[0].map(item=> item[0]).join(" ")
}