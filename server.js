const Server = require('socket.io');

const server = new Server(3000);

var finalMock;
var mockCounter = 100;
var speed = 1000;

setInterval(updateAll, speed)

server.on('connection', socket => {
    updateAll();
    sendOptions();
    console.log('user_connected',socket.id)
    socket.on('disconnect', (reason) => {
        console.log('user_disconnected',socket.id)
    });
})

function sendOptions () {
    server.emit('showOptions', {mockCounter:mockCounter,speed:speed});
}
function updateAll() {
    finalMock = createMockTimes(mockCounter);
    console.log(finalMock)
    console.log('check')
    server.emit('test', finalMock);
}
function createMockbody() {
    let mockbody = {
        name: 'name' + Math.random(),
        id: Math.random(),
        date: Date.now()
    }
    return mockbody;
}
function createMockTimes(count) {
    let mock = []
    for (var i = 0; i < count; i++) {
        mock.push(createMockbody());
    }
    return mock;
}