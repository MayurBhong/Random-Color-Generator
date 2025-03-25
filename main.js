const colorBtn = document.getElementById('colorBtn');
const colorDisplay = document.getElementById('colorDisplay');

colorBtn.addEventListener('click', () => {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Create hex color code
    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    
    // Change background color
    document.body.style.backgroundColor = hexColor;
    
    // Update color display
    colorDisplay.textContent = `Current color: ${hexColor}`;
    
    // Add a little animation to the button
    colorBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        colorBtn.style.transform = '';
    }, 100);
});