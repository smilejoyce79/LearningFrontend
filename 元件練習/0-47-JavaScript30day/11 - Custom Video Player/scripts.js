/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    // console.dir(video) 
    // if(video.paused){  //如果video元素屬性的paused為true (暫停中)
    //     video.play();  //執行'播放'
    // }else{             //若video元素屬性的paused為false (播放中)
    //     video.pause(); //執行暫停
    // }
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
    // console.log('updateButton Run')
    // console.dir(this)
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset)
    video.currentTime += parseFloat(this.dataset.skip); 
    //將一個字串轉換成浮點數,加入當前影片時間
    // console.log(video.currentTime)
} 

function handleRangeUpdate() {
    // console.log(this.name)
    // console.log(this.value)
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    // console.dir(e)
    // console.dir(progress)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; //用進度條寬度換算影片播放時間
    video.currentTime = scrubTime;
}

// 點擊播放器範圍or點擊播放鍵=> 觸發togglePlay播放/暫停影片
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
// 監聽播放器範圍事件,若為play/pause=> 觸發 updateButton切換播放鍵樣式
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
// 點擊快轉/倒轉鈕,可控制影片段落
skipButtons.forEach(button => button.addEventListener('click',skip))
// 使'卷軸'可調整播放速度/音量
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
// 使影片進度條跟著'正在播放的時間進度'跑
video.addEventListener('timeupdate', handleProgress);
// 使點擊進度條時,會更新影片播放時間點
let mousedown = false; //用mousedown,mouseup控制是否啟用mousemove監聽
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=>mousedown && scrub(e)); //若mousedown為true,才把監聽到的this代入執行scrub函數
progress.addEventListener('mousedown', ()=> mousedown = true);
progress.addEventListener('mouseup', ()=> mousedown = false);

/*釐清範例
    skipButton.forEach(button=>button.addEventListener('click',(e)=>{console.log(e)})); //事件發生的詳細資訊
    skipButton.forEach(button=>button.addEventListener('click',(e)=>{console.log(e.target)})); //<button>元素
    skipButton.forEach(button=>button.addEventListener('click',()=>{console.log(this)})); //window

    function skip(e){
        console.log(e)
    }
    skipButton.forEach(button=>button.addEventListener('click',(e)=>skip(e))); //e: 事件發生的詳細資訊

    function skip(){
        console.log(this)
    }
    skipButton.forEach(button=>button.addEventListener('click',skip)); //this: <button>元素
*/