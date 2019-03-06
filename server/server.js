const WebSocket = require('ws');
const wsPort = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: wsPort });
console.log("websocket server running on port : " + wsPort)
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        setTimeout(() => {
            ws.send(message);
        }, 200);
    });
});


