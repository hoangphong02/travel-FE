export function getFCMToken() {
  if ('Android' in window) {
    try {
      window.Android.getToken();
    } catch {
      //
    }
  } else if ('webkit' in window) {
    try {
      window.webkit.messageHandlers.getToken.postMessage('');
    } catch {
      //
    }
  }
}
