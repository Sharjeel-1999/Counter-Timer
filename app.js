const CountDate=new Date("Jan 10 2022 14:30:55").getTime();
var x = setInterval(function(){
    let now=new Date().getTime();
    let Distance=CountDate- now;
    var d=Math.floor(Distance/(1000*60*60*24));
    var hrs= Math.floor(Distance%(1000*60*60*24)/(1000*60*60));
    var min= Math.floor(Distance%(1000*60*60*24)/(1000*60));
    var sec= Math.floor(Distance%(1000*60*60*24)/1000);
    document.getElementById("timer").innerHTML= d +"d" + hrs + "h" + min + "min" + sec + "sec"
    if(Distance<0){
        clearInterval(x);
        document.getElementById("timer").innerHTML="Time's Up";
    }
})