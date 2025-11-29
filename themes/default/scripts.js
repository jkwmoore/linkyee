document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('qr-toggle-button');
    const qrContainer = document.getElementById('qr-container');

    if (toggleButton && qrContainer) {
        toggleButton.addEventListener('click', function() {
            // Toggles the 'hidden' class, which triggers the CSS max-height transition
            qrContainer.classList.toggle('hidden');

            // Update button text
            if (qrContainer.classList.contains('hidden')) {
                toggleButton.innerHTML = '<i class="fas fa-qrcode"></i> Show QR Code Link to this page';
            } else {
                toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i> Hide QR Code Link to this page';
            }
        });
    }
});