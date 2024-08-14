document.addEventListener('DOMContentLoaded', () => {
    
    // Install button functionality
    const installButton = document.getElementById('installButton');
    let progress = 0;

    installButton.addEventListener('click', () => {
        if (progress < 100) {
            progress += 27;
            if (progress > 100) {
                progress = 100;
            }
            installButton.textContent = `Installing ${progress}%`;
        } else {
            installButton.textContent = `Installation complete!`;
        }
    });
    
    // Different screen functionality click
    const homeLink = document.getElementById('homeLink');
    const aboutMeLink = document.getElementById('aboutMeLink');
    const storeLink = document.getElementById('storeLink');

    const homeScreen = document.getElementById('homeScreen');
    const aboutMeScreen = document.getElementById('aboutMeScreen');
    const storeScreen = document.getElementById('storeScreen');
    const shopScreen = document.getElementById('shopScreen');

    function showScreen(screen) {
        if (homeScreen) homeScreen.style.display = 'none';
        if (aboutMeScreen) aboutMeScreen.style.display = 'none';
        if (storeScreen) storeScreen.style.display = 'none';
        if (shopScreen) shopScreen.style.display = 'none';
        if (screen) screen.style.display = 'block';
    }

    homeLink.addEventListener('click', () => showScreen(homeScreen));
    aboutMeLink.addEventListener('click', () => showScreen(aboutMeScreen));
    storeLink.addEventListener('click', () => showScreen(storeScreen));

    // Home screen appears by default
    showScreen(homeScreen);

    // Game card function
    document.querySelectorAll('.view-game').forEach(button => {
        button.addEventListener('click', function() {
            showScreen(shopScreen);
        });
    });

    // Dark and light mode
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});
