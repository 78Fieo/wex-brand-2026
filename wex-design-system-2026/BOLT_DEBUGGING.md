# 🔍 Debugging in Bolt.new - Quick Guide

## Where to Look for Errors:

### 1. **Browser Console** (Preview Pane)
- **Right-click** the preview → **Inspect** (or press `F12`)
- Go to **Console** tab
- Look for:
  - ❌ Red error messages
  - ⚠️ Yellow warnings
  - Failed imports: `Failed to resolve import...`
  - React errors: `Cannot read property...`

### 2. **Terminal/Console** (Left Sidebar)
- Check the terminal where `npm install` ran
- Look for:
  - `npm ERR!` messages
  - Build failures
  - Missing dependencies
  - Port conflicts

### 3. **Network Tab** (DevTools)
- In DevTools → **Network** tab
- Refresh the page
- Look for:
  - 404 errors (red status codes)
  - Failed asset loads
  - CORS errors

### 4. **Common Errors to Check:**

#### ❌ "Cannot find module..."
- Missing dependency in `package.json`
- Wrong import path

#### ❌ "Failed to resolve import..."
- File doesn't exist
- Wrong file extension (.js vs .jsx)

#### ❌ "Port 3000 already in use"
- Bolt auto-increments, but check terminal

#### ❌ "Module not found: Can't resolve..."
- Check if file exists at that path
- Check import statement spelling

## Quick Fixes:

1. **Clear cache**: Stop dev server, delete `node_modules`, reinstall
2. **Check file paths**: All imports must match actual file locations
3. **Check package.json**: All dependencies listed?
4. **Check console first**: Usually tells you exactly what's wrong!

