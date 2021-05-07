const string = "Привет! Как дела?";

const vowels = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];

const getVowels = stringFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringFilter.length; i++) {
        const currentLetter = stringFilter[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }

    return extractedVowels;
}

console.log(getVowels(string));


