

    document.getElementById('google_translate_button').addEventListener('click', function() {
        var translateElement = document.getElementById('google_translate_element');
        
        if (translateElement.style.display === 'none') {
            translateElement.style.display = 'block';
        } else {
            translateElement.style.display = 'none';
        }
    });

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }
    