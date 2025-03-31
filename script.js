function showLove() {
    createPoppers();
    setTimeout(() => {
        alert("Thank you Madame! Sending Virtual Forehead Kiss!🤗💕");
    }, 500);
}

function createPoppers() {
    for (let i = 0; i < 30; i++) {
        let popper = document.createElement("div");
        popper.classList.add("popper");
        popper.style.left = Math.random() * 100 + "vw";
        popper.style.top = "50%";
        popper.style.backgroundColor = getRandomColor();
        document.getElementById("poppers").appendChild(popper);

        setTimeout(() => {
            popper.remove();
        }, 1500);
    }
}

function getRandomColor() {
    const colors = ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#AF52DE"];
    return colors[Math.floor(Math.random() * colors.length)];
}
