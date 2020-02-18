const timer = document.querySelector('#timer'),
    clockIn = document.querySelector('#clockIn'),
    clockOut = document.querySelector('#clockOut'),
    secondsText = document.querySelector('#secondsText'),
    minutesText = document.querySelector('#minutesText'),
    hoursText = document.querySelector('#hoursText'),
    dayName = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let hours = "",
    minutes = "",
    seconds = "";

clockIn.addEventListener('click', doClockIn);


function doClockIn(){
    // setInterval(digitalClock, 1000);
    digitalClock();
    console.log('click');
}

function digitalClock(){  
    hours = addZero(hours),
    minutes = addZero(minutes),
    seconds = addZero(seconds);

    startCounting = setTimeout(function(){
        seconds++;
        if(seconds >59) {
            seconds=0;
            minutes++;
            if(minutes>59) {
                minutes=0;
                hours++;
                if(hours <10) {
                    hoursText.innerHTML = '0'+hours+':';
                } else hoursText.innerHTML = hours+':';
            }

            if(minutes<10){                     
                minutesText.innerHTML = '0'+minutes+':';
            } else minutesText.innerHTML = minutes+':';
        }    
        if(seconds <10) {
            secondsText.innerHTML = '0'+seconds;
        } else {
            secondsText.innerHTML = seconds;
        }

        digitalClock();
    },1000);
}

function addZero(i) {
  if ( i < 10 ) {
    i = '0' + i;
  }
  return i;
}

