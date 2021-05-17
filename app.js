

function Countdown() {
    const date = new Date();
    const target = new Date('26 June 2021');

    const dif = (target - date) / 1000;
    const days = Math.floor(dif / 3600 / 24);
    const hours = Math.floor(dif / 3600) % 24;
    const minutes = Math.floor(dif / 60) % 60;
    const seconds = Math.floor(dif) % 60;




    const days_e = document.getElementById('days');
    const hours_e = document.getElementById('hours');
    const min_e = document.getElementById('min');
    const sec_e = document.getElementById('sec');

    days_e.innerHTML = format(days);
    hours_e.innerHTML = format(hours);
    min_e.innerHTML = format(minutes);
    sec_e.innerHTML = format(seconds);

}

function format(time) {
    return time < 10 ? `0${time}` : time;
}
//init call
Countdown()


setInterval(Countdown, 1000);