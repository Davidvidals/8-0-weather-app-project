let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = event.target.search.value
    fetch(`https://wttr.in/${location}?format=j1`)
    .then(response => response.json())
    .then(data => {
        const display = document.querySelector(".display")

        const region = data.nearest_area[0].region[0].value;
        const area = data.nearest_area[0].areaName[0].value;
        const country = data.nearest_area[0].country[0].value;
        const feelsLike = data.current_condition[0].FeelsLikeF;

        // display.textContent = `${location} Area: ${area} Region: ${region} Country: ${country} Currently: Feels like ${feelsLike}°F`
        display.innerHTML =`<h2>${location}</h2>
        <div id='display-area'><strong>Area</strong>: ${area}</div>
        <br>
        <div id='display-region'><strong>Region</strong>: ${region}</div>
        <br>
        <div id='display-country'><strong>Country</strong>: ${country}</div>
        <br>
        <div id='display-current'><strong>Currently feels like</strong>: ${feelsLike}F</div>
        `
     
        const weatherForecast = data.weather;
        

        for(let weather of weatherForecast){
            // console.log(weather.avgtempC)
            const averageTemp = weather.avgtempF;
            const maxtempF = weather.maxtempF;
            const mintemp = weather.mintempF;
            

            const today = document.querySelector('#todays-forcast-container')

            today.innerHTML =`
            <div id='today-wrapper'>
            <h3>Today</h3>
            <div id='todayAvg'><nobr>Average Temperature: ${averageTemp}°F</nobr></div>
            <br>
            <div id='todayMax'>Max Temperature: ${maxtempF}°F</div>
            <br>
            <div id='todayMin'><nobr>Min Temperature: ${mintemp}°F</nobr></div>
            </div> `
           
            const tomorrowsAvgTemp = data.weather[1].avgtempF;
            const tomorrowsmaxTemp = data.weather[1].maxtempF;
            const tomorrowsminTemp = data.weather[1].mintempF;

            console.log(tomorrowsAvgTemp);
            console.log(tomorrowsmaxTemp);
            console.log(tomorrowsminTemp);

                const tomorrow = document.querySelector('#tomorrow-forecast-container');
    
                tomorrow.innerHTML = `
                     <div id='tomorrow-wrapper'>
                     <h3>Tomorrow</h3>
                    <div id='tomorrowAvg'><nobr>Average Temperature: ${tomorrowsAvgTemp}°F</nobr></div>
                    <br><div id='tomorrowMax'>Max Temperature: ${tomorrowsmaxTemp}°F</div>
                    <br><div id='tomorrowMin'>Min Temperature: ${tomorrowsminTemp}°F</div>
                    </div>`    
                      
            const afterAvgTemp = data.weather[2].avgtempF;
            const aftermaxtemp = data.weather[2].maxtempF;
            const aftermintemp = data.weather[2].mintempF;

            console.log(afterAvgTemp);
            console.log(aftermaxtemp);
            console.log(aftermintemp);

                const after = document.querySelector('#day-after-forecast-container');

                after.innerHTML =`
                <div id='after-wrapper'>
                     <h3><nobr>Day after Tomorrow</nobr></h3>
                      <div id='afterAvg'><nobr>Average Temperature: ${afterAvgTemp}°F</nobr></div>
                      <br><div id='afterMax'><nobr>Max Temperature: ${aftermaxtemp}°F</nobr></div>
                      <br><div id='afterMin'><nobr>Min Temperature: ${aftermintemp}°F</nobr></div>
                       </div>`

        }
       
    })
    .catch(console.log)
    event.target.reset()

}) 




// var button = document.createElement("button");
// button.innerHTML = "Get Weather";
// type = "submit";


// // 2. Append somewhere
// var body = document.getElementsByTagName("body")[0];
// newButton.appendChild(button);

// document.forms['newButton']

// var x = document.createElement("INPUT");
// x.setAttribute("type", "text");

// let btn = document.createElement("button");
// btn.innerHTML = "Get Weather";
// btn.setAttribute('type',"submit");
// btn.name = "formBtn";

// newButton.appendChild(x)
// newButton.appendChild(btn);
