# Navaratri Celebration 2025

A responsive web application for celebrating the 9 nights of Navaratri festival, built with React.

## Project Variants

This project offers two deployment options:

1. **Quick View** (`index.html`):
   - Single-file React application using CDN
   - No build process required
   - Open directly in any browser
   - Perfect for quick preview or simple hosting

2. **Development** (Vite + React):
   - Full development environment
   - Component-based architecture
   - Modern build tooling
   - Enhanced developer experience

## Quick Start

### Simple Version
Open `index.html` directly in your browser to view the application immediately.

### Development Version
1. Ensure Node.js (v16+) and npm are installed
2. Clone or download this repository
3. Open terminal in project root and run:
```powershell
npm install
npm run dev
```
4. Visit http://localhost:5173 in your browser

## Features

- 🕉️ Interactive countdown to Navaratri 2025
- 📅 Detailed 9-day schedule with rituals and events
- 🎭 Festival gallery with image modal viewer
- 💃 Garba & Dandiya night details
- 🎵 Background devotional music (toggle-able)
- 📱 Fully responsive design
- ✨ Smooth animations and transitions

## Project Structure

```
navaratri/
├── index.html          # Standalone SPA version
├── src/               
│   ├── components/     # React components
│   ├── assets/        # Images and media
│   ├── hooks.js       # Custom React hooks
│   └── data.js        # Festival schedule data
├── package.json       # Dependencies and scripts
└── vite.config.ts    # Build configuration
```

## Development Tools

- React 18.2.0
- Vite 5.1.0
- ESLint for linting
- Prettier for code formatting
- Vitest for testing

## Customization

1. **Audio**: Replace the audio source in `src/App.jsx` with your preferred devotional track
2. **Images**: Add your images to `src/assets/img/` and update the imports
3. **Schedule**: Modify `src/data.js` to update event details
4. **Styling**: Update `src/styles.css` for custom theming

## Browser Support

- Chrome/Edge/Opera (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+

## License

MIT License - Feel free to use and modify

## Finalized changes

- Replaced gallery emojis with real images for the Vite app and the standalone SPA.
   - Added three SVG illustrations in `src/assets/img/`:
      - `garba1.svg`, `garba2.svg`, `garba3.svg`
   - Updated `src/assets/images.js` to reference the new SVG paths.
   - Updated `src/data.js` and `index.html` gallery entries to use the local images.

## Verification

1. Install dependencies and start dev server:
```powershell
npm install
npm run dev
```
2. Open http://localhost:5173/ and check the Gallery section — the first three tiles should show the Garba images.
3. To preview the standalone SPA, open `index.html` directly in a browser (it uses the same images via `/src/assets/img/...`).

If you'd like, I can replace the remaining emoji tiles with images and add hover effects or lazy-loading.
