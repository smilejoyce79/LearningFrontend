/* --- step6概念補充:儲存 ---*/
// localStorage會用key value pair的形式存在瀏覽器中,即使重新整理、關掉重開都還存在(但僅限於字串的存取,所以需用stringify和parse轉換)
// localStorage.setItem('key','value')
// 取出儲存的值
// const name = localStorage.getItem('key')
// console.log(name)
// JSON.stringify(name)  將型別從value轉成string
// JSON.parse(name)  將型別從string轉成value

/* --- step6:儲存 ---*/
let listState = [];

const STATE_KEY = "todo-list";

function loadState() {
  const listState = localStorage.getItem(STATE_KEY);   //getItem: 從localStorage讀取
  if (listState !== null) {
    return JSON.parse(listState);       //parse:如果取到的資料不等於null(是string)就用parse轉成value
  }
  return [];
}

function saveState(list) {
  localStorage.setItem(STATE_KEY, JSON.stringify(list));    //stringify:把Array轉成string, setItem:存入localStorage
}

/* --- step7:讀取 ---*/
function initList() {
  // load state 讀取之前存在localStorage的資料
  listState = loadState();
  // render list 把這些item寫入html(新建元素及套用class)
  const ul = document.getElementById("list");
  for (const item of listState) {
    const li = document.createElement("li");
    li.innerText = item.text;

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.onclick = deleteItem;  //點擊刪除
    li.appendChild(deleteButton);

    li.classList.add("item");
    if (item.checked) {
      li.classList.add("checked");
    }
    li.onclick = checkItem;   //點擊打勾

    ul.appendChild(li);
  }
}

/* --- step3 : 取得外層的ul 建立一個li插進去 ---*/
function addItem() {
  const ul = document.getElementById("list");
  const input = document.getElementById("input");
  const text = input.value;  //取得input裡面的值
  if (text === "") {        //若input裡面沒有值就按add-button,會跳出提示視窗
    alert("請輸入內容");
    return;
  }

  const newItem = document.createElement("li");    //新建元素
  newItem.classList.add("item");                   //定義該元素的class
  newItem.innerText = text;                       //將上述input的值帶入新建元素

/* --- step4 : 點擊item後會打勾 ---*/
  newItem.onclick = checkItem;

  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.onclick = deleteItem;

  newItem.appendChild(deleteButton); //隨著新建元素newItem,跟著新增子元素delete按鈕

  /* --- step8 : 先更新listState在同步更新DOM ---*/
  // listState是個Array {text: '洗衣服', checked: false}, {text: '寫文案', checked: true}
  listState.push({
    text,
    checked: false
  });
  saveState(listState);   //存入loacalStorage (使與step6宣告的listState同步更新)

  input.value = "";
  ul.appendChild(newItem); //前面已將html的list定義成ul,指定新建元素newItem要增加在list末端的位置(追加)
}

/* --- step5 : onclick點擊後觸發的function行為 ---*/
/* --- step9 :  ---*/
// 把li加上checked的class,就會呈現打勾的樣子了
function checkItem(e) {
  const item = e.target;
  const parent = item.parentNode;
  const idx = Array.from(parent.childNodes).indexOf(item);    
  //Array.from: 把每個iterable(可迭代的物件)轉成array
  //indexOf: 找item的index

  listState[idx].checked = !listState[idx].checked;  //更新該index的打勾狀態, ! 代表相反的布林值

  item.classList.toggle("checked");     //toggle開關
  saveState(listState);   //存入loacalStorage (使與step6宣告的listState同步更新)
}

function deleteItem(e) {
  const item = this.parentNode;
  const parent = item.parentNode;   //宣告item的parent是外面那層ul

  const idx = Array.from(parent.childNodes).indexOf(item);
  listState = listState.filter((_, i) => i !== idx); //過濾掉不要的資料

  parent.removeChild(item);     //把ul裡面的child(即item) remove移除
  saveState(listState);
  e.stopPropagation();    //停止後續的傳遞(解決:delete後又觸發不存在的check的bug問題)
}

/* --- step7 網頁讀取完,呼叫initList才會執行 --- */
initList();

/* --- step1 監聽事件:click ---*/
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);
/* --- step2 監聽事件:submit ---*/
const form = document.getElementById("input-wrapper");
form.addEventListener("submit", (e) => {
  e.preventDefault();    //prevent防止每次按下add-button就會刷新(因form的預設規則會隨著click觸發'提交'功能)
});


