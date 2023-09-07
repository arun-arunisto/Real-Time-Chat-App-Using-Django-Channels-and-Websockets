//console.log("Arun Arunisto");

/* document.querySelector('#btn-submit').onclick = function (e) {
    const room_name = document.querySelector('#room-name');
    const user_username = document.querySelector('#user-name');
    console.log("room name: ",room_name);
    if (room_name.length === 0 || user_username.length === 0) {
        alert('Fields Required');
    } else {
        window.location.assign(window.location.href + "chat/" + room_name);
    }
}; */
const user_username = JSON.parse(document.getElementById('username').textContent);
const boxName = JSON.parse(document.getElementById('room-name').textContent);
console.log("username: ",user_username);
console.log("Box name: ",boxName)

document.querySelector('#submit').onclick = function (e) {
    const messageInputDom = document.querySelector('#input');
    const message = messageInputDom.value;

    if (message !== '') {
        chatSocket.send(JSON.stringify ({
            'message':message,
            'username':user_username,
        }));
        messageInputDom.value = '';
    }
};

window.addEventListener('beforeunload', function() {
    chatSocket.close();
});

//creating a websocket in Javascript
const chatSocket = new WebSocket(
    'ws://'+window.location.host+'/ws/chat/'+boxName+'/'
);

chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    document.querySelector('#chat-text').value += (data.username+' : '+data.message+'\n') //adding message to text box
}