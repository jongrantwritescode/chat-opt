const BROADCASTER = "broadcaster";
const RECEIVER = "receiver";
const SYSTEM = "system";

const main = () => {
    initForm();
    addToHistory("Chat is ready....", SYSTEM);
}

const initForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        broadcast(e.value)
    }

    const form = document.getElementById("chatInputForm");
    form.addEventListener("submit", onSubmit);
}

const broadcast = (msg) => {
    addToHistory(msg, BROADCASTER);
    receive("OK!");
}

const receive = (msg) => {
    addToHistory(msg, RECEIVER)
}

const addToHistory = (msg, sourceId) => {
    const msgElement = makeMsgElement(msg, sourceId);
    const chatHistory = document.getElementById("chat-history");
    chatHistory.appendChild(msgElement);
}

const makeMsgElement = (msg, sourceId) => {
    const msgElement = document.createElement("div");
    msgElement.className = `chat-message-${sourceId}`;
    msgElement.innerText = msg;

    return msgElement;
}

window.onload = () => {
    main();
}