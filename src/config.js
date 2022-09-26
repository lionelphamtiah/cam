jQuery.noConflict();
(function($, PLUGIN_ID) {
  'use strict';
  //config.htmlの設定値入力欄オブジェクトを取得
  let setText = document.getElementById('setText');
  let setText2 = document.getElementById('setText2');
  //プラグインIDを設定
  let config = kintone.plugin.app.getConfig(PLUGIN_ID);
  console.log(config);
  //設定値（config.text）に値が入ってたら、
  //config.htmlの設定値入力欄にその値を入れる
  if (config.text) {
    setText.value = config.text;
    setText2.value = config.text2;
  }
  //config.htmlの保存するボタンおしたら
  //プラグインに設定値入力欄の値を保存
  //メッセージを表示後、アプリ設定画面へ遷移
  document.getElementById("submit").onclick = function() {
    kintone.plugin.app.setConfig({ text: setText.value, text2:setText2.value}, function() {
      alert('Success');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  };
  //config.htmlのキャンセルボタンおしたら
  //プラグイン設定画面に遷移
  document.getElementById("cancel").onclick = function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  };
})(jQuery, kintone.$PLUGIN_ID);