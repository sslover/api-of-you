var loadedJSON;
var foodData = [];
var fruitColor, veggieColor, waterColor, treatColor;

function preload() {
  var url = 'data/data.json';
  loadedJSON = loadJSON(url);
}

function setup() {
    foodData = loadedJSON.foods;
    // log out food data to see it came in correct
    console.log(foodData);
    // set minSize and maxSize
    createCanvas(windowWidth,windowHeight);
    background('#232F5B');
    fruitColor = color('#AA5FFC');
    veggieColor = color('#0BDF9E');
    waterColor = color('#06C1F8');
    treatColor = color('#FFBA00');
    ellipseMode(CORNER);
    rectMode(CORNER);

    drawDays();
}

function draw() {
    // nothing to do as it's a one-time render
}

function drawDays(){

    // starting position
    var xPos = 5;
    var yPos = 50;

    var shapeWidth = 24;

    // width between days
    var yOffset = 120;
    for(var i=foodData.length-1; i>=0; i--){
        noStroke();

        // write the day
        fill('#fff');
        textSize(18);
        text(foodData[i].day, xPos, yPos);

        // draw the fruits
        foodData[i].fruits.forEach(function(e){
            fill(fruitColor);
            ellipse(xPos,yPos+12,shapeWidth,shapeWidth);
            xPos += shapeWidth*1.5;
        })

        // draw the veggies
        foodData[i].veggies.forEach(function(e){
            fill(veggieColor);
            ellipse(xPos,yPos+12,shapeWidth,shapeWidth);
            xPos += shapeWidth*1.5;
        })

        // draw the water
        foodData[i].water.forEach(function(e){
            fill(waterColor);
            ellipse(xPos,yPos+12,shapeWidth,shapeWidth);
            xPos += shapeWidth*1.5;
        })

        // draw the treats
        foodData[i].treats.forEach(function(e){
            fill(treatColor);
            ellipse(xPos,yPos+12,shapeWidth,shapeWidth);
            xPos += shapeWidth*1.5;
        })

        // rest the position of the charts to 0 on the X axis and increment down on the Y axis
        xPos=5;
        yPos+=yOffset;
    }
}





