

/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;   


    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
document.getElementById('length').addEventListener('change', charLength)

const uppercase = document.getElementById('uppercase')
const password = document.getElementById('password__result')

const uppercaselet = 'QWERTYUIOPASDFGHJKLZXCVBNM'

btn.addEventListener('click',() => {
    const includeUppercase = uppercase.checked;

    const password = generatePassword(includeUppercase);
  password.setElementById('btn')
})

function generatePassword(includeUppercase) {
    if (includeUppercase) {
      charLength += uppercaseLetters;
    
    
    let password = '';
    for (let i = 0; i < charLength; i++) {
      const randomIndex = Math.floor(Math.random() * charLength.length);
      password += charLength[randomIndex];  
    }
    return password;
    }
  }

  