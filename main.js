document.addEventListener('DOMContentLoaded', () => {

    // --- Countdown Timer ---
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        // Set your target launch date here!
        const targetDate = new Date('2025-06-01T00:00:00').getTime(); // Example: End of 2024

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElement.innerHTML = "<h2 class='launched-message'>We Have Launched!</h2>"; // Or hide countdown
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Add leading zeros if needed
            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        };

        // Update immediately and then every second
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    // --- Particles.js Configuration ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80, // Adjust density
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#FFFFFF", "#8C73E8", "#6425BC"] // White and brand purples
                },
                "shape": {
                    "type": "circle", // Can be "edge", "triangle", "polygon", "star", "image"
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                },
                "opacity": {
                    "value": 0.6, // Particle opacity
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.8,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3, // Particle size
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff", // Link color
                    "opacity": 0.3, // Link opacity
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2, // Movement speed
                    "direction": "none",
                    "random": true, // Random directions
                    "straight": false,
                    "out_mode": "out", // How particles behave at edges
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // "grab", "bubble", "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push" // "push", "remove", "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.7
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4 // Number of particles added on click
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true // Handles high-density displays
        });
    } else {
        console.error("particles.js library not loaded.");
    }

    // --- Simple Form Handler (Example) ---
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            const emailInput = document.getElementById('email');
            const email = emailInput.value;
            console.log(`Form submitted with email: ${email}`);
            // Here you would typically send the email to a backend service
            alert(`Thank you! We'll notify ${email} when we launch.`);
            emailInput.value = ''; // Clear the input
        });
    }

    // --- Update Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

}); // End DOMContentLoaded