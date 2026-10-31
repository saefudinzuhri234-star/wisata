alert("Selamat datang di SIWA!");
// Ambil tombol dari HTML
const heroButton = document.querySelector(".hero-button");
const heroTitle = document.querySelector(".hero-title");
const heroDescription = document.querySelector(".hero-description");

// Pasang "telinga" untuk mendeteksi klik
heroButton.addEventListener("click", function() {
    heroTitle.textContent = "Ayo Jelajahi Wisata Indonesia!";
    heroDescription.textContent ="Temukan pantai, gunung, dan destinasi yang kamu sukai";
    heroTitle.classList.toggle("judul-highlight");
    heroDescription.classList.toggle("judul-highlight");
});
