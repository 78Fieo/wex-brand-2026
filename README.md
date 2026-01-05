# WEX Design System 2026

A modern React + Vite design system and dashboard application.

## Quick Start

```bash
npm install
npm run dev
```

## Troubleshooting in Bolt.new

If the preview isn't loading:

1. **Check Terminal** (left sidebar):
   - Look for `npm install` errors
   - Look for `npm run dev` errors
   - Should see: `VITE v6.x.x ready` and `Local: http://localhost:xxxx/`

2. **Filter Console Errors**:
   - In browser console, filter by: `main.jsx` or `src/`
   - Ignore Bolt.new infrastructure errors (messo.min.js, chmln.js, Mixpanel)

3. **Common Issues**:
   - **Port conflict**: Bolt auto-increments ports, check terminal for actual port
   - **Missing dependencies**: Check terminal for `npm ERR!` messages
   - **Build errors**: Look for `Failed to resolve import` in console

## Project Structure

```
/
├── src/              # Source files
├── index.html        # Entry HTML
├── vite.config.js    # Vite configuration
├── package.json      # Dependencies
└── tailwind.config.js # Tailwind config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run tokens:extract` - Extract design tokens

