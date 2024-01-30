// ハンバーガーメニュー
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');

    // JavaScriptで初期 max-height を設定
    if (navList.classList.contains('show')) {
        navList.style.maxHeight = navList.scrollHeight + "px";
    } else {
        navList.style.maxHeight = "0";
    }
});

// スクロールすると、pagetopボタンのフェードイン、フェードアウト
document.addEventListener("DOMContentLoaded", function(){
    // 変数名scrollButtonにclass名(.scroll)を一致させる↓
    var scrollButton = document.querySelector('.scroll');

    //スクロールイベントを投入
    window.addEventListener('scroll', function () {
        if (window.scrollY > 700) {
            //スクロール量が指定より以上場合、visibleクラスを追加
            scrollButton.classList.add('visible');
        } else {
            //スクロール量が指定より以下だった場合、visibleクラスを削除
            scrollButton.classList.remove('visible');
        }
    });
});


//HTML文書が読み込まれたときにこの機能が発動する
document.addEventListener("DOMContentLoaded", function () {
    //変数名にid名topを取得し、格納する
    var pagetopButton = document.getElementById("top");

    pagetopButton.addEventListener("click", function (event) {
        //元々の機能を停止する
        event.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


//ラジオボックスにチェックしたら、テキストを入力できる
document.addEventListener("DOMContentLoaded", function(){
    var otherRadiobox = document.getElementById('otherRadiobox');
    var more = document.getElementById("more");

    otherRadiobox.addEventListener("change",function(){
        more.disabled = !otherRadiobox.checked;

        if(otherRadiobox.checked){
            more.focus();
        }
    });
});


//チェックボックスにチェックしたら、テキストを入力できる
document.addEventListener("DOMContentLoaded", function(){
    //それぞれの変数名にチェックボックスと入力テキストを代入する
    var otherCheckbox = document.getElementById("otherCheckbox");
    var moreInput = document.getElementById("moreInput");

    otherCheckbox.addEventListener("change",function(){
        moreInput.disabled = !otherCheckbox.checked;

        if(otherCheckbox.checked){
            moreInput.focus();
        }
    });
});