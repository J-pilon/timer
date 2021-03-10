const commandLine = process.argv.slice(2);
console.log(commandLine);

for (let i = 0; i < commandLine.length; i++) {
  if (commandLine[i] > 0 && !NaN) {
      setTimeout(()=> {
      process.stdout.write('!RISE AND SHINE!\n');
    },commandLine[i]);
  } else {
    console.log('what are you doing?');
  }
};
