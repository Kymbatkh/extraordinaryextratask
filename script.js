let button = document.querySelector("button");
let message = document.getElementById("message");

button.addEventListener("click", () => {
    if (message.length < 20) {
        esult.innerHTML = "the input message must be at least 20 characters long!";
    } else {
        let result = document.getElementById('result');
        let messageWords = message.value.toLowerCase().split(" ");
        let theMostFrequentWord = null;
        let numberOfWordsInTheMessage = 1;
        let maxNum = 0;
        let maxID = 0;
        for (let i = 0; i < messageWords.length; i++) {
            if (messageWords[i] != theMostFrequentWord) {
                if (numberOfWordsInTheMessage > maxNum) {
                    theMostFrequentWord = messageWords[i];
                    maxNum = numberOfWordsInTheMessage;
                    maxID = i;
                }
            } else {
                numberOfWordsInTheMessage++;
                if (numberOfWordsInTheMessage > maxNum) {
                    theMostFrequentWord = messageWords[i];
                    maxNum = numberOfWordsInTheMessage;
                    maxID = i;
                }
            }
        }
        result.innerHTML = 'The most frequent word of this message is "' + messageWords[maxID] + '". The number of words in this message is ' + maxNum + '.';
        let randomPhrasesAndPictures = [
            {
                phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
                imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
            {
                phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
                imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
            {
                phrase: "You are a wizard, Harry (c) Hagrid",
                imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]
        let num = Math.floor(Math.random() * randomPhrasesAndPictures.length);
        document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[num].phrase;
        document.getElementById("picture").src = randomPhrasesAndPictures[num].imageURL;
    }
});
