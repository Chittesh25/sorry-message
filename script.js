document.addEventListener("DOMContentLoaded", function () {
    let message = "Dear Aaru, \nI promise to stop being a ‘bug’ in your system, Maaf kardo aap muje pilizzz🙏🏽";
    let i = 0;
    let speed = 50;

    function typeEffect() {
        if (i < message.length) {
            document.getElementById("message").innerHTML += message.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();

    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});

function showLove() {
    alert("Thank you Madame! Sending Virtual Forehead Kiss!🤗💕");
}
