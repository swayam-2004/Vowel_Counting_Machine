function vowelcount()
{
    let text=document.getElementById("inputText").value;
    let vowelc=0;
    text=text.toLowerCase();
    for(let i=0;i<text.length;i++)
    {
       let char=text.charAt(i);
       if(isVowel(char))
       {
        vowelc++;
       }
    
    }
    const result = document.getElementById('result');
    result.textContent= "No of Vowels : "+vowelc;
}

function isVowel(char)
{
    const vowels=["a","e","i","o","u"];
    return vowels.includes(char);
}