const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const gif = document.getElementById('gif');

let clickCount = 0;
const maxClicks = 5; // 5 tıklamada tamamen kaplar

// Hayır butonuna tıklandığında veya dokunulduğunda
function handleNoAction() {
    clickCount++;

    // Evet butonunu her seferinde daha fazla büyüt
    const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const currentPaddingY = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
    const currentPaddingX = parseFloat(window.getComputedStyle(yesBtn).paddingLeft);

    // Büyütme hesaplamaları düzeltildi
    yesBtn.style.fontSize = `${currentFontSize * 1.35}px`;
    yesBtn.style.padding = `${currentPaddingY * 1.25}px ${currentPaddingX * 1.25}px`;

    // 5. tıklamada (veya sonrasında) Evet tüm ekranı kaplasın ve Hayır kaybolsun
    if (clickCount >= maxClicks) {
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '0';
        yesBtn.style.left = '0';
        yesBtn.style.width = '100vw';
        yesBtn.style.height = '100vh';
        yesBtn.style.zIndex = '9999';
        yesBtn.style.borderRadius = '0';
        yesBtn.style.display = 'flex';
        yesBtn.style.justifyContent = 'center';
        yesBtn.style.alignItems = 'center';
        yesBtn.style.fontSize = '2.5rem';

        noBtn.style.display = 'none'; // Hayır butonunu yok et
    }
}

// Hem masaüstü hem mobil için tıklama/dokunma olayı
noBtn.addEventListener('click', handleNoAction);

// Evet butonuna tıklandığında gerçekleşecekler
yesBtn.addEventListener('click', () => {
    // Arka plan rengini tam uyumlu CSS sınıfı ile değiştir
    document.body.classList.add('yes-bg');

    // Eğer buton tüm ekranı kapladıysa normal görünümüne dönsün
    yesBtn.style.position = 'static';
    yesBtn.style.width = 'auto';
    yesBtn.style.height = 'auto';

    // Mesajı ve GIF'i güncelle
    question.innerHTML = "Seni çok seviyorum! ❤️<br>Tarihi ve yeri ben ayarlıyorum ";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGg4MmkzajFoZnpxYXllYnRvNW8xMGN6aDBiajB3YXdoejE3NnRvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MUHNdrm3vk7MoyUsCO/giphy.gif"; 
    
    // Butonları gizle
    document.querySelector('.btn-group').style.display = 'none';

    // Konfeti patlat
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
});