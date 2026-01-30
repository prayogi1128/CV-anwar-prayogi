// Set tahun saat ini di footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Fungsi untuk mencetak CV
document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});

// Modal informasi
const modal = document.getElementById('infoModal');
const closeModalBtn = document.getElementById('closeModal');

// Tampilkan modal setelah halaman dimuat
window.addEventListener('load', function() {
    // Tampilkan modal setelah 1 detik
    setTimeout(function() {
        modal.style.display = 'flex';
    }, 1000);
});

// Tutup modal ketika tombol close diklik
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Tutup modal ketika mengklik di luar konten modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Tambahkan efek hover pada item pengalaman
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Animasi skill bars saat halaman dimuat
window.addEventListener('load', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(level => {
        // Simpan lebar asli
        const width = level.style.width;
        // Set lebar menjadi 0 untuk animasi
        level.style.width = '0';
        
        // Set timeout untuk animasi bertahap
        setTimeout(() => {
            level.style.transition = 'width 1.5s ease-in-out';
            level.style.width = width;
        }, 300);
    });
});

// Toggle tema gelap/terang (opsional)
const toggleTheme = document.createElement('button');
toggleTheme.innerHTML = '<i class="fas fa-moon"></i> Tema';
toggleTheme.className = 'theme-toggle';
toggleTheme.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 8px;
`;

document.body.appendChild(toggleTheme);

let darkMode = false;
toggleTheme.addEventListener('click', function() {
    darkMode = !darkMode;
    
    if (darkMode) {
        document.body.style.backgroundColor = '#1a1a2e';
        document.querySelector('.container').style.backgroundColor = '#16213e';
        document.querySelector('.container').style.color = '#e6e6e6';
        
        // Update warna teks untuk kontras yang lebih baik
        const allTextElements = document.querySelectorAll('h1, h2, h3, p, li, span, div');
        allTextElements.forEach(el => {
            if (!el.classList.contains('job-badge') && !el.classList.contains('section-title')) {
                el.style.color = '#e6e6e6';
            }
        });
        
        // Update warna latar untuk beberapa elemen
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.style.backgroundColor = '#0f3460';
        });
        
        toggleTheme.innerHTML = '<i class="fas fa-sun"></i> Tema';
        toggleTheme.style.backgroundColor = '#f39c12';
    } else {
        // Kembalikan ke tema asli
        document.body.style.backgroundColor = '#f8f9fa';
        document.querySelector('.container').style.backgroundColor = 'white';
        document.querySelector('.container').style.color = '#333';
        
        const allTextElements = document.querySelectorAll('h1, h2, h3, p, li, span, div');
        allTextElements.forEach(el => {
            if (!el.classList.contains('job-badge') && !el.classList.contains('section-title')) {
                el.style.color = '';
            }
        });
        
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.style.backgroundColor = '#f8f9fa';
        });
        
        toggleTheme.innerHTML = '<i class="fas fa-moon"></i> Tema';
        toggleTheme.style.backgroundColor = '#3498db';
    }
});

// Tambahkan animasi pada skill bars saat dihover
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const skillBar = this.querySelector('.skill-bar');
        skillBar.style.transform = 'scale(1.02)';
        skillBar.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        const skillBar = this.querySelector('.skill-bar');
        skillBar.style.transform = 'scale(1)';
    });
});