document.addEventListener('DOMContentLoaded', function() {
    const angleInput = document.getElementById('angleInput');
    const angleSlider = document.getElementById('angleSlider');
    const anglePresets = document.getElementsByName('anglePreset');

    function updateAngle(value) {
        value = ((value % 360) + 360) % 360; // Ensure value is between 0 and 360
        angleInput.value = value;
        angleSlider.value = value;
        
        // Update radio buttons
        anglePresets.forEach(radio => {
            radio.checked = (parseInt(radio.value) === value);
        });
    }

    angleInput.addEventListener('input', (e) => {
        updateAngle(parseInt(e.target.value) || 0);
    });

    angleSlider.addEventListener('input', (e) => {
        updateAngle(parseInt(e.target.value));
    });

    anglePresets.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                updateAngle(parseInt(e.target.value));
            }
        });
    });
});