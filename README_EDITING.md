# Parker Cole Engineering Portfolio - Editing Guide

This website is intentionally built as a simple static site so it can be edited without a website builder or special software.

## The easiest way to edit the site

Open `js/content.js` in any text editor (Notepad, VS Code, Notepad++, etc.). Almost every piece of visible text is stored there:

- Name, academic discipline, school/department, and contact information
- LinkedIn URL
- Resume links
- About text
- Skills
- Project descriptions
- Experience and leadership information

Keep the quotation marks and commas in place when changing text. To change how your academic program is described across the site, edit `title`, `discipline`, `department`, `intro`, and `about` near the top of `js/content.js`.

## Academic program wording

The site currently presents Parker as a **Mechanical & Aerospace Engineering Student** at Oklahoma State University and identifies the **School of Mechanical and Aerospace Engineering** in the education section. The degree line remains `Bachelor of Science, Mechanical Engineering`; edit that line in `education.degree` only if the formal degree program changes.

## Adding project photos or CAD images

1. Put the image file in `assets/images/`.
2. Use short filenames with no spaces, for example: `putter-prototype-01.jpg`.
3. The current version is designed to work cleanly even before photos are added. When project images are ready, they can be inserted into the project case-study layout without redesigning the site.

Recommended image types: JPG, PNG, or WebP.

## Adding another project

In `js/content.js`, find `selectedProjects`. Copy one entire project block, paste it after another project, then edit:

- `id` - unique lowercase name with hyphens
- `eyebrow`
- `title`
- `summary`
- `tags`
- `overview`
- `challenge`
- `approach`
- `outcome`
- `note`

The homepage and project page will update automatically.

## Important Peterbilt / employer note

Only publish employer project details, photos, drawings, CAD screenshots, plant images, data, or metrics that you are certain are appropriate for public release. This version intentionally uses only high-level information already established as non-confidential portfolio content.

## Changing the visual theme

Open `css/styles.css` and edit the variables at the very top. The orange accent is controlled by:

`--accent: #e85d04;`

The design is responsive and automatically adapts to desktop, tablet, and phone layouts.

## Resume files

The current resume is stored in:

- `assets/resume/Parker_Cole_Resume.pdf`
- `assets/resume/Parker_Cole_Resume.docx`

To update the resume later, replace those two files with new files using the exact same names. All website links will continue to work.

## Previewing the website on your computer

The simplest method is to open `index.html` in a web browser.

For the most accurate local preview, open a terminal in this folder and run:

`python -m http.server 8000`

Then open `http://localhost:8000` in your browser.

## Publishing

This folder is ready for static hosting such as GitHub Pages, Netlify, or another static-site host. No database or server-side code is required.
