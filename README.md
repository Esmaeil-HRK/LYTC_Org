# LYTC - Coming Soon Landing Page

This is a simple "Coming Soon" landing page for the Libyan Youth for Technology and Communications (LYTC) organization. It features a countdown timer, an animated particle background, and an email signup form.

## Features

*   **Responsive Design:** Adapts to different screen sizes.
*   **Countdown Timer:** Shows the time remaining until a specified launch date.
*   **Particle Background:** Uses the `particles.js` library for an animated background effect.
*   **Email Signup Form:** A basic form to collect email addresses (currently logs to console, requires backend integration for actual storage).
*   **Social Media Links:** Placeholders for links to LYTC's social profiles.
*   **Fade-in Animations:** Subtle animations for content elements on page load.

## Technologies Used

*   HTML5
*   CSS3 (including CSS Variables and Flexbox)
*   JavaScript (ES6)
*   [particles.js](https://github.com/VincentGarreau/particles.js/) library

## Setup & Usage

1.  Clone or download this repository.
2.  Open the `index.html` file in your web browser.

No build steps or local server are required for basic viewing.

## File Structure

```
.
├── index.html              # Main HTML structure
├── styles.css              # CSS styles for the page
├── main.js                 # JavaScript for countdown, particles, and form handling
├── lytc_logo.jpg           # Project logo image
├── particles.js-master/    # particles.js library files
│   ├── particles.js
│   ├── particles.min.js
│   └── ... (other library files)
└── README.md               # This file
```

## Customization

*   **Launch Date:** Modify the `targetDate` variable in `main.js` to set your desired launch date and time.
*   **Particles:** Adjust the configuration object within the `particlesJS` call in `main.js` to change the appearance and behavior of the particle background. Refer to the [particles.js documentation](https://github.com/VincentGarreau/particles.js/) for options.
*   **Styling:** Modify colors, fonts, and layout in `styles.css`. Key variables are defined in the `:root` section.
*   **Social Links:** Update the `href` attributes for the social media icons in the `<footer>` section of `index.html`.
*   **Signup Form:** To make the signup form functional, you will need to add backend logic to process the submitted email addresses (e.g., using Node.js, PHP, Python, or a third-party service like Mailchimp). The current JavaScript only prevents the default form submission and logs the email to the console.

## License

The code for this landing page is specific to LYTC. The included `particles.js` library is distributed under its own license (see `particles.js-master/LICENSE.md`).
