function updateClock(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;

    hours = hours ? hours : 12;
    minutes = minutes<10 ? '0' + minutes : minutes;
    seconds  = seconds<10 ? '0' + seconds : seconds;

    var formattedTime12 = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    console.log(formattedTime12);
}

setInterval(updateClock, 1000);


console.log("first to set the clock");
updateClock();