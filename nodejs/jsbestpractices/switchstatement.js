function aiedrasMutterings(lampsLit){
  var aiedrasWords;

  switch(lampsLit){
    case 1 : aiedrasWords = "Darkness, there is so much darkness still shrouding the land.";
    case 2 : aiedrasWords = "A becaon of hope, these two lamps are, but two more still await.";
    case 3 : aiedrasWords = "Nearly it is complete, twilight breaking, is that a song I hear?";
    case 4 : aiedrasWords = "It is done, a new age has begun, a new dawn has risen.";
    default: aiedrasWords = "Shall we live in Infinite Midnight always?";
  }

  return aiedrasWords;
}

console.log(aiedrasMutterings(3))