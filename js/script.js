const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const timeNow = document.querySelector("#time__now");

const mon = document.querySelector("#monday");
const tue = document.querySelector("#tuesday");
const wed = document.querySelector("#wednesday");
const thus = document.querySelector("#thursday");
const fri = document.querySelector("#friday");
const sat = document.querySelector("#saturday");
const sun = document.querySelector("#sunday");

function getYear() {
    const info = new Date();
    let the_date = info.getDate();
    let the_month = info.getMonth();
    let the_year = info.getFullYear();

    day.textContent = the_date;
    month.textContent = the_month + 1;
    year.textContent = the_year;
}

function startTime() {
    const today = new Date();
    let H = today.getHours();
    let M = today.getMinutes();
    let S = today.getSeconds();

    M = checkTime(M);
    S = checkTime(S);

    timeNow.textContent = `${H} : ${M} : ${S}`;

    setTimeout(startTime, 1000);
}

// add zero in front of numbers < 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function weekCheck() {
    const week = new Date();
    switch (week.getDay()) {
        case 1:
            mon.classList.add("active");
            break;

        case 2:
            tue.classList.add("active");
            break;

        case 3:
            wed.classList.add("active");
            break;

        case 4:
            thus.classList.add("active");
            break;

        case 5:
            fri.classList.add("active");
            break;

        case 6:
            sat.classList.add("active");
            break;

        case 0:
            sun.classList.add("active");
            break;

        default:
            break;
    }
}

weekCheck();
startTime();
getYear();