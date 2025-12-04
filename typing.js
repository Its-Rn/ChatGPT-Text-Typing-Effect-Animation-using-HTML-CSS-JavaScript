const paragraphs = document.querySelectorAll(".type");
let current = 0;
let speed = 22;

function typeWriter(element, text, index, callback) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(element, text, index + 1, callback), speed);
    } else {
        if (callback) setTimeout(callback, 300);
    }
}

function startTyping() {
    if (current >= paragraphs.length) return;

    let p = paragraphs[current];
    let fullText = p.textContent.trim();
    p.innerHTML = "";
    p.style.opacity = 1;

    typeWriter(p, fullText, 0, () => {
        current++;
        startTyping();
    });
}

window.onload = startTyping;
