document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript file is loaded');

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
});


const toggleButton = document.getElementById('toggleButton');
const body = document.body;


function toggleMode() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}


toggleButton.addEventListener('click', toggleMode);
body.classList.add('light-mode');


// switching between screens
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    const aboutMeLink = document.getElementById('aboutMeLink');
    const projectsLink = document.getElementById('projectsLink');

    const homeScreen = document.getElementById('homeScreen');
    const aboutMeScreen = document.getElementById('aboutMeScreen');
    const projectsScreen = document.getElementById('projectsScreen');

    function showScreen(screen) {
        if (homeScreen) homeScreen.style.display = 'none';
        if (aboutMeScreen) aboutMeScreen.style.display = 'none';
        if (projectsScreen) projectsScreen.style.display = 'none';
        if (screen) screen.style.display = 'block';
    }

    homeLink.addEventListener('click', () => showScreen(homeScreen));
    aboutMeLink.addEventListener('click', () => showScreen(aboutMeScreen));
    projectsLink.addEventListener('click', () => showScreen(projectsScreen));

    // this shows the project screen
    showScreen(projectsScreen);
});