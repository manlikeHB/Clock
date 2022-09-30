const secondsHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    const secs = now.getSeconds()
    // console.log(secs)
    const secondsDegree = ((secs / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`

    const min = now.getMinutes();
    // console.log()
    const minDegree = ((min / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getHours();
    console.log(hour)
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}


setInterval(setDate, 1000)