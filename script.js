// ========================================
// RESPONSIVE NAVIGATION BAR JAVASCRIPT
// ========================================

// DOM yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger menü butonunu seç
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    // Mobil navigasyon menüsünü seç
    const mobileNav = document.querySelector('.mobile-nav');
    
    // Mobil menü linklerini seç
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Hamburger menüye tıklama olayı ekle
    hamburgerMenu.addEventListener('click', function() {
        // Mobil menüyü aç/kapat
        mobileNav.classList.toggle('active');
        
        // Hamburger menü animasyonu için class ekle/çıkar
        hamburgerMenu.classList.toggle('active');
    });
    
    // Mobil menü linklerine tıklama olayı ekle
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Link tıklandığında menüyü kapat
            mobileNav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });
    
    // Menü dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(event) {
        // Eğer tıklanan element hamburger menü veya mobil menü değilse
        if (!hamburgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
            // Menüyü kapat
            mobileNav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
    
    // ESC tuşuna basıldığında menüyü kapat
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            mobileNav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
    
    // Ekran boyutu değiştiğinde menüyü kapat (mobilden masaüstüne geçiş)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
}); 