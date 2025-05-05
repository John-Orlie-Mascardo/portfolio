// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bg-dark': '#22252d',
            },
            fontFamily: {
                'slabo': ['"Slabo 27px"', 'serif'],
            },
        }
    }
}

// Wait for DOM to be fully loaded before initializing Vanta
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Vanta waves effect
    VANTA.WAVES({
      el: "#ring",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x22252d,
      shininess: 11.00,
      waveHeight: 16.00,
      waveSpeed: 1.10,
      zoom: 0.76
    });
});