// let cityName = document.querySelector('.banner-city');
// let lat;
// let lon;
// let sw = 0;
// const op = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '215a38f3e4msh38cb9dfdf6e3b1ap102f5djsna11f63257923',
//         'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//     }
// };

// class CardCreator{
//     lon;
//     lat;
//     data;
//     container = document.querySelector('.forecast-cards');
//     op = {
//         method: 'GET',
// 	    headers: {
//             'X-RapidAPI-Key': '215a38f3e4msh38cb9dfdf6e3b1ap102f5djsna11f63257923',
//             'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//         }
//     };
//     createCards = function(sw){
//         fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly?lat=${this.lat}&lon=${this.lon}`, this.op) //!!!!
//         .then(response => response.json())
//         .then(data=>{
//             this.data = data.data;
//             console.log(this.data[0]);
//         })
//     };
// }
// //---------------------------------------------------------------------------
// var crd = new CardCreator();
// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };

// function success(pos) {
//     const cord = pos.coords;
  
    
//     lat = cord.latitude;
//     lon = cord.longitude;
    // lat = 40.4295;
    // lon = 20.8003;
//     crd.lon = lon;
//     crd.lat = lat;
    
  
    // const optionsLocation = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '215a38f3e4msh38cb9dfdf6e3b1ap102f5djsna11f63257923',
    //         'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
    //     }
    // };
    // fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=${lat+'%2C'+lon}&language=ua`, optionsLocation)
    // .then(response => response.json())
    // .then(response => cityName.textContent = response.results[0].address_components[3].short_name)
    // .catch(err => console.error(err));

//     const options_ = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '215a38f3e4msh38cb9dfdf6e3b1ap102f5djsna11f63257923',
//             'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//         }
//     };
    
//     fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=${lat}&lon=${lon}`, opptions_)//!!!!
//         .then(response => response.json())
//         .then(response =>{
          
//             document.querySelector('.card-temp').textContent = Math.round(response.data[0].temp);
//             let date = new Date();
//             let hour = date.getHours();
//             let precip = response.data[0].precip;
//             let imgPathes = ['./img/day.webp','./img/day-prec.webp','./img/night.webp', './img/night-prec.webp'];
            // if(hour < 19){
            //     if(precip == 0){
            //         document.querySelector('.card-banner-src').src = imgPathes[0];
            //     }
            //     else{
            //         document.querySelector('.card-banner-src').src = imgPathes[1];
            //     }
            // }
            // if(hour >= 19){
            //     document.querySelector('.card-wrap').style.backgroundColor = '#f7f8fa';
            //     document.querySelector('.card-temp').style.color = '#6565c1';
            //     document.querySelector('.card-wrap p').style.color = '#6565c1';
            //     if(precip == 0){
            //         document.querySelector('.card-banner-src').src = imgPathes[2];
            //     }
            //     else{
            //         document.querySelector('.card-banner-src').src = imgPathes[3];
            //     }
            // }

//         })
//         .catch(err => console.error(err));
//     crd.createCards(sw);

// }
  
// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
// }
// //-----------
// // navigator.geolocation.getCurrentPosition(success, error, options);
// //-----------
// window.onload = function(){
//     let date = new Date();
//     let day = date.getDay();
//     let month = date.getMonth();
//     let dayNumber = date.getDate();
//     let time = `${date.getHours()}:${date.getMinutes()}`;
//     var en_Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     var en_Day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     document.querySelector('.banner-date').textContent = `${en_Day[day]}, ${en_Month[month]} ${dayNumber}`;
//     document.querySelector('.banner-update').textContent += time;
//     document.querySelector('#today').classList.add('activated');
//     // crd.createCards(sw);

    
//     // document.querySelector('.card-banner-src').src = imgPathes[0];
    
// };



// document.querySelectorAll('.control-links a').forEach(a => a.onclick = function(){
//     if(a.textContent == 'Today'){
//         sw = 0;
//         // crd.createCards(sw);
//     }
        
//     else{
//         sw = 1;

//     }
 
// });
// // 9 12 15 17 19 21 00


// document.querySelector('#today').onclick = function(e){
   
//     e.target.classList.add('activated');
//     let weekly = document.querySelector('#weekly');
//     weekly.classList.contains('activated') ? weekly.classList.remove('activated') : console.log();
// };
// document.querySelector('#weekly').onclick = function(e){
//     e.target.classList.add('activated');
//     let today = document.querySelector('#today');
//     today.classList.contains('activated') ? today.classList.remove('activated') : console.log();
// };

// fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
// .then(response =>response.json())
// .then(data => console.log(data))