// Q. Create a function that takes a string and returns a count of unique words. (, . are not words)

// String = “Hi, My name is Awdiz, I  am located at Vashi.” 

// Output :  { Hi : 1, My : 1, name : 1, is : 1 …   }
// var String="Hi, My name is Awdiz,I am located at Vashi."

// function test(){
//    var count=
//    console.log(String)

//    for(i=0;i<=String.length;i++){

//    console.log(String[i])

//    }
// }

// test()



function countUniqueWords(inputString) {
   // Remove punctuation and convert to lowercase
   const cleanedString = inputString.replace(/[^\w\s]/g, '').toLowerCase();
 
   // Split the string into an array of words
   const wordsArray = cleanedString.split(/\s+/);
 
   // Create a Set to store unique words
   const uniqueWordsSet = new Set(wordsArray);
 
   // Return the count of unique words
   return uniqueWordsSet.size;
 }
 
 // Example usage:
 const inputString = "This is a sample string. This string contains some sample words.";
 const uniqueWordCount = countUniqueWords(inputString);
 console.log("Unique word count:", uniqueWordCount);