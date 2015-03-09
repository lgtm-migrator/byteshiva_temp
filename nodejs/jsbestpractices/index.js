var allPacked = true;
var readyToGo = true;
var adventureTime;

adventureTime = allPacked && readyToGo ?

  function( ){
    return "Adventure time is now!" ;
  }()
  :
  function( ){
    return "Adventuring has been postponed!" ;
  }() ;

console.log(adventureTime);