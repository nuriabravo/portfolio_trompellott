document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('menuOverlay').addEventListener('click', function() {
    document.getElementById('btn-menu').checked = false;
});

document.querySelectorAll('details').forEach(function(detail) {
    detail.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

