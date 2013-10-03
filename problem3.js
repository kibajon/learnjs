// Count words in the string
function numWords(str) {
      var n=str.split(" ",1000);
      var s = n.length;
return s;  
}


numWords("I am a short sentence");

numWords ("My name is Kiba") === 4;



// Count all characters in the string
function numChars(str) {
    var length = str.length;
	return length;
}
numChars("My name is Kiba");

