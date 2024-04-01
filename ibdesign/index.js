document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('body');
    const changePoint = 700; // Change this value according to where you want the background change to occur

    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;

        if (scrolled > changePoint) {
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; // Change to second background image
        } else {
            background.style.backgroundImage = "url('https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80')"; // Change back to default background image
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const zoomables = document.querySelectorAll('.zoomable');

    zoomables.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            const imageUrl = this.querySelector('img').src;
            window.open(imageUrl, '_blank');
        });
    });
});