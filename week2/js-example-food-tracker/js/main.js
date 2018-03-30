// CUSTOM JS FILE //

function init(){

    // first, take user to bottom of page
    document.body.scrollTop = document.body.scrollHeight;

    // on page load, load in our data from our json file
    $.ajax({
        url: './data/data.json',
        type: 'GET',
        failure: function(err){
            console.log ("There was an issue getting the data.");
        },
        success: function(response) {
            console.log('the response from our JSON is -- >');
            console.log(response);

            // if no data, let's stop the script from running and log it
            if(!response || response==null || response.length==0) return console.log('no data to show!');

            // let's determine the avg stats
            renderStats(response);

            //let's build our day cards
            response.forEach(function(currentDay){
                addDayCard(currentDay);
            })
        }
    });
}

// function to detemine the average # of foods per day
function renderStats(data){
    var keys = ['fruits', 'veggies', 'water', 'treats'];
    keys.forEach(function(currentKey){
        var currentHtmlId = '#' + currentKey + 'Avg';
        $(currentHtmlId).text(getAverage(currentKey,data));
    })
}

function getAverage(key, data){
    var totalDays = data.length;
    var totalItemCount = 0;
    data.forEach(function(currentDay){
        totalItemCount = totalItemCount + currentDay[key].length;
    })

    if(totalItemCount==0) return 0;

    // else, we want to get the avg, which is totalItems / totalDays
    else return Math.round(10*(totalItemCount/totalDays))/10;
    // rounded to the nearest 10th in JS --> Math.round(10*X)/10
}

function addDayCard(currentDay){
    var dayHtml =
    '<div class="card">'+
         '<div class="left-holder">'+
          '<h5>Date</h5>'+
          currentDay.day +
        '</div>'+
        '<div class="right-holder">'+
            '<div class="food-holder">'+ currentDay.fruits.length +' fruit(s):<span> '+ currentDay.fruits.join(" ") +'</span></div>'+
            '<div class="food-holder">'+ currentDay.veggies.length +' veggie(s):<span> '+ currentDay.veggies.join(" ") +'</span></div>'+
            '<div class="food-holder">'+ currentDay.water.length +' water(s):<span> '+ currentDay.water.join(" ") +'</span></div>'+
            '<div class="food-holder">'+ currentDay.treats.length +' treat(s):<span> '+ currentDay.treats.join(" ") +'</span></div>'+
        '</div>'+
      '</div>'+
    '</div>';

    return $('#day-cards').prepend(dayHtml);
}

//document.getElementById('theInput').addEventListener('change', getWeather);
window.addEventListener('load', init);
