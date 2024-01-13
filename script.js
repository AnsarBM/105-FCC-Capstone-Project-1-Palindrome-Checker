//alert("Hey there!");

/*TODO 1: When you click on the "#check-btn" element, Take text from the text box*/
const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", ()=>{
    const textBox = document.getElementById("text-input");
    const originalText = textBox.value;
    
/*TODO 2: Check the text*/
/*(2a) If no value is entered into the "#text-input" element, an alert should appear with 
the text "Please input a value" */

if (originalText === ""){
    alert("Please input a value")
} else {
    /*(2b) If there is a value in the box */
        /*TODO 3: Remove all non-alphanumeric characters (punctuation, spaces and symbols) from the "originalText".
        
        NOTE: ASCII values for 
        Numeric characters 0-9 are 48 to 57.
        Alphabets (Upper Case) A-Z are 65 to 90.
        Alphabets (Lower Case) a-z are 97 to 122.

        */
        let wantedText = "";
        let unWantedChar = "";
        for (let i = 0; i < originalText.length;i++){
            const charASCIIcode = originalText.charCodeAt(i);
            if ((charASCIIcode >= 48 && charASCIIcode <= 57) ||
                (charASCIIcode >= 65 && charASCIIcode <= 90) ||
                (charASCIIcode >= 97 && charASCIIcode <= 122)
                ){
                wantedText += originalText.charAt(i);    // This holds all alphaNumeric characters from the "originalText"
            } else {
                unWantedChar += originalText.charAt(i);  // This holds all non-alphaNumeric characters from the "originalText"
            }
        }

        /* The if-statement below (using tenary operator "?")  was used to check 
        if there are non-alphaNumeric characters in the original text and print the result accordingly.
        We do not need it in our project, so we comment it out */
        
        /*
        unWantedChar === "" ? alert(`Your text "${wantedText}" has only alphaNumeric characters.`) 
                            : alert(`There are non-alphanumeric characters: "${unWantedChar}"  in your text: "${originalText}"`);
        */

        
        /*TODO 4: Turn all characters of "wantedText" into the same case (lower or upper case) and save as the updated Wanted Text*/
        let updatedWantedText = wantedText.toLowerCase();

        /*TODO 5: .split() the text into an array of string characters*/
        //updatedWantedText = updatedWantedText.split("");

        /*TODO 6: .reverse() the text-strings and save as the reverse text strings*/
        //let reverseText = updatedWantedText.reverse();

        /*TODO 7: .join() the reverse text to get a complete single reverse text*/
        //reverseText = reverseText.join("");
        

        /*TODO 4 to 7 can be joined into a single line */
        let reverseText = wantedText.toLowerCase().split("").reverse().join("");

        /*TODO 8: Compare lower Cased Alpha Numeric Text (updatedWantedText) with the Reverse Text
            (a) If original text strict equals reverse text print `"original text" is a palindrome` 
            (b) else original text strict not equal to reverse text print `"original text" is not a palindrome`
        */

        /* Function resultPrint() is defined to simplify the if-else statement */
        let resultBox = document.getElementById("result");
        let resultContent = resultBox.innerText;          // This gives the text of the result box.

        function resultPrint(resultText){
            resultBox.classList.add("modifyResult");      // This add the class "modifyResult" which add some styles to the result box. Check CSS Section for details.

            const userText = originalText;                
            const newPhrase = resultText;

            resultContent = resultContent.replace(resultContent,`${userText} ${newPhrase}`);   // This combines the user text and the result phrase then replaces the result box content
            resultBox.innerText = resultContent;

            document.getElementById("text-input").value = "";           // This removes the text from the input box once the check button is clicked.

        }

        if (updatedWantedText === reverseText){
            resultPrint(" is a palindrome");
        } else {
            resultPrint(" is not a palindrome");
        }
    }
});



        