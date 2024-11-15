const video = document.querySelector('.player');
const canvas = document.querySelector('.photo'); //從video擷取顯示於此,以便應用濾鏡及快照
const ctx = canvas.getContext('2d'); //引入繪圖工具
const strip = document.querySelector('.strip'); //底部照片預覽條
const snap = document.querySelector('.snap'); //快照音效

// 擷取攝像頭畫面作為video來源
function getVideo() {
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }) //將回傳promise
      .then(localMediaStream => {
        console.log(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch(err=>{  //若無權限啟用鏡頭,會出現error訊息
        console.error( `Your camera is not allowed.`,err);
      });
}

// 將video畫面放入canva畫布
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width,height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(()=>{
        ctx.drawImage(video, 0, 0, width, height);

        //抓取影像存入變數
        let pixels = ctx.getImageData(0, 0, width, height);  
        // console.log(pixels);
        // debugger;

        // 改變影像
        // pixels = redEffect(pixels); //紅色濾鏡 

        pixels = rgbSplit(pixels); //多種顏色位移影像
        ctx.globalAlpha = 0.05;   //設置全局透明度(有緩速及模糊效果)

        // pixels = greenScreen(pixels); //可由滑桿調整特效

        //改過的影像回傳
        ctx.putImageData(pixels, 0, 0);
    },16);
}

function takePhoto(){
    //撥放快照音效
    snap.currentTime = 0;
    snap.play(); 

    // 從畫布快照出一個照片檔,提供download功能,並命名為handsome
    const data = canvas.toDataURL('image/jpeg'); //在畫布快照出一個jpeg檔的image
    const link = document.createElement('a'); //創建一個<a>元素,定義為link變數
    link.href = data; //將image設為<a>資料來源
    link.setAttribute('download', 'handsome'); //並具有download屬性,且指定命名為handsome
    // link.innerHTML = `Download Image`; //將下載按鈕渲染到HTML上顯示,以供點擊
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`; //改成直接在strip預覽條顯示image縮圖
    strip.insertBefore(link, strip.firstChild); //將此DOM元素創建在.strip下的第一個子元素
}

// 特效:紅色濾鏡
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue  
    }
    return pixels;
}

// 特效:位移不同色彩影像
function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}  

// 特效:可由滑桿調整特效
function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  }

getVideo();

video.addEventListener('canplay',paintToCanvas)

