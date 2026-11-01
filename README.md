# Streamline Aquatic Performance website

A static website (HTML, CSS and a small amount of JavaScript) hosted on Netlify. There is no build step.

## Files
- `index.html`: the main one-page site (About, Clinics, Who it's for, Club bookings, Enquiry form)
- `styles.css`: all styling. Brand colours are at the top under `:root`.
- `script.js`: mobile menu and small helpers
- `thanks.html`: the page shown after someone submits the enquiry form
- `404.html`: the "page not found" page
- `assets/`: logo, favicon and (later) photos and videos
- `netlify.toml`: Netlify settings

## Enquiry form
The form uses **Netlify Forms**. After the first deploy:
1. In Netlify, go to **Site configuration → Forms** and make sure form detection is enabled.
2. Go to **Forms → Form notifications → Add notification → Email notification**, choose the `enquiry` form, and enter `sam.streamlineperformance@gmail.com`.
3. Submissions also appear under the **Forms** tab in Netlify.

## Updating the site
Edit the files on GitHub and commit. Netlify redeploys automatically within a minute.
