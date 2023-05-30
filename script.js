const hour = document.getElementById('clock-hour')
const minutes = document.getElementById('clock-minutes')


//update  teh circle
const clock = () => {
    let date = new Date()

    let hh = date.getHours()/12 * 360
    let mm = date.getMinutes()/60 * 360

    hour.style.transform = `rotateZ(${hh + mm /12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`

    
}

setInterval(clock,1000)

//update the text

const dateDayWeek = document.getElementById('date-day-week')
const dateMonth = document.getElementById('date-month')
const dateDay = document.getElementById('date-day')
const dateYear = document.getElementById('date-year')
const textHour = document.getElementById('text-hour')
const textMinutes = document.getElementById('text-minutes')
const textAmPm = document.getElementById('text-ampm')

const clockText = () => {
    let date = new Date()

    let dayWeek = date.getDay()
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
    let hh = date.getHours()
    let mm = date.getMinutes()
    
    let dayWeekList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let monthList = ['Jan','Feb','May','Apr','Mar','Jun','Jul','Aug','Sep','Oct','Dec','Nov','Dec']
    
    dateDayWeek.innerHTML = `${dayWeekList[dayWeek]}`
    dateMonth.innerHTML = `${monthList[month]}`
    dateDay.innerHTML = `${day},`
    dateYear.innerHTML = `${year}`

    let ampm = 'AM'
    
    if(hh > 12){
        hh -= 12
        if (hh == 0) {
            hh == 12
        }

        ampm = 'PM'

    }

    textHour.innerHTML = `${hh}:`
    textMinutes.innerHTML = `${mm}`
    textAmPm.innerHTML = ampm

}

setInterval(clockText,1000)