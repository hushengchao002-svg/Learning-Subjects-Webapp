# My Web App

A simple HTML, CSS, and JavaScript starter. No dependencies or build step required.

## Folder structure

```text
web-app/
├── index.html          # Main page
├── src/
│   ├── styles/
│   │   └── main.css    # App styles
│   └── scripts/
│       └── main.js     # App behavior
├── public/
│   └── assets/         # Images, fonts, and other static files
├── .gitignore
└── README.md
```

## Preview

Open `index.html` in your browser. Click **Get started** to check the JavaScript.

If Python 3 is installed, you can also serve the project locally:

```sh
cd /Users/jackhu/web-app
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit http://localhost:8000. Stop the server with Ctrl+C.

## Develop

- Edit `index.html` to change page content.
- Edit `src/styles/main.css` to change appearance.
- Edit `src/scripts/main.js` to add behavior.
- Put images in `public/assets/` and reference them as `./public/assets/filename.png`.
- Refresh the browser after saving changes.

This starter contains the frontend only. Add a backend when your app needs one.
Never put private API keys or secrets in browser code.
