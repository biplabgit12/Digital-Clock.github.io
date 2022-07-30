console.log("This is index.js");  

// getDay,getMonth, getDate, getFullYear include function
  getDMDY();

  function getDMDY(){
    let nowTime = new Date();

     let day = ["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"];
     let getDay = nowTime.getDay();
         getDay = day[getDay];

     let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
     let getMonth = nowTime.getMonth();
         getMonth = month[getMonth];

      let getDate = nowTime.getDate();

      let getFullYear = nowTime.getFullYear();
    
      
      let DMDY = getDay + ", " + getMonth + " " + getDate + ", " + getFullYear;
      let clockDate = document.getElementById("clockDate");
        clockDate.innerHTML = DMDY;
     
  }
  

let loadBody = document.querySelector("body");
loadBody.addEventListener("load", updateTime);
setInterval(updateTime, 1000)

function updateTime() {
  let nowTime = new Date();
  let currentHours = nowTime.getHours();
  let currentMinutes = nowTime.getMinutes();
  let currentSeconds = nowTime.getSeconds();
  // console.log(currentHours,currentMinutes,currentSeconds);

  currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
  currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes : "" + currentMinutes;
  currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds : "" + currentSeconds;

  let Time = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  let inputTime = document.getElementById("inputTime");
  inputTime.innerHTML = Time;


  let timeOfDay = (currentHours < 12) ? "AM" : "PM";
  let amPm = document.getElementById("amPm");
  amPm.innerHTML = timeOfDay;

}

