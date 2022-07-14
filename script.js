const hourHand=document.querySelector('[data-hour-hand]');
const minuteHand=document.querySelector('[data-minute-hand]');
const secondHand=document.querySelector('[data-second-hand]');

function setRotation(element,rotationRation){
    element.style.setProperty('--rotation',rotationRation*360);
}

function setClock(){
    const currentDate=new Date();
    const secondsRatio=currentDate.getSeconds() / 60;
    const minutesRatio=(currentDate.getMinutes()+secondsRatio)/60;
    const hourRatio=(currentDate.getHours()+minutesRatio)/12;

    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hourRatio);
}

setClock();

setInterval(setClock,1000);