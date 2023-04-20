const sessionData = JSON.parse(localStorage.getItem("sessionData"))


if (!sessionData){
    window.location.href = "/"
}

const socket = io({
    "extraHeaders": {
        name: JSON.parse(localStorage.getItem("sessionData")).name
    }
});

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});