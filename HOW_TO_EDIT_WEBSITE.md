# Parker Cole Portfolio - Editing Guide

## The important files

- `index.html` - homepage layout/design. Normally **do not edit this**.
- `project.html` - reusable project case-study page. Normally **do not edit this**.
- `portfolio-data.js` - **all editable portfolio content**.
- `portfolio-editor.html` - visual editor that creates a new `portfolio-data.js` for you.
- `images/` - put project photos, CAD screenshots, renders, and diagrams here.
- `Parker_Cole_Resume.pdf` - resume opened by recruiters.
- `Parker_Cole_Resume.docx` - editable resume download.

## Easiest way to edit the website

1. Keep `portfolio-editor.html` and `portfolio-data.js` in the same folder.
2. Open `portfolio-editor.html` in your browser (or visit it on your GitHub Pages site).
3. Edit profile information, skills, experience, or projects.
4. Click **Download portfolio-data.js**.
5. In GitHub, open the existing `portfolio-data.js` file and click the pencil icon.
6. Replace the entire contents with the new generated data and commit the change.
7. GitHub Pages will redeploy the portfolio automatically.

The editor itself does **not** directly change GitHub, so you can experiment safely.

## Uploading pictures

### Recommended image types
- `.jpg` or `.webp` for photos and CAD renders
- `.png` for screenshots, diagrams, or images containing text
- Try to keep each image below about 2 MB for fast mobile loading
- Recommended cover-image shape: landscape, about 16:9 or 4:3

### Naming images
Use lowercase names with hyphens and no spaces:

`putter-prototype-front.jpg`

`peterbilt-project-approved-01.jpg`

### Upload to GitHub
1. Open the `images` folder in your GitHub repository.
2. Choose **Add file > Upload files**.
3. Upload your image and commit it.
4. In the Portfolio Editor, enter the image path exactly like:

`images/putter-prototype-front.jpg`

5. Add useful alt text that explains what the image shows.
6. Download/publish the updated `portfolio-data.js`.

### Cover image vs. gallery
- **Cover image** appears on the homepage project card and at the top of that project's case-study page.
- **Project gallery** images appear farther down the case-study page. You can add as many as needed.
- If a project has no cover image, the site automatically uses the original clean technical graphic instead.

## Adding a new project

1. Open `portfolio-editor.html`.
2. Click **+ Add project**.
3. Give the project a unique ID such as `rocket-fin-design`.
4. Complete the title, summary, tags, overview, challenge, approach, outcome, and note.
5. Add a cover image and gallery images if desired.
6. Download/publish `portfolio-data.js`.

The new project automatically appears on the homepage and automatically receives its own case-study URL:

`project.html?id=rocket-fin-design`

You do **not** need to create another HTML page for every project.

## Reordering projects

The homepage displays projects in project-list order. In the Portfolio Editor, select a project and use **Move up** or **Move down** to change its position. Publish the updated `portfolio-data.js` when finished.

## Replacing your resume

Upload the new files with the same names:
- `Parker_Cole_Resume.pdf`
- `Parker_Cole_Resume.docx`

Using the same names means no website links need to change.

## Peterbilt / employer information

Only publish photos, screenshots, drawings, CAD, tooling information, production details, or project specifics you know are approved for public release. The website is public and can be indexed or shared.

## If something looks broken

1. Confirm `portfolio-data.js` is in the same top-level folder as `index.html`.
2. Confirm image file names match capitalization exactly. GitHub Pages is case-sensitive.
3. Confirm image paths begin with `images/`.
4. Hard-refresh your browser (`Ctrl + Shift + R`).
5. Test in a private/incognito window.
