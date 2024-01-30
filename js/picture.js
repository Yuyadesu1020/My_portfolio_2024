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


// 画像クリック時、ページ全体に画像拡大 :toggleはオンオフを切り替えることを言う
function toggleZoom(element) {
    var parentDiv = element.closest('.div');
    var zoomImage = parentDiv.querySelector('.zoomed-image');
    var zoomOverlay = parentDiv.querySelector('.zoom-overlay');
    var zoomedImage = zoomOverlay.querySelector('.zoomed-image');

    zoomedImage.src = zoomImage.src;
    zoomOverlay.style.display = 'flex';

    zoomOverlay.classList.remove('zoomed');
    setTimeout(function () {
        zoomedImage.src = zoomImage.src;
        zoomOverlay.style.display = 'flex';
        zoomOverlay.classList.add('zoomed');
    }, 0);

    zoomOverlay.style.opacity = '0';
    setTimeout(function () {
        zoomOverlay.style.opacity = '1';
    }, 0);

    zoomOverlay.addEventListener('click', function () {
        zoomOverlay.style.opacity = '0';
        setTimeout(function () {
            zoomOverlay.style.display = 'none';
            zoomOverlay.style.opacity = '1';
        }, 300);
    });
}
