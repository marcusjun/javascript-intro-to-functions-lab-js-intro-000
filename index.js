function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  console.log(string.toLowerCase())
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase=string.toLowerCase()
  var uppercase=string.toUpperCase()
  if (string.toLowerCase()===lowercase) {
    return ("I can't hear you!")
  } else if (string.toUpperCase()===uppercase){
    return ("YES INDEED!")
  }
}
