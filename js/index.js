
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

// スライドショー
document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg"];
    const imageElement = document.querySelector('.image'); // 変数名を修正

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const newImageSrc = images[currentImageIndex];

        // 新しい画像の読み込み
        const newImage = new Image();
        newImage.src = newImageSrc;

        // 画像が読み込まれたら表示
        newImage.onload = function() {
            fadeOut(); // フェードアウト
            setTimeout(() => {
                imageElement.src = newImageSrc;
                fadeIn(); // フェードイン
            }, 1000);
        };
    }
    function fadeIn() {
        imageElement.style.transition = "opacity 1.5s ease"; // 1.5秒かけてイージングを付ける
        imageElement.style.opacity = 1; // 画像を表示するときにゆっくりとフェードイン
    }

    function fadeOut() {
        imageElement.style.transition = "opacity 1.5s ease"; // 1.5秒かけてイージングを付ける
        imageElement.style.opacity = 0; // 新しい画像が読み込まれる前に透明にする
    }

    setInterval(changeImage, 3500); // 4000ミリ秒ごとに画像を切り替える（4秒ごと）
});

//フェードイン
$(window).scroll(function(){
    //ウィンドウの高さ
    const height = $(window).height();
    //現在のスクロール位置
    const scroll = $(window).scrollTop();
    $(".fade-in-element").each(function(){
        //offsetは選択したドキュメントの位置情報、top＝上からの
        //つまり、選択したドキュメント"ここでは$(this)=fade-in-element"の上からの位置情報
        const imgPosition = $(this).offset().top;

        if(scroll > imgPosition - 700){
            $(this).addClass("fadeIn");
        }
    });
});

// ビデオ要素を取得
var video = document.getElementById("backgroundVideo");

// ビデオの再生速度を設定
video.playbackRate = 0.5; // 0.5倍速

// ビデオの再生を開始
video.play();



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
