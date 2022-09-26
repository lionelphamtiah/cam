(function(PLUGIN_ID) {
  'use strict';
    var my_script2 = document.createElement('script');
    my_script2.setAttribute('src', 'https://unpkg.com/html5-qrcode@2.2.1/html5-qrcode.min.js');
    // my_script2.async = true;
    // my_script2.defer = true;
    my_script2.onload = function() {
      this.onload = function() {};
    };
    my_script2.onreadystatechange = function() {
      if (this.readyState === 'complete') this.onload();
    };
    document.body.appendChild(my_script2);
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code scanned = ${decodedText}`, decodedResult);
    }
    // var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
    // html5QrcodeScanner.render(onScanSuccess);
    // document.addEventListener("DOMContentLoaded", () => {
    //   var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
    //   html5QrcodeScanner.render(onScanSuccess);
    // });
  //アプリの登録画面を表示
  kintone.events.on(['app.record.index.show'], function(event) {
    // ===
    var myDiv = document.createElement('div');
    myDiv.id = 'qr-reader';
    kintone.app.record.getSpaceElement('potara-root').appendChild(myDiv);
    // ==
    // function onScanSuccess(decodedText, decodedResult) {
    //   console.log(`Code scanned = ${decodedText}`, decodedResult);
    // }
    var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess);
    // document.addEventListener("DOMContentLoaded", () => {
    //   var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
    //   html5QrcodeScanner.render(onScanSuccess);
    // });
    return event;
  });
})(kintone.$PLUGIN_ID);
