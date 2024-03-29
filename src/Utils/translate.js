export const translator = async (text)=>{
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=pt-BR|en-GB`);
    const data = await res.json();
    return  data.responseData.translatedText
}