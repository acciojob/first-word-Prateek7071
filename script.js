function firstWord(str) {

  if (str.length === 0) return str;
  else {
    str = str.trim().split(" ");
    return str[0]
  }

	
}

// Do not change the code below

//const s = prompt("Enter String:");
alert(firstWord(s));
