// Blood drop effect function
function createBloodDrop() {
    const bloodDrop = document.createElement("div");
    bloodDrop.classList.add("blood");

    // Random position for the drop
    const x = Math.random() * window.innerWidth;
    const size = Math.random() * 10 + 5;
    bloodDrop.style.width = `${size}px`;
    bloodDrop.style.height = `${size}px`;
    bloodDrop.style.left = `${x}px`;
    bloodDrop.style.position = 'absolute';

    document.querySelector(".blood-effect").appendChild(bloodDrop);

// Animate the blood drop
    gsap.to(bloodDrop, {
        top: window.innerHeight + 50,
        duration: Math.random() * 2 + 2,
        ease: "linear",
        onComplete: () => {
            bloodDrop.remove();
        }
    });
}

// Create blood drops at intervals
setInterval(createBloodDrop, 300);



// Array of movie trailer video URLs
const trailers = [
    "videos/WRONG TURN 2 DEAD END  OFFICIAL TRAILER 2003720p.mp4", // Replace with your actual video path
    "videos/TERRIFIER 3 Official Trailer 2024 Red band1080p.mp4",
    // Add more trailer URLs here
];

let currentTrailerIndex = 0;
const trailerVideo = document.getElementById("trailer-video");

// Function to load and play the next trailer
function playNextTrailer() {
    // Update the video source to the current trailer in the array
    trailerVideo.src = trailers[currentTrailerIndex];
    trailerVideo.load(); // Load the new video
    trailerVideo.play(); // Play the video

    // Update index to the next trailer, looping back to the start if necessary
    currentTrailerIndex = (currentTrailerIndex + 1) % trailers.length;
}

// Event listener to play the next trailer when the current one ends
trailerVideo.addEventListener("ended", playNextTrailer);

// Initialize by playing the first trailer
playNextTrailer()




document.querySelectorAll(".movie-card").forEach(card => {
    card.addEventListener("mouseenter", createParticles);
});

function createParticles(event) {
    const card = event.currentTarget;
    const particleCount = 15; // Number of particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");
        particle.classList.add("particle");
        card.appendChild(particle);

        // Randomize the initial position of each particle
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Add random animation
        particle.style.animation = `fly 0.6s ease-out forwards ${Math.random() * 0.3}s`;

        // Remove particle after animation ends
        particle.addEventListener("animationend", () => particle.remove());
    }
}

// Ensure that JavaScript runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const movieCards = document.querySelectorAll(".movie-card");

    // Check if movie cards are found
    if (movieCards.length === 0) {
        console.error("No movie cards found with class '.movie-card'. Check your HTML structure.");
    }

    // Add event listeners to each movie card
    movieCards.forEach(card => {
        card.addEventListener("mouseenter", createParticles);
    });

    function createParticles(event) {
        const card = event.currentTarget;
        const particleCount = 15; // Number of particles

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("span");
            particle.classList.add("particle");

            // Append particle to the card
            card.appendChild(particle);

            // Randomize the initial position of each particle
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Add random animation delay
            particle.style.animation = `fly 0.6s ease-out forwards ${Math.random() * 0.3}s`;

            // Remove particle after animation ends
            particle.addEventListener("animationend", () => particle.remove());
        }
    }
});


window.addEventListener("load", () => {
    document.querySelectorAll(".movie-card").forEach((card, index) => {
        card.style.animationDelay = `${0.5 + index * 0.2}s`;
    });
});

document.getElementById("showSecretLinkButton").addEventListener("click", function() {
    const password = prompt("Enter the password to access the secret link:");

    // Replace 'yourPassword' with your desired password
    if (password === "iknowMR.Deadpool") {
        document.getElementById("secretLink").style.display = "block"; // Show the secret link
        alert("Access granted! You can now see the secret link.");
    } else {
        alert("Incorrect password. Try again.");
    }
});
