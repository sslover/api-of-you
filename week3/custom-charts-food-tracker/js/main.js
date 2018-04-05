// CUSTOM JS FILE //

var foodConfig = [
    {
        key: 'fruits',
        goal: 2,
        color: '#AA5FFC',
    },
    {
        key: 'veggies',
        goal: 2,
        color: '#0BDF9E',
    },
    {
        key: 'water',
        goal: 8,
        color: '#06C1F8',
    },
    {
        key: 'treats',
        goal: 1,
        color: '#FFBA00',
    },
];

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

    foodConfig.forEach(function(currentKey){
        var currentHtmlId = '#' + currentKey.key + 'Avg';
        var currentAvg = getAverage(currentKey.key,data);
        $(currentHtmlId).text(currentAvg);

        var currentBarId = '#' + currentKey.key + 'Bar';
        $(currentBarId).css({ "background-color": currentKey.color, "width": (currentAvg/currentKey.goal)*100 + '%' })
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
          '<div class="chart-holder">'+
            buildChartBars(currentDay) +
          '</div>'+
        '</div>'+
        '<div class="right-holder">'+
            '<div class="food-holder">'+ currentDay.fruits.length +' fruit(s):<span> '+ currentDay.fruits.join(" ") +'</span></div>'+
            '<div class="food-holder">'+ currentDay.veggies.length +' veggie(s):<span> '+ currentDay.veggies.join(" ") +'</span></div>'+
            '<div class="food-holder">'+ currentDay.water.length +' water(s):<span> '+ currentDay.water.join(" ") +'</span></div>'+
            '<div class="food-holder">'+ currentDay.treats.length +' treat(s):<span> '+ currentDay.treats.join(" ") +'</span></div>'+
        '</div>'+
      '</div>'+
    '</div>';

    return $('#day-cards').append(dayHtml);
}

// functiom to build a chart based on current day's data
function buildChartBars(currentDay){

    // // which keys do we need to render?
    // var barsToRender = [
    //     {
    //         key: 'fruits',
    //         goal: 2,
    //         color: '#AA5FFC',
    //     },
    //     {
    //         key: 'veggies',
    //         goal: 2,
    //         color: '#0BDF9E',
    //     },
    //     {
    //         key: 'water',
    //         goal: 8,
    //         color: '#06C1F8',
    //     },
    //     {
    //         key: 'treats',
    //         goal: 1,
    //         color: '#FFBA00',
    //     },
    // ];

    var bars = ''; // empty string to hold our bar html

    foodConfig.forEach(function(currentKey){
        bars = bars +
        '<div class="label" style="color:'+currentKey.color+'">'+
          '<div>'+currentKey.key+'</div>'+
          '<div>'+currentDay[currentKey.key].length+'/'+currentKey.goal+'</div>'+
        '</div>'+
        '<div class="bar-holder">'+
          '<div class="bar" style="background-color:'+currentKey.color+'; width:'+(currentDay[currentKey.key].length/currentKey.goal)*100+'%"></div>'+
        '</div>';
    })

  return bars;
}

//document.getElementById('theInput').addEventListener('change', getWeather);
window.addEventListener('load', init);
