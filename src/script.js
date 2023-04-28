let chatUser = 0;

const makeMsgNode = (msg) => {
    const msgNode = document.createElement("div");
    msgNode.className = `chat-message-${chatUser}`;
    msgNode.innerText = msg;

    chatUser = +!chatUser;
    return msgNode;
}

const broadcast = (msg) => {
    const chatHistory = document.getElementById("chat-history");
    chatHistory.appendChild(makeMsgNode(msg));
}

const onSubmit = (e) => {
    e.preventDefault();
    broadcast(e.value)
}

const main = () => {
  const form = document.getElementById("chatInputForm");
  form.addEventListener("submit", onSubmit);

  broadcast("Chat is ready....");
}

window.onload = () => {
    main();
}