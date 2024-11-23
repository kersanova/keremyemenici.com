const textElement = document.getElementById("morphose-text");

// Geçiş yapacağımız metinler
const texts = [
    "Future",
    "Experience",
    "Vision"
];

// Geçiş süreleri
const morphTime = 0.5; // Geçiş süresi (saniye) - biraz uzattık
const cooldownTime = 2; // Geçiş sonrası bekleme süresi (saniye) - biraz uzattık

let textIndex = 0; // İlk metin indeksi
let morph = 0; // Morph durumunu tutan değişken
let cooldown = cooldownTime; // Cooldown süresi

// Başlangıç metnini ayarla
textElement.textContent = texts[textIndex];

function doMorph() {
    morph += 1 / (morphTime * 60); // Frame hızıyla morph'u artır
    if (morph >= morphTime) {
        textIndex = (textIndex + 1) % texts.length; // Bir sonraki metne geç
        textElement.textContent = texts[textIndex]; // Metni güncelle
        cooldown = cooldownTime; // Cooldown'u sıfırla
        morph = 0; // Morph'u sıfırla
    }
    setMorph(); // Morph efektini uygula
}

function setMorph() {
    let fraction = morph / morphTime; // Morph oranını hesapla
    fraction = Math.min(fraction, 1); // fraction'ı 1'den büyük yapma
    textElement.style.filter = `blur(${Math.min(8 / (1 - fraction) - 8, 100)}px)`; // Blur uygulama
    textElement.style.opacity = `${Math.pow(1 - fraction, 0.6) * 100}%`; // Opaklığı ayarla (daha az bulanıklık için ayarlandı)
}

function animate() {
    if (cooldown > 0) {
        cooldown -= 1 / 60; // Cooldown'u azalt
    } else {
        doMorph(); // Morph işlemini yap
    }
    requestAnimationFrame(animate); // Bir sonraki animasyon çerçevesini iste
}

// Animasyonu başlat
animate();
