function convertCtoF(celsius) {
    try {
        let fahrenheit;
        fahrenheit = (celsius*9/5 + 32) / 0;
        throw new Error('This is the throw keyword');
        //return fahrenheit;
    } catch (error) {
        console.log(error);
    } 
}
  
console.log(convertCtoF(30));