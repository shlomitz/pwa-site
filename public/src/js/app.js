var deferredPrompt;

// .register('/sw.js', scope: '/help/')
// register can get 2 parameters when the second is for scope
// the default is all folders
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .then(function () {
            console.log("Service worker registered!");
    });
}

window.addEventListener("beforeinstallprompt", function (event) {
    console.log('beforeinstallprompt event fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});