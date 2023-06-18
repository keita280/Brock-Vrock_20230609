
//   //@@@@@@@@@@@@@@@@@@@@@@@@@
// // ページ内リンクのスムーススクロール
// //@@@@@@@@@@@@@@@@@@@@@@@@@
$(document).ready(function() {
  // ページ内リンクのスムーススクロール
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      var offset = target.offset().top - 150;
      
      // グローバルメニューを閉じる（クラス名や要素に適宜変更してください）
      $('.header__toggle').removeClass('is-active');
      $('.header__nav').removeClass('is-active');
      $('.sp-header__nav').removeClass('is-active');
      
      $('html, body').animate({
        scrollTop: offset
      }, 800);
    }
  });


  // //@@@@@@@@@@@@@@@@@@@@@@@@@
// // ハンバーガーメニューの開閉
// //@@@@@@@@@@@@@@@@@@@@@@@@@

  // ハンバーガーメニューの開閉
  $('.header__toggle').on('click', function(event) {
    console.log('Header toggle clicked!'); // 追加
    $(this).toggleClass('is-active');
    $('.header__nav').toggleClass('is-active');
    $('.sp-header__nav').toggleClass('is-active');
    $('.overlay').toggleClass('is-active');
    if ($('.header__toggle').hasClass('is-active')) {
      $('.overlay').show(); // ハンバーガーメニューが開いた場合にはoverlayを表示する
    } else {
      $('.overlay').hide(); // ハンバーガーメニューが閉じた場合にはoverlayを非表示にする
    }
  });
});


// ハンバーガーメニューが開いた時に、ヘッダーのボックスシャドウを消すためのクラス（is-open）を付与

document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.querySelector(".header__toggle");
  var header = document.querySelector("header");
  
  if (toggle && header) {
    toggle.addEventListener("click", function() {
      header.classList.toggle("is-open");
    });
  }
});


$(document).ready(function() {
  var header = document.querySelector("header");  // ヘッダーを取得
$(document).ready(function() {
  // Overlayがクリックされた時にハンバーガーメニューとオーバーレイを閉じる
  $('.overlay').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.header__toggle').removeClass('is-active');
    $('.header__nav').removeClass('is-active');
    $('.sp-header__nav').removeClass('is-active');
    $('.overlay').removeClass('is-active');
    if (header) {
      header.classList.remove("is-open");  // ヘッダーのボックスシャドウを消すクラスを削除
    }
  });

  // ナビゲーションリンクがクリックされた時にハンバーガーメニューとオーバーレイを閉じる
  $('.sp-header__menu-item a').on('click', function(event) {
    $('.header__toggle').removeClass('is-active');
    $('.header__nav').removeClass('is-active');
    $('.sp-header__nav').removeClass('is-active');
    $('.overlay').removeClass('is-active');
    if (header) {
      header.classList.remove("is-open");  // ヘッダーのボックスシャドウを消すクラスを削除
    }
    $('.overlay').hide(); 

  });
});

});






//@@@@@@@@@@@@@@@@@@@@@@@@@
//TO TOP
//@@@@@@@@@@@@@@@@@@@@@@@@@
let scrollTimeout; // スクロールイベントハンドラ

$(window).scroll(function(){
  clearTimeout(scrollTimeout); // タイムアウトイベントをクリア
  
  if($(this).scrollTop() > 1000) {
    $('#scrollTop').fadeIn(); // ボタンを表示
  } else {
    $('#scrollTop').fadeOut(); // スクロール位置が1000px未満ならボタンを非表示
  }

  scrollTimeout = setTimeout(function(){
    // スクロールが止まったときにボタンを非表示にする
    $('#scrollTop').fadeOut();
  }, 2000); // アイドル時間（単位はミリ秒）
});

// ボタンクリックでスムーズにトップにスクロール
$('#scrollTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});





//@@@@@@@@@@@@@@@@@@@@@@@@@
  // YouTubeの埋め込みプレーヤーの幅を画面幅最大に調整する関数
//@@@@@@@@@@@@@@@@@@@@@@@@@
$(function(){
  function adjustYouTubePlayerSize() {
    var container = document.querySelector('.video-container');
    var player = document.querySelector('#youtube-player iframe');

    var containerWidth = container.offsetWidth;
    var playerWidth = containerWidth;

    // 画面幅が最大幅（例: 980px）より大きい場合のみ最大幅を設定
    var maxWidth = 980;
    if (containerWidth > maxWidth) {
      playerWidth = maxWidth;
    }

    var playerHeight = (playerWidth / 16) * 9; // YouTubeプレーヤーのアスペクト比は16:9

    player.style.width = playerWidth + 'px';
    player.style.height = playerHeight + 'px';
  }

  // ウィンドウのリサイズ時にYouTubeプレーヤーのサイズを調整する
  window.addEventListener('resize', adjustYouTubePlayerSize);

  // ページ読み込み時にYouTubeプレーヤーのサイズを初期設定する
  window.addEventListener('DOMContentLoaded', adjustYouTubePlayerSize);


});




//@@@@@@@@@@@@@@@@@@@@@@@@@
// ログイン画面のボタンの表示・非表示
//@@@@@@@@@@@@@@@@@@@@@@@@@


var togglePasswordElement = document.getElementById('toggle-password');
var passwordInput = document.getElementById('password');
var toggleIcon = document.getElementById('toggle-icon');

// togglePasswordElement, passwordInput, toggleIconがすべて存在する場合だけ処理を行う
if (togglePasswordElement && passwordInput && toggleIcon) {
  togglePasswordElement.addEventListener('click', function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      // FontAwesome 5用の切り替え
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    } else {
      passwordInput.type = "password";
      // FontAwesome 5用の切り替え
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    }
  });
}

