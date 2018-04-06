// CUSTOM JS FILE //

var foodConfig = [
    {
        key: 'fruits',
        color: '#AA5FFC',
        goal: 2,
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
    }
]

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
    foodConfig.forEach(function(currentFood){
        var currentHtmlId = '#' + currentFood.key + 'Avg';
        var currentAvg = getAverage(currentFood.key,data);
        $(currentHtmlId).text(currentAvg);

        var currentBarId = '#' + currentFood.key + 'Bar';
        $(currentBarId).css({ "background-color": currentFood.color, "width": (currentAvg / currentFood.goal)*100+'%' })

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
            createBarChart(currentDay)+
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

function createBarChart(currentDay){

    var bar = '';

    foodConfig.forEach(function(currentFood){
        bar = bar +
        '<div class="label" style="color:'+currentFood.color+'">'+
          '<div>'+currentFood.key+'</div>'+
          '<div>'+currentDay[currentFood.key].length+'/'+currentFood.goal+'</div>'+
        '</div>'+
        '<div class="bar">'+
          '<div class="coloredBar" style="background-color:'+currentFood.color+'; width:'+(currentDay[currentFood.key].length/currentFood.goal)*100+'%"></div>'+
        '</div>'
    })

    return bar;
}

//document.getElementById('theInput').addEventListener('change', getWeather);
window.addEventListener('load', init);
