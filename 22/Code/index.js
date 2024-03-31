const MyWebsocket = require('./ws')
const ws = new MyWebsocket({
    port: 8080
})

ws.on('data', (data) => {
    console.log('receive data', data);
    // setInterval(() => {
        ws.send(data + ' ' + Date.now());
    // }, 30000)
})

ws.on('close', (code, reason) => {
    console.log('close', code, reason);
})

