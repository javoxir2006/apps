// interacting nav icons

const countDisplay = document.querySelector(".countDisplay");
const progressDisplay = document.querySelector(".progressDisplay");
const settingsDisplay = document.querySelector(".settingsDisplay");

function countDis(){
    countDisplay.style.display = 'flex';
    progressDisplay.style.display = 'none';
    settingsDisplay.style.display = 'none';
}

function progressDis(){
    countDisplay.style.display = 'none';
    progressDisplay.style.display = 'flex';
    settingsDisplay.style.display = 'none';
}

function settingsDis(){
    countDisplay.style.display = 'none';
    progressDisplay.style.display = 'none';
    settingsDisplay.style.display = 'flex';
}

//interacting the counter

const counter = document.querySelector(".counter");
const progressDowner = document.querySelector(".pro-down");
const initialCount = document.querySelector(".counter").textContent;

function proCount(){
    

    let countCur = parseInt(counter.textContent, 10);
    if(countCur > 0){
        countCur -= 1;
        counter.textContent = countCur;
        localStorage.setItem("counterValue", countCur);
    }
    let progressHeight = (countCur * 100) / initialCount

    progressDowner.style.height = `${progressHeight}%`;
    localStorage.setItem("progressHeight", progressHeight);
}

// local save

window.addEventListener("load", function (){
    let savedCounter = this.localStorage.getItem("counterValue");
    let savedProgress = this.localStorage.getItem("progressHeight");

    if(savedCounter !== null){
        progressDowner.style.height = `${savedProgress}%`;
    }

    if(savedCounter !== null){
        counter.textContent = savedCounter;
    }
})