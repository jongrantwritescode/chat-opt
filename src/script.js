
const broadcast = (msg) => {
    console.log(msg);
    document.getElementById("chat-history");
}

const onSubmit = (e) => {
    broadcast(e.value)
}

const main = () => {
  const form = document.getElementById("chatInputForm");
  form.onSubmit = onSubmit;

  broadcast("Chat is ready....");
}

window.onload = () => {
    main();
}