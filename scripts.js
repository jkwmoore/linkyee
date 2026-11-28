document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('qr-toggle-button');
  const qrContainer = document.getElementById('qr-container');

  if (!toggleButton || !qrContainer) {
    return;
  }

  // Ensure initial state is closed without flashing on load
  qrContainer.classList.add('hidden');
  toggleButton.setAttribute('aria-expanded', 'false');

  toggleButton.addEventListener('click', function () {
    const isOpening = qrContainer.classList.contains('hidden');

    qrContainer.classList.toggle('hidden', !isOpening);
    qrContainer.classList.toggle('is-open', isOpening);
    toggleButton.setAttribute('aria-expanded', String(isOpening));

    const labelEl = toggleButton.querySelector('span');
    if (labelEl) {
      labelEl.textContent = isOpening
        ? 'Hide QR code link to this page'
        : 'Show QR code link to this page';
    }

    const iconEl = toggleButton.querySelector('i, svg');
    if (iconEl && iconEl.tagName.toLowerCase() === 'i') {
      iconEl.className = isOpening ? 'fas fa-eye-slash' : 'fas fa-qrcode';
    }
  });
});
