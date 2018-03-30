// CUSTOM JS FILE //

function init(){
    $.ajax({
        url: './data/data.json',
        type: 'GET',
        failure: function(err){
            console.log('something went wrong :(');
        },
        success: function(response){
            //console.log(response);
            renderAverages(response);
            for(var i=0; i<response.length; i++){
                addDayCard(response[i])
            }
        }
    })
}

function addDayCard(currentDay){
      console.log(currentDay);
      var htmlToAdd =
      '<div class="card">'+
          '<div class="left-holder">'+
            '<h5>Date</h5>'+
            currentDay.day +
          '</div>'+
          '<div class="right-holder">'+
              '<div class="food-holder">'+currentDay.fruits.length+' fruit(s):<span> '+ currentDay.fruits.join(" ") +'</span></div>'+
              '<div class="food-holder">'+currentDay.veggies.length+' veggies:<span> '+ currentDay.veggies.join(" ") +'</span></div>'+
              '<div class="food-holder">'+currentDay.water.length+' waters:<span> '+ currentDay.water.join(" ") +'</span></div>'+
              '<div class="food-holder">'+currentDay.treats.length+' treat:<span> '+ currentDay.treats.join(" ") +'</span></div>'+
          '</div>'+
      '</div>'

    $('#day-cards').prepend(htmlToAdd);
}


// function to compute averages
function renderAverages(foodData){
    var keysToAvg = ['fruits', 'veggies', 'water', 'treats'];

    for(var i=0; i<keysToAvg.length; i++){
        var currentKey = keysToAvg[i];
        var currentHtmlId = '#' + currentKey + 'Avg';
        var currentAvg = getAverage(currentKey,foodData);
        $(currentHtmlId).text(currentAvg);
    }
}

function getAverage(currentKey, foodData){
    var totalDays = foodData.length;
    var totalItemCount = 0;
    for(var i=0; i<foodData.length; i++){
        var currentDay = foodData[i];
        totalItemCount = totalItemCount + currentDay[currentKey].length;
    }

    if(totalItemCount==0) return 0;

    var currentAverage = totalItemCount/totalDays;
    var roundedAverage = Math.round(10*currentAverage)/10;
    return roundedAverage;
}


window.addEventListener('load', init);
