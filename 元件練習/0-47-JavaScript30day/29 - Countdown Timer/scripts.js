let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


// 製作倒數計時 : seconds設定倒數多久
function timer(seconds){

    clearInterval(countdown); //若已有正在運行的倒數計時,先清除 (避免同時運行互相干擾)
    
    const now = Date.now(); //毫秒單位的時間
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) /1000) ; //得到剩下多少時間(單位為毫秒)
        // if(secondsLeft < 0) return ; //way1若已經倒數到0就停止,不再往下console.log(但實際上仍在背景運行)
        if(secondsLeft<0){
            clearInterval(countdown); //way2加上這行清除setInterval,不再運行
            return;
        }
        displayTimeLeft(secondsLeft);
    },1000)
};

// 將計時數值顯示在html上(格式為00:00)
function displayTimeLeft(seconds){
    const minute = Math.floor(seconds / 60);
    const second =  Math.floor(seconds % 60);

    // 改成00:00的格式呈現: 若<10(個位數),前面補'0',否則''空值
    const display = `
        ${minute < 10 ? '0':''}${minute}
        :
        ${second < 10 ? '0':''}${second}
    `; 
    timerDisplay.textContent = display;

    //使倒數也顯示於瀏覽器頁面名稱 <title>
    document.title = display;    
};

// 顯示結束時間
function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0':''}${minutes}`;
}

// 配置快速設定按鈕
function startTimer() {
    const seconds = parseInt(this.dataset.time); //轉成指定位數的'整數'
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));

// 在input手動輸入要倒數多久
    // 若屬性有name=""的DOM元素,可快速選擇 (不用document.querySelector() )
document.customForm.addEventListener('submit',function(e){
    e.preventDefault(); //避免按下submit後會刷新頁面、跳轉路徑(預設)
    const mins = this.minutes.value;
    timer(mins*60);
    this.reset(); //submit後form值清空
})