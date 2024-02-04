const gokuImage = document.getElementById("goku-image");
const dragonBallZText = document.getElementById("dragon-ball-z-text");
const menu = document.getElementById("menu");

// Goku click event listener
let isMenuVisible = false;

gokuImage.addEventListener("click", () => {
  isMenuVisible = !isMenuVisible;

  if (isMenuVisible) {
    // Goku's information
    const gokuData = [
      { label: "Name", value: "Son Goku" },
      { label: "Abilities", value: "Super Saiyan, Kamehameha" },
      { label: "Weight", value: "62 kg" },
      { label: "Height", value: "175 cm" }
    ];

    // Dynamically generate menu content with Goku's information
    let gokuInfo = "";

    gokuData.forEach((item) => {
      gokuInfo += `<p class="yellow">${item.label}: <span class="white">${item.value}</span></p>`;
    });

    menu.innerHTML = gokuInfo;

    // Display the menu
    menu.style.display = "block";
  } else {
    // Hide the menu
    menu.style.display = "none";
  }
});

// Use Anime.js to create an animation
anime({
  targets: gokuImage,
  translateX: 300,
  translateY: 100,
  rotate: 390,
  scale: 1,
  easing: "easeInOutQuad",
  duration: 3000,
  loop: false
});

anime({
  targets: dragonBallZText,
  opacity: 1,
  easing: "easeInOutQuad",
  duration: 2000,
  delay: 2500
});

// end
