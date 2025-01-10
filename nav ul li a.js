document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const page = this.getAttribute('href').replace('.html', '');
        loadPage(page);
    });
});

function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
            // Call any additional functions needed to initialize the new content
        })
        .catch(error => console.error('Error loading page:', error));
}