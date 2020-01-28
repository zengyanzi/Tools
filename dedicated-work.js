onmessage=function (evt) {
    console.log('receive data' +evt.data+'from page');
    for (var i =0; i<20;i++) {
        postMessage(Math.random().toFixed(4));
    }
}