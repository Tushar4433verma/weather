// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_key}
const API_KEY=`3265874a2c77ae4a04bb96236a642d2f`;
const form=document.querySelector("form");
const search=document.querySelector("#search");
const weather=document.querySelector(".under-search");
const CityName=(city)=>{

    
    weather.innerHTML="<h2>Loading..</h2>";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response)=>{
        //  console.log(response);
        return response.json();
    })
    .then((data)=>{
        return showWeather(data);
    })
};

function showWeather(data)
{
    console.log(data);
    if(data.cod=="404")
    {
        weather.innerHTML="<h2>City Not Found!!</h2>";
        return;
    }
    weather.innerHTML=`
     
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
               <h1>${data.main.temp} ℃</h1>
               <h4>${data.weather[0].description}</h4>
           </div>
    `
}
form.addEventListener("submit",
(event)=>{
    CityName(search.value);
    event.preventDefault();
}
);
