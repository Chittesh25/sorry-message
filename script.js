function showLove() {
    createPoppers();
    setTimeout(() => {
        alert("Thank you Madame! Sending Virtual Forehead Kiss!🤗💕");
    }, 1000);
}

function createPoppers() {
    const popperContainer = document.getElementById("poppers");
    popperContainer.innerHTML = ""; // Clear previous poppers

    for (let i = 0; i < 40; i++) {
        let popper = document.createElement("div");
        popper.classList.add("popper");
        
        // Random positioning
        popper.style.left = Math.random() * 100 + "vw";
        popper.style.top = Math.random() * 40 + "vh";
        
        // Random color
        popper.style.backgroundColor = getRandomColor();
        
        // Random size
        let size = Math.random() * 15 + 5;
        popper.style.width = size + "px";
        popper.style.height = size + "px";
        
        // Append to body
        popperContainer.appendChild(popper);

        // Remove after animation ends
        setTimeout(() => {
            popper.remove();
        }, 2000);
    }
}

function getRandomColor() {
    const colors = ["#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#007AFF", "#AF52DE", "#FF2D55"];
    return colors[Math.floor(Math.random() * colors.length)];
}

