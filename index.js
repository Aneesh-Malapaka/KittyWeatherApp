let max = document.getElementById("maxTemp")
let min = document.getElementById("minTemp")
let word = document.getElementById("weaWord")
let pressure = document.getElementById("press")
let visibility = document.getElementById("visi")
let humidity = document.getElementById("humi")

let mainWeatherBox = document.querySelector(".mainWeather")
let nextWeatherBox = document.querySelectorAll(".nextInfo")
let nextDate = document.querySelectorAll(".date")
let nextWeaWord = document.querySelectorAll(".nextWeaWord")
let nextTemp = document.querySelectorAll(".nextTemp")
let nextWeaIcon = document.querySelectorAll(".nextWeaIcon")
let cityTitle = document.querySelector(".cityName")
function getInfo() {

    let city = document.getElementById("locName").value
    cityTitle.textContent = city
    setWeatherToday(city);
    setWeatherNext(city);
}

const API_KEY = '22d9acfe588102a2d120c9fa6338f176'

function setWeatherToday(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let weaWordData = data.weather[0].main

            max.innerHTML = data.main.temp_max + "<sup>&deg;</sup>C"
            min.innerHTML = data.main.temp_min + "<sup>&deg;</sup>C"
            weaWord.innerHTML = weaWordData

            pressure.innerHTML = data.main.pressure + " hPa"
            humidity.innerHTML = data.main.humidity + "%"
            visibility.innerHTML = parseFloat(data.visibility) / 1000 + " km"


            if (weaWordData == "Rain" || weaWordData == "Drizzle" || weaWordData == "Thunderstorm") {
                mainWeatherBox.style.backgroundImage = `url('./rainy.jpg')`
            }
            else if (weaWordData == "Clouds") {
                mainWeatherBox.style.backgroundImage = `url('./cloudy.jpg')`
            }
            else if (weaWordData == "Clear") {
                mainWeatherBox.style.backgroundImage = `url('./sunny.jpg')`
            }
            else if (weaWordData == "Snow") {
                mainWeatherBox.style.backgroundImage = `url('./snowy.png')`
            }
            else if (weaWordData == "Haze" || weaWordData == "Mist" || weaWordData == "Fog") {
                mainWeatherBox.style.backgroundImage = `url('./Haze.jpg')`
            }

        })
}

function setWeatherNext(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(predict => {
            console.log(predict)

            var cal = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

            var month = predict.list[7].dt_txt.substring(5, 7)
            month = parseInt(month)

            var date1 = predict.list[7].dt_txt.substring(8, 10)
            var date2 = predict.list[15].dt_txt.substring(8, 10)
            var date3 = predict.list[23].dt_txt.substring(8, 10)
            var date4 = predict.list[31].dt_txt.substring(8, 10)
            var date5 = predict.list[39].dt_txt.substring(8, 10)

            let DayOne_date = date1
            let DayTwo_date = date2
            let DayThree_date = date3
            let DayFour_date = date4
            let DayFive_date = date5

            let PredMonth = cal[month - 1]
            // console.log(DayOne_date + " " + PredMonth)
            // console.log(DayTwo_date + " " + PredMonth)
            // console.log(DayThree_date + " " + PredMonth)
            // console.log(DayFour_date + " " + PredMonth)
            // console.log(DayFive_date + " " + PredMonth)

            let DayOne_max = (predict.list[7].main.temp_max)
            let DayOne_min = (predict.list[7].main.temp_min)
            let DayOne_word = (predict.list[7].weather[0].main)
            let DayOne_icon = predict.list[7].weather[0].icon

            let DayTwo_max = (predict.list[15].main.temp_max)
            let DayTwo_min = (predict.list[15].main.temp_min)
            let DayTwo_word = (predict.list[15].weather[0].main)
            let DayTwo_icon = predict.list[15].weather[0].icon

            let DayThree_max = (predict.list[23].main.temp_max)
            let DayThree_min = (predict.list[23].main.temp_min)
            let DayThree_word = (predict.list[23].weather[0].main)
            let DayThree_icon = predict.list[23].weather[0].icon

            let DayFour_max = (predict.list[31].main.temp_max)
            let DayFour_min = (predict.list[31].main.temp_min)
            let DayFour_word = (predict.list[31].weather[0].main)
            let DayFour_icon = predict.list[31].weather[0].icon

            let DayFive_max = (predict.list[39].main.temp_max)
            let DayFive_min = (predict.list[39].main.temp_min)
            let DayFive_word = (predict.list[39].weather[0].main)
            let DayFive_icon = predict.list[39].weather[0].icon

            // console.log(DayOne_max + " / " + DayOne_min, DayOne_word)
            // console.log(DayTwo_max + " / " + DayTwo_min, DayTwo_word)
            // console.log(DayThree_max + " / " + DayThree_min, DayThree_word)
            // console.log(DayFour_max + " / " + DayFour_min, DayFour_word)
            // console.log(DayFive_max + " / " + DayFive_min, DayFive_word)

            let data_next = {
                0: {
                    day: date1,
                    day_max: DayOne_max,
                    day_min: DayOne_min,
                    day_word: DayOne_word,
                    day_icon: DayOne_icon,
                },
                1: {
                    day: date2,
                    day_max: DayTwo_max,
                    day_min: DayTwo_min,
                    day_word: DayTwo_word,
                    day_icon: DayTwo_icon
                },
                2: {
                    day: date3,
                    day_max: DayThree_max,
                    day_min: DayThree_min,
                    day_word: DayThree_word,
                    day_icon: DayThree_icon
                },
                3: {
                    day: date4,
                    day_max: DayFour_max,
                    day_min: DayFour_min,
                    day_word: DayFour_word,
                    day_icon: DayFour_icon
                },
                4: {
                    day: date5,
                    day_max: DayFive_max,
                    day_min: DayFive_min,
                    day_word: DayFive_word,
                    day_icon: DayFive_icon
                },
            }

            for (let i = 0; i < nextWeatherBox.length; i++) {
                // console.log(data_next[i].day_word)
                nextDate[i].innerHTML = PredMonth + " " + data_next[i].day
                nextWeaWord[i].innerHTML = data_next[i].day_word
                nextTemp[i].innerHTML = Math.round(data_next[i].day_max) + "&deg C&nbsp/" + Math.round(data_next[i].day_min) + "&deg; C"
                nextWeaIcon[i].src = `https://openweathermap.org/img/wn/${data_next[i].day_icon}.png`
            }
        })
}
