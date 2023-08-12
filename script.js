const senderNameInput = document.getElementById("senderName");
const recipientInput = document.getElementById("recipient");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("sendButton");
const privateButton = document.getElementById("privateButton");
const messagesContainer = document.getElementById("messages");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");

let privateName = false;

privateButton.addEventListener("click", () => {
  privateName = !privateName;
  privateButton.textContent = privateName ? "Show Name" : "Private Name";
  senderNameInput.disabled = privateName;
});

sendButton.addEventListener("click", () => {
  const senderName = privateName ? null : senderNameInput.value.trim();
  const recipient = recipientInput.value.trim();
  const message = messageInput.value.trim();

  if (!message || !recipient) {
    popup.style.display = "flex";
    return;
  }

  const messageElement = document.createElement("div");
  messageElement.className = "message";

  if (privateName) {
    const displayedName = "Anonymous";
    messageElement.innerHTML = `<span class="private-name">${displayedName} to ${recipient}:</span> ${message}`;
  } else {
    const displayedName = senderName || "ANONIM";
    messageElement.innerHTML = `<strong>${displayedName} to ${recipient}:</strong> ${message}`;
  }

  messagesContainer.appendChild(messageElement);
  senderNameInput.value = "";
  recipientInput.value = "";
  messageInput.value = "";
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});
