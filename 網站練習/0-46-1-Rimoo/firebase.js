
/*---------------------------
    設定Firebase初始化
 ---------------------------*/

//範例程式碼來自: https://firebase.google.com/docs/web/modular-upgrade?hl=zh-tw#window-compat
//其中KEY來自:firebase建立專案後,新增應用程式而取得的SDK 'firebaseConfig={}'
const firebaseApp = firebase.initializeApp({ 
    // 貼入原本const firebaseConfig = 金鑰的內容
    apiKey: "",
    authDomain: "rimoo-test2.firebaseapp.com",
    projectId: "rimoo-test2",
    storageBucket: "rimoo-test2.appspot.com",
    messagingSenderId: "298753231080",
    appId: "1:298753231080:web:78b90ab09def5fb07d215d"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

/*---------------------------
    設定Firebase UI
 ---------------------------*/
 
//範例程式碼來自: https://firebase.google.com/docs/auth/web/firebaseui?hl=zh-tw#before_you_begin
//加入option設定: https://github.com/firebase/firebaseui-web#configuration
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup', //彈出一個頁面
    signInSuccessUrl: '/index.html', //成功登入後的路徑
    signInOptions: [ //不同登入方式的button
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    credentialHelper:firebaseui.auth.CredentialHelper.NONE, //處理google登入&email登入方法的衝突
    tosUrl: '/terms.html', //服務條款的路徑
    privacyPolicyUrl: '/privacy.html' //隱私條款的路徑
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

/*------------------------------------------------
    控制「登入/註冊、登出」狀態下分別要執行哪些動作
    (需先將瀏覽器網址的'網域位置127.0.0.1:'改為localhost:)
 ------------------------------------------------*/

$(document).ready(function () {

    function memberState(){
        let state = localStorage.getItem('memberState');
        console.log('memberState:',state)
        // 若memberState為true(即已登入狀態)只顯示登出按鈕;反之false(登出狀態)只顯示登入按鈕
        // JSON.parse : 將 字串 轉成 物件或值
        if( JSON.parse(state) ){
            $('.unauth').hide();
            $('.auth').show();
        }else{
            $('.auth').hide();
            $('.unauth').show();
        }
    }
    memberState(); //註15 需執行2次

    // auth若已登入(onAuthStateChanged),回存user的值印出來
    firebase.auth().onAuthStateChanged(function(user) {
        console.log('user',user);
        let state = localStorage.getItem('memberState');
        // 在會員'剛登入'時 彈出'登入成功'視窗
        if(user){   // 若user有值(已登入狀態)
            //若state為false,前面加「!」強制改為相反(true)
            //因剛登入完state仍為false,直到.login-success彈出視窗後,按下叉叉關閉才變true,變true之後就不需再跳出'登入成功'訊息
            if(!JSON.parse(state)){  
                $('.login').hide();
                $('.logout-success').hide();
                $('#exampleModal').modal('show'); //讀取到頁面後,自動彈出 id="exampleModal" 視窗

                $('#loader').show();

                setTimeout(function(){  //先出現loading,過1s再出現'登入成功'
                    $('#loader').hide();
                    $('.login-success').show(); //只顯示'登入成功'                    
                },1000)
            }
        }
    });

    // 按下'登出'後執行下列
    $('#logout').on('click',function(){
    // auth若已登出(signout)
        firebase.auth().signOut().then(function(){
            $('.login').hide();
            $('.login-success').hide();
            $('.logout-success').show(); //只顯示'登出成功'

            $('#exampleModal').modal('show');

        }).catch(function(err){ //若出現錯誤,console印出錯誤訊息
            console.log('Logout fail',err)
        });
    });

    $('#login').on('click',function(){
        $('.login').show();
        $('.login-success').hide();
        $('.logout-success').hide();

        $('#exampleModal').modal('show'); 
    });

    $('.btn-close').on('click',function(){
        /*測試:
        $('.login-success').css('display');
        console.log('.login-success',$('.login-success').css('display'));  
        console.log('.logout-success',$('.logout-success').css('display')); 
        因為登入成功時 $('.login-success').show(), 此時的display:block (否則為:none) 
        因為登出成功時 $('.logout-success').show();
        */

        //登入成功後,將memberState:true存入localStorage (在開發人員介面Application顯示{key,value})
        //setTimeout(   ,1000) : 延遲1s
        if($('.login-success').css('display') === 'block'){ 
            localStorage.setItem('memberState','true')
            setTimeout(function(){   // 問題:為什麼這裡也需要加這串?
                $('.login').show();
                $('.login-success').hide();
                $('.logout-success').hide();
            },1000);
        };
        
        //登出成功後,將memberState:false存入localStorage,並改變.modal-dialog彈出視窗中「.login .login-success .logout-success」的display狀態
        if($('.logout-success').css('display') === 'block'){
            localStorage.setItem('memberState','false')
            setTimeout(function(){
                $('.login').show();
                $('.login-success').hide();
                $('.logout-success').hide();
            },1000);
        };
        memberState(); //註15
        window.location.reload();  //全頁面刷新(更新成"已登入"狀態的畫面)
    })
});
