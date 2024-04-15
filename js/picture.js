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


var isZoomed = false; // 初期状態では拡大表示されていない

function toggleZoom(element) {
    var parentDiv = element.closest('.div');
    var zoomImage = parentDiv.querySelector('.zoomed-image');
    var zoomOverlay = parentDiv.querySelector('.zoom-overlay');
    var zoomedImage = zoomOverlay.querySelector('.zoomed-image');

    if (!isZoomed) { // 拡大表示されていない場合
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

        isZoomed = true; // 拡大表示フラグをtrueに設定
    } else { // 拡大表示されている場合
        zoomOverlay.style.opacity = '0'; // opacityを0に設定し、トランジションを開始
        setTimeout(function () {
            zoomOverlay.classList.remove('zoomed'); // アニメーションが完了した後にzoomedクラスを削除
            setTimeout(function () {
                zoomOverlay.style.display = 'none'; // アニメーションが完了した後に要素を非表示にする
            }, 300); // display:none; を実行する前に、0.3秒待つ
        }, 300); // 0.3秒後にアニメーションが完了する想定

        isZoomed = false; // 拡大表示フラグをfalseに設定
    }
}
