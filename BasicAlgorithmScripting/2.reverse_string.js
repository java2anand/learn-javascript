function reverseString(str) {
    let new_str = '';
    for(let i=0; i<= str.length; i++)
    {
        new_str += (str.charAt([str.length - i]))
    }
    
    return new_str;
}

reverseString("hello world");
