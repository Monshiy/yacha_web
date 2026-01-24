document.addEventListener('DOMContentLoaded', () => {
    // Simple intersection observer for scroll animations if we add more content later
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Animate hero elements on load
    const appCard = document.querySelector('.app-card');
    
    // Mouse movement parallax effect for the card
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 968) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            if(appCard) {
                appCard.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        }
    });

    // Detect if user is on Windows
    const isWindows = navigator.platform.indexOf('Win') > -1;
    const btnText = document.querySelector('.btn-primary span');
    
    if (!isWindows) {
        // Optional: Change text if not on Windows, or keep it but maybe warn
        // For this specific use case, we'll keep it as is since they might be downloading for another machine
        // but we could add a tooltip.
        const note = document.querySelector('.install-note');
        if(note) {
            note.innerHTML += ' <br><span style="color: #ffbd2e"><i class="fa-solid fa-triangle-exclamation"></i> Detectamos que no estás en Windows.</span>';
        }
    }
});
