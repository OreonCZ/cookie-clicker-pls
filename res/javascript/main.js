const cookie = document.getElementById("cookie")
const counter = document.getElementById("counter")
const clickUpgrade = document.getElementById("clickUpgrade")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")

let cookies = 0
let clickIncrease = 1;
let clickIncreasePrice= 100;

let autoclickerIncrease = 0;
let autoclickerPrice = 200;

cookie.onclick = () => {
cookies+= clickIncrease;
counter.innerHTML = cookies;

}
clickUpgrade.onclick = () => {

    if(cookies>= clickIncreasePrice){
        cookies -= clickIncreasePrice;
        clickIncreasePrice += 100;
    clickUpgrade.innerHTML = `Buy upgrade: ${clickIncreasePrice}`;
        counter.innerHTML = cookies;
        clickIncrease++
    }
}

autoclickerUpgrade.onclick = () => {
    if (cookies >= autoclickerPrice){
        cookies -= autoclickerPrice;
        counter.innerHTML = cookies;
        autoclickerPrice += 200;
        autoclickerUpgrade.innerHTML = `Buy autoclicker upgrade: ${autoclickerPrice}`;
        if (autoclickerIncrease == 0){
            setInterval(() => {
                cookies += autoclickerIncrease;
                counter.innerHTML = cookies;
            },200);
        }
        autoclickerIncrease++;
    }
}
