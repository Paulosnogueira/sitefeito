document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-theme');
    const themeIcon = document.getElementById('theme-icon');
    const profileImage = document.getElementById('profile-image');
    const html = document.documentElement;

    toggleButton.addEventListener('click', function () {
        if (html.classList.contains('light')) {
            html.classList.remove('light');
            html.classList.add('dark');
            themeIcon.setAttribute('name', 'sunny-outline');
            profileImage.src = './avatar.png'; // Imagem para o modo escuro
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            themeIcon.setAttribute('name', 'moon-outline');
            profileImage.src = './avatar-light.png'; // Imagem para o modo claro
        }
    });
});
