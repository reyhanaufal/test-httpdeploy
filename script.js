document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling untuk link navigasi
    const navLinks = document.querySelectorAll('#navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Cek jika link memiliki hash
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;

                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for fixed header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Simulasi pengiriman form kontak
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mengambil data dari form
            const name = this.querySelector('input[name="name"]').value;
            
            // Menampilkan pesan sukses
            alert(`Terima kasih, ${name}! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.`);
            
            // Mengosongkan form
            this.reset();
        });
    }

});