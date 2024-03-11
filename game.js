function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;

    if (message.trim() !== '') {
        appendMessage('Você: ' + message);
        // Adicione lógica para processar a mensagem
        // Por exemplo, enviar para outros jogadores, atualizar o estado do jogo, etc.
    }

    messageInput.value = '';
}

function appendMessage(message) {
    var chatBox = document.getElementById('chat-box');
    var newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}
