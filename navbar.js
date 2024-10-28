document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('show');
});


document.querySelectorAll('.circular-progress').forEach(circle => {
    const percentage = parseFloat(circle.getAttribute('data-percentage'));
    circle.style.setProperty('--percentage', percentage / 5 * 100);
});