function firstWord(s) {

  if (s.length === 0) return s;
  else {
  s= s.trim().split(" ");
    return s[0]
  }

	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
