function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%¨&*()_+=`{}[]^~:;.,/?\\";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if (length <= 0) {
        return "Password length must be at least 1";
    }
    if (allowedChars.length === 0) {
        return "At least 1 set of characters needs to be selected";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generateAndDisplayPassword() {
    const passwordLength = document.getElementById('passwordLengthRange').value;
    document.getElementById('passwordLengthValue').textContent = passwordLength;

    const includeLowerCase = document.getElementById('includeLowerCase').checked;
    const includeUpperCase = document.getElementById('includeUpperCase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    document.getElementById('generatedPassword').textContent = password;
}

passwordLengthRange.addEventListener('input', function() {
    passwordLengthValue.textContent = this.value;
});