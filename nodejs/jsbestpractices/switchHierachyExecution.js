function CaretakerMedallion (caretaker){
  switch(caretaker) {
    case "ElementElder":
      this.goldenEdge = "Consilium autem liberabit vos";
    case "ColorCardinal":
      this.silverStamp = "Non video colorem, colore videt me";
    case "PixelPriest":
      this.bronzeBanner =  "Omne initium est a pixel";
    case "FontFriar": 
      	this.circumscribedSquare = "Venit Comic Sans";
    case "StyleSensei":
      	this.innerRing = "Ars autem est in aeternum";
  }
}

// Here's a sample usage of our CaretakerMedallion function with two sample inputs.
var medallion1 = new CaretakerMedallion("ColorCardinal");
var medallion2 = new CaretakerMedallion("StyleSensei");

console.log(medallion1);
console.log(medallion2);