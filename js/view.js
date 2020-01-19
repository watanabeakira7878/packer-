$(function(){

  $('.sub').on('click', function(){
    const vw = $(this).children('img').attr('src');
    $('.main-veiw').children('img').attr('src', vw); //書き換えたsrcをimgタグに設定する
  });
  });


  //要素.children('セレクタ')　子要素を取得
  //.attr('プロパティ', '変更するセレクタ処理')