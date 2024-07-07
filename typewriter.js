const sentence = 'hello there from lighthouse labs';
//create a variable to track how long sentence will take to type out
let timeTaken = 0;
//iterate through the characters of the sentence
for (let i = 0; i < sentence.length; i++) { 
    setTimeout(() => {
    //type out the current character and set timer to increments of 50 milliseconds
    process.stdout.write(sentence[i])}, i*50);
  //increase amount of time it will take by 50 milliseconds
  timeTaken += 50;
}
//schedule a new line to be added 50 milliseconds after the last character is typed out
setTimeout(() => process.stdout.write('\n'), timeTaken + 50) // add a newline