// CUSTOM JS FILE //

var jsonData = [
    {
       "name" : "Sam Slover",
        "imageURL": "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAy7AAAAJDZjYzM5YjdkLTY4ZjctNDEyNy04YzQxLWUyMWQwZGI0ZGIyOA.jpg",
        "homeLocation": "Atlanta, GA",
        "homeMilesFromNyc": 861,
        "dataInterest": ["Food", "Health"],
        "jsLevel": 5
    },
    {
       "name" : "Dan Shiffman",
        "imageURL": "https://images.hanselminutes.com/images/584.jpg",
        "homeLocation": "Baltimore",
        "homeMilesFromNyc": 192,
        "dataInterest": ["Coding", "Unicorns"],
        "jsLevel": 10
    },
    {
       "name" : "Dan O'Sullivan",
        "imageURL": "https://tisch.nyu.edu/content/dam/tisch/itp/Faculty/dan-osullivan1.jpg.preset.square.jpeg",
        "homeLocation": "Chicago",
        "homeMilesFromNyc": 790,
        "dataInterest": ["Human Anatomy", "Cool Shirts"],
        "jsLevel": 3
    }
]


function init() {
    renderCards()
}

function renderCards() {
    for (i = 0; i < jsonData.length; i++) {
        var card = buildCard(jsonData[i]);
        $("#cardHolder").append(card);
    }
}

function buildCard(cardData){
    return  '<div class="card">'+
              '<div class="header border">'+
                  '<img src="'+cardData.imageURL+'">'+
                  '<h1>'+cardData.name+'</h1>'+
              '</div>'+
              '<div class="stats border">'+
                '<div class="statsHolder">'+
                  '<div class="regularFont">'+cardData.homeLocation+'</div>'+
                  '<div class="subtext">Home</div>'+
                '</div>'+
                '<div class="statsHolder">'+
                  '<div class="largeFont">'+cardData.homeMilesFromNyc+'</div>'+
                  '<div class="subtext">miles</div>'+
                '</div>'+
              '</div>'+
              '<div class="jsViz border">'+
                  '<div class="barChart">'+
                    '<div class="bar" style="width:'+cardData.jsLevel*10+'%">'+
                    '</div>'+
                  '</div>'+
                  '<div class="jsStats">'+
                    '<div class="largeFont">'+cardData.jsLevel+'</div>'+
                    '<div class="subtext">JS love</div>'+
                  '</div>'+
              '</div>'+
              '<div class="interests">'+
                '<div class="heading">Data Interests</div>'+
                '<div class="tagHolder">'+
                    cardData.dataInterest.map(tag => '<div class="tag">'+tag+'</div>');
                '</div>'+
              '</div>'+
            '</div>';
}

window.addEventListener('load', init);
