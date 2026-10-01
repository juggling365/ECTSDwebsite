[README.md](https://github.com/user-attachments/files/32883489/README.md)
# Electric City Tang Soo Do Website

Static website for Electric City Tang Soo Do, including public information pages, free-week signup, payment links, and a protected student curriculum area.

## Run Locally

No build step is required. Open `Index.HTML` directly in a browser, or serve the folder with any static web server.

## Main Pages

- `Index.HTML` - Homepage and free-week signup
- `about.html` - School approach and instructor bios
- `classes.html` - Kids, adult, and advanced training options
- `payments.html` - PayPal, Venmo, and payment instructions
- `contact.html` - Contact form, phone actions, email, and Google Maps link
- `shop.html` - Sweet GFX custom products
- `curriculum.html` - Student Portal and belt-level directory

## Student Curriculum

Belt-level pages use `js/belt-level.js` for their video lists. Replace each `REPLACE_WITH_VIDEO_ID` URL with the appropriate YouTube link.

The current client-side access passwords are:

- Student curriculum: `Tangsoodo`
- Instructor resources: `Kyosanim`

These passwords are not secure server-side authentication because they are stored in browser JavaScript. Use hosting-level protection or a server-backed authentication system for private content.

The student manual is linked as `student-manual.pdf` in the website root.

## Contact and Forms

The school contact details are maintained in the page footers:

- Email: `Electriccitytangsoodo@gmail.com`
- Phone: `(570) 591-1568`
- Address: `504 Scranton Carbondale Hwy, Mayfield, PA 18433`

The free-week form is handled by `js/script.js`. The Contact page form is handled by `js/contact.js`. Both open a pre-filled email draft using `mailto:`; they do not send through a server.

## Assets

Images are stored in the website root and referenced directly by the HTML pages. The homepage banner is `website banner.avif`. Instructor portraits and public page photos use the existing image filenames in the same folder.

## Updating the Site

1. Edit the relevant HTML page.
2. Update shared visual styles in `css/style.css`.
3. Update page-specific behavior in the matching JavaScript file under `js/`.
4. Keep asset filenames and links aligned with the files in the website root.
