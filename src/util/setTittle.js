//const $body = document.body;

export default function(title) {
  document.title = title;
  /*if (/MicroMessenger/i.test(window.navigator.userAgent)) {
    // hack在微信等webview中无法修改document.title的情况
    const $iframe = document.createElement('iframe');
    $iframe.src = '/favicon.ico';
    $iframe.style = 'display: none;';
    function eventHandler() {
      setTimeout(function() {
        $iframe.removeEventListener('load', eventHandler);
        $body.removeChild($iframe);
      }, 0);
    }
    $body.appendChild($iframe);
    $iframe.addEventListener('load', eventHandler);
  }*/
}
