const numinput = document.getElementById("numinput")
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");
const password = document.getElementById("password");
const errormessage = document.getElementById("errormessage")
const copy = document.getElementById('copy')

function generatePassword(){
    let lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
    let uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbersString = '0123456789';
    let symbolsString = '!@#$%^&*()-_=+[]{};:\'",.<>/?\\|`~';
    let passwordopts = ""
    copy.style.display = 'none'
    password.style.display = 'none'
    copy.textContent = `Copy`;
    errormessage.textContent = "Your password is shown below"
    if(numinput.value == ""){
        errormessage.textContent = "please enter a number 1-20"
        return;
    }
    if(numinput.value < 0 || numinput.value > 20){
        errormessage.textContent = "please enter a valid number"
        return;
    }
    if(!lowercase.checked && !uppercase.checked && !numbers.checked && !symbols.checked){
        errormessage.textContent = "Select atleast one checkbox"
        return;
    }
    if(lowercase.checked)
        passwordopts += lowercaseString;
    if(uppercase.checked)
        passwordopts += uppercaseString;
    if(numbers.checked)
        passwordopts += numbersString;
    if(symbols.checked)
        passwordopts += symbolsString;

    let passwordreturn = "";
    for(let i = 0; i < numinput.value; i++){
        let randomnum = Math.floor(Math.random() * passwordopts.length);
        passwordreturn += passwordopts[randomnum];
    }
    password.textContent = passwordreturn;
    copy.style.display = 'block'
    password.style.display = 'block'


}
function copyText(){
    navigator.clipboard.writeText(password.textContent).then(function() {
        copy.textContent = `Copied✅`;
    })
}