let answers = document.querySelectorAll(".answer");
let messageBtn = document.querySelector(".message-btn");
let content = document.querySelector(".content");
let messageContent = document.querySelector(".message-content");
let questionField = document.querySelector(".question-field");
let attempts = 0;

answers.forEach(answer => {
    answer.addEventListener("click", () => {
        answer.className += " bg-danger border-danger animate__animated animate__headShake";
        attempts++;
        if (attempts === 4) {
            showMessage(messageBtn);
        }
    })
})

function showMessage(messageBtn) {
    messageBtn.classList.remove("d-none");
    messageBtn.addEventListener("click", () => {
        questionField.className += " animate__animated animate__fadeOut d-none"
        messageContent.classList.remove("d-none");
    })
}