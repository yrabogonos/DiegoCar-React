let cityName = document.querySelector('.banner-city');
let latitude;
let date = new Date();
var getTomorrow = function(i){ // To get next Date
    var now = new Date();
    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + i,
        now.getHours(),
        now.getMinutes(),
        now.getSeconds());
  };

const optionsLocation = {           
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '215a38f3e4msh38cb9dfdf6e3b1ap102f5djsna11f63257923',
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
    }
};

function success(pos){
    const cord = pos.coords;
    var lat = cord.latitude;            // coords
    var lon = cord.longitude;
    
    fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=${lat+'%2C'+lon}&language=ua`, optionsLocation) // comment fetch here!
    .then(response => response.json())
    .then(response =>{
        cityName.textContent = response.results[0].address_components[3].short_name;
    })
    .catch(err => console.error(err));

   window.onload = function(){
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)  // banner weather fetch
    .then(response => response.json())
    .then(data =>{
        let weather = data.current_weather;
        let imgPathes = ['./img/day-cloud.png','./img/day-rain.png','./img/day-snow.png', './img/day-sun.png','./img/night-moon.png','./img/night-rain.png','./img/night-cloud.png'];
        let hour = date.getHours();
        document.querySelector('.card-temp').textContent = Math.round(weather.temperature);
        if(hour < 19 && hour >= 6){
            if(weather.weathercode == 0 || weather.weathercode == 1){
                document.querySelector('.card-banner-src').src = imgPathes[3];      // clear day
            }
            else if(weather.weathercode == 2 || weather.weathercode == 3){
                document.querySelector('.card-banner-src').src = imgPathes[0];      // cloudly day
            }
            else if(weather.weathercode == 77 || weather.weathercode == 85 || weather.weathercode == 86){
                document.querySelector('.card-banner-src').src = imgPathes[2];      //snowing day
            }
            else{
                document.querySelector('.card-banner-src').src = imgPathes[1];    // rainny day
            }
        }
        if(hour >= 19 || hour < 6){
            document.querySelector('.card-wrap').style.backgroundColor = '#f7f8fa';
            document.querySelector('.card-temp').style.color = '#6565c1';
            document.querySelector('.card-wrap p').style.color = '#6565c1';
            if(weather.weathercode == 0 || weather.weathercode == 1){
                document.querySelector('.card-banner-src').src = imgPathes[4];      // clear night
            }
            else if(weather.weathercode == 2 || weather.weathercode == 3){
                document.querySelector('.card-banner-src').src = imgPathes[6];      // cloudly night
            }
            else if(weather.weathercode == 77 || weather.weathercode == 85 || weather.weathercode == 86){
                document.querySelector('.card-banner-src').src = imgPathes[2];      //snowing night
            }
            else{
                document.querySelector('.card-banner-src').src = imgPathes[5];    // rainny night
            }
        }
    });

    function chooseImage(hour,weathercode){
           // 
        let imgPathes = ['./img/day-cloud.png','./img/day-rain.png','./img/day-snow.png', './img/day-sun.png','./img/night-moon.png','./img/night-rain.png','./img/night-cloud.png'];
       if(hour < 19 && hour >= 6){
        if(weathercode == 0 || weathercode == 1){
            return `<img class="card-banner-src" src="${imgPathes[3]}" alt="">`;      // clear day
        }
        else if(weathercode == 2 || weathercode == 3){
            return `<img class="card-banner-src" src="${imgPathes[0]}" alt="">`;      // cloudly day
        }
        else if(weathercode == 77 || weathercode == 85 || weathercode == 86){
            return `<img class="card-banner-src" src="${imgPathes[2]}" alt="">`;      //snowing day
        }
        else{
            return `<img class="card-banner-src" src="${imgPathes[1]}" alt="">`;   // rainny day
        }
    }
    if(hour >= 19 || hour < 6){
        if(weathercode == 0 || weathercode == 1){
            return `<img class="card-banner-src" src="${imgPathes[4]}" alt="">`;      // clear night
        }
        else if(weathercode == 2 || weathercode == 3){
            return `<img class="card-banner-src" src="${imgPathes[6]}" alt="">`;      // cloudly night
        }
        else if(weathercode == 77 || weathercode == 85 || weathercode == 86){
            dreturn `<img class="card-banner-src" src="${imgPathes[2]}" alt="">`;      //snowing night
        }
        else{
            return `<img class="card-banner-src" src="${imgPathes[5]}" alt="">`;   // rainny night
        }
    }
    }

    // time banner
    let day = date.getDay();
    let month = date.getMonth();
    let dayNumber = date.getDate();
    let time = `${date.getHours()}:${date.getMinutes()}`;
    var en_Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var en_Day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    document.querySelector('.banner-date').textContent = `${en_Day[day]}, ${en_Month[month]} ${dayNumber}`;
    document.querySelector('.banner-update').textContent += time;

    //switcher cards
    let sw = 0; // default value

    // card-weather creator 
    class CardCreator{
        container = document.querySelector('.forecast-cards');
        clearContainer = function(){
            this.container.innerHTML = '';
        }
        createCards = function(sw){          
            if(sw==0){
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,weathercode`) 
                .then(response => response.json())
                .then(data=>{
                    let count_cards = 9;
                    let time = 0;
                    for(let i=0; i < count_cards; i++){
                        let temp_index = i*3;
                        if(time == 24){
                            time = 23;
                            temp_index -=1;
                        }
                    this.container.insertAdjacentHTML('beforeend', 
    `                  <div class="banner-card forecast-card">
                    <div class="forecast-card-wrap">
                        <div class="card-container">
                            <div class="card-today">Today</div>
                            <div class="card-img">
                                ${chooseImage(time,data.hourly.weathercode[temp_index])}
                            </div>
                            <div class="card-temp forecast-card-temp">${Math.round(data.hourly.temperature_2m[temp_index])}</div>
                            <p class ="card-time forecast-card-time">${time} : 00</p>
                        </div>
                    </div>
                </div>`);
                    time +=3;        
                }
                })
            }
            if(sw==1){
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=false&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,weathercode`)
                .then(response => response.json())
                .then(data =>{  // 12 + 24
                    let count_cards = 7;
                    let h = 12;
                    for(let i=0; i < count_cards; i++){
                        //Creating day
                        var tomorrow = getTomorrow(i);
                        var options = {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                        };
                        this.container.insertAdjacentHTML('beforeend', 
    `                      <div class="wcard">
                                <div class="wcard-wrap">
                                    <div class="wcard-container">
                                        ${chooseImage(12,data.hourly.weathercode[h])}
                                        <div class="wcard-day">${tomorrow.toLocaleDateString('en-EN', options)}</div>
                                        <div class="wcard-temp">${Math.round(data.hourly.temperature_2m[h])}</div>
                                    </div>
                                </div>
                            </div>
    
                        `);
                        h +=24;
                      
                     }
                });
                
            }
            //slider 
            let count = 1;
            let count2 = 1;
            
            function forward(sw, container){
                let max;
                if(sw == 0){
                    max=5;
                    
                    let cards = document.querySelectorAll('.forecast-card');
                    let cards_ = container.children;
                    let width = window.getComputedStyle(cards_[0]).width; 
                    width = width.slice(0,-1);
                    width = width.slice(0,-1);
                    width = Number(width);
                    if(count < max){
                        width = width*count;
                        for(let card of cards){
                            card.style.transform ="translateX(-"+ (width+(55*count))+ "px)";
                            card.style.transition=" all 2s";
                        }
                        count++; 
                    }
                    
                }
                if(sw==1){
                    max=2;
                    let cards = document.querySelectorAll('.wcard');
                    let cards_ = container.children;
                    let width = window.getComputedStyle(cards_[0]).width; 
                    width = width.slice(0,-1);
                    width = width.slice(0,-1);
                    width = Number(width);
                    if(count2 < max){
                        width = width*count2;
                        for(let card of cards){
                            card.style.transform ="translateX(-"+ (width+(55*count2))+ "px)";
                            card.style.transition=" all 2s";
                        }
                        count2++; 
                        
                    }
                    
                }
                
            }  
            function backward(sw,container){
                if(sw == 0){
                    if(count != 1){    
                        count--;
                        let cards = document.querySelectorAll('.forecast-card');
                        let cards_ = container.children;
                        let width = window.getComputedStyle(cards_[0]).width; 
                        width = width.slice(0,-1);
                        width = width.slice(0,-1);
                        width = Number(width);
    
                        width = width* (count-1);
                        for(let card of cards){
                            card.style.transform ="translateX(-"+(width+(50* (count-1)))+ "px)";
                            card.style.transition=" all 2s";
                        }   

                    }
                }
                if(sw == 1){
                    if(count2 == 1){
                        return;

                    }
                    count2--;
                    let cards = document.querySelectorAll('.wcard');;
                    let cards_ = container.children;
                    let width = window.getComputedStyle(cards_[0]).width; 
                    width = width.slice(0,-1);
                    width = width.slice(0,-1);
                    width = Number(width);

                    width = width* (count2-1);
                    for(let card of cards){
                        card.style.transform ="translateX(-"+(width+(50* (count2-1)))+ "px)";
                        card.style.transition=" all 2s";
                    }      
                }
            }
            document.querySelector('.forward').addEventListener('click', ()=>{
                forward(sw, this.container);
            });
            document.querySelector('.backward').addEventListener('click', ()=>{
                backward(sw, this.container);
            });
           
    
        };
        
    }

    let creator = new CardCreator();
    creator.createCards(sw);
    document.querySelector('#today').classList.add('actived');

    //Links

    document.querySelector('#today').onclick = function(e){
        sw = 0;
        creator.clearContainer();
        creator.createCards(sw);
        e.target.classList.add('activated');
        let weekly = document.querySelector('#weekly');
        weekly.classList.contains('activated') ? weekly.classList.remove('activated') : console.log();
    };
    document.querySelector('#weekly').onclick = function(e){
        sw = 1;
        creator.clearContainer();
        creator.createCards(sw);
        e.target.classList.add('activated');
        let today = document.querySelector('#today');
        today.classList.contains('activated') ? today.classList.remove('activated') : console.log();
    };
   

   
   };// end window.onload
    
}
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, optionsLocation);

//--------------------------------------------------------------------
let pressedTheme = false;
document.querySelector('.ctrl-theme').onclick = function(){
    pressedTheme = !pressedTheme;
    if(pressedTheme){
        document.body.style.backgroundColor = 'black';
        document.body.style.transition=" all 2s";
        document.querySelectorAll('.header-links').forEach(link=>{
            link.style.color = 'white';
            link.style.transition=" all 2s";
        });
        document.querySelector('.forward').style.backgroundColor = 'black';
        document.querySelector('.forward').style.border = '1px solid white';
        document.querySelector('.forward').style.color = 'white';
        document.querySelector('.forward').style.transition=" all 2s";
        //---------------------------------------------------------------
        document.querySelector('.backward').style.backgroundColor = 'black';
        document.querySelector('.backward').style.border = '1px solid white';
        document.querySelector('.backward').style.color = 'white';
        document.querySelector('.backward').style.transition=" all 2s";

        document.querySelector('#today').style.color = 'white';
        document.querySelector('#today').style.transition=" all 2s";
        document.querySelector('#weekly').style.color = 'white';
        document.querySelector('#weekly').style.transition=" all 2s";

        let img = document.querySelector('.ctrl-theme img');
        img.src=img.src.replace('icon/moon.webp',"icon/sun.webp");
        
    }
    if(!pressedTheme){
        document.body.style.backgroundColor = 'white';
        document.body.style.transition=" all 2s";
        document.querySelectorAll('.header-links').forEach(link=>{
            link.style.color = 'black';
            link.style.transition=" all 2s";
        });
        document.querySelector('.forward').style.backgroundColor = '#efefef';
        document.querySelector('.forward').style.border = '1px solid #efefef';
        document.querySelector('.forward').style.color = 'black';
        document.querySelector('.forward').style.transition=" all 2s";
        //---------------------------------------------------------------
        document.querySelector('.backward').style.backgroundColor = '#efefef';
        document.querySelector('.backward').style.border = '1px solid #efefef';
        document.querySelector('.backward').style.color = 'black';
        document.querySelector('.backward').style.transition=" all 2s";

        document.querySelector('#today').style.color = '#979aaf';
        document.querySelector('#today').style.transition=" all 2s";
        document.querySelector('#weekly').style.color = '#979aaf';
        document.querySelector('#weekly').style.transition=" all 2s";

        let img = document.querySelector('.ctrl-theme img');
        img.src=img.src.replace("icon/sun.webp",'icon/moon.webp');
    }
};

