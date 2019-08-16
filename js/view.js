$(function(){

  $('.sub1').on('click', function(){
    $('.main-veiw').children('img').attr('src', 'image/tote-twoway1.jpg'); //書き換えたsrcをimgタグに設定する
  });

  $('.sub2').on('click', function(){
    $('.main-veiw').children('img').attr('src', 'image/tote-twoway3.jpg'); //書き換えたsrcをimgタグに設定する
  });

  $('.sub3').on('click', function(){
    $('.main-veiw').children('img').attr('src', 'image/tote-twoway4.jpg'); //書き換えたsrcをimgタグに設定する
  });

  $('.sub4').on('click', function(){
    $('.main-veiw').children('img').attr('src', 'image/tote-twoway5.jpg'); //書き換えたsrcをimgタグに設定する
  });


  //要素.children('セレクタ')　子要素を取得
  //.attr('プロパティ', '変更するセレクタ処理')

});