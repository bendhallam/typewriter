const sentence = 'hello there from lighthouse labs';
let timeTaken = 0;
for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
    process.stdout.write(sentence[i])
  }, i*50)
  timeTaken += 50;
}
setTimeout(() => process.stdout.write('\n'), timeTaken + 50)