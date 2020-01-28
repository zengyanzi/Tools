var connectId =0
onconnect = function (e) {
    connectId +=1;
    var port =e.ports[0];
    port.postMessage(connectId);
    port.onmessage=function (e) {
        port.postMessage('<br/>connection #'+e.data.id+':'+e.data.message);
    }
}