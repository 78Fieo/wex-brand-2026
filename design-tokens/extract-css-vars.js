#!/usr/bin/env node
/**
 * extract-css-vars.js
 * 
 * Parses CSS files for custom properties (--*) and exports them as JSON.
 * Usage: node design-tokens/extract-css-vars.js
 * 
 * Output: design-tokens/extracted/css-vars-extracted.json
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CSS_FILES = [
  'wex-design-system-2026/src/themes/wex-prime-theme.css',
  'wex-design-system-2026/src/index.css'
];

const OUTPUT_FILE = 'design-tokens/extracted/css-vars-extracted.json';

/**
 * Convert hex to HSL string
 */
function hexToHsl(hex) {
  if (!hex || !hex.startsWith('#')) return null;
  
  let r = 0, g = 0, b = 0;
  
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else {
    return null;
  }
  
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  
  return `hsl(${h} ${s}% ${l}%)`;
}

/**
 * Parse CSS file and extract custom properties
 */
function extractCssVars(cssContent, filename) {
  const vars = {};
  const lines = cssContent.split('\n');
  
  // Match CSS custom properties
  const varRegex = /^\s*(--[\w-]+)\s*:\s*(.+?)\s*;?\s*$/;
  
  let currentSelector = ':root';
  let lineNumber = 0;
  
  for (const line of lines) {
    lineNumber++;
    
    // Track selector context
    if (line.includes(':root')) {
      currentSelector = ':root';
    } else if (line.includes('.dark')) {
      currentSelector = '.dark';
    } else if (line.includes('[data-theme')) {
      const match = line.match(/\[data-theme=["']?(\w+)["']?\]/);
      if (match) {
        currentSelector = `[data-theme="${match[1]}"]`;
      }
    }
    
    const match = line.match(varRegex);
    if (match) {
      const [, varName, varValue] = match;
      const cleanValue = varValue.replace(/;$/, '').trim();
      
      if (!vars[currentSelector]) {
        vars[currentSelector] = {};
      }
      
      const entry = {
        value: cleanValue,
        sourceFile: filename,
        sourceLine: lineNumber
      };
      
      // Add HSL conversion for hex colors
      if (cleanValue.match(/^#[0-9A-Fa-f]{3,6}$/)) {
        entry.hsl = hexToHsl(cleanValue);
      }
      
      vars[currentSelector][varName] = entry;
    }
  }
  
  return vars;
}

/**
 * Categorize variables by prefix
 */
function categorizeVars(vars) {
  const categories = {
    primary: {},
    surface: {},
    text: {},
    border: {},
    shadow: {},
    radius: {},
    accent: {},
    other: {}
  };
  
  for (const [selector, selectorVars] of Object.entries(vars)) {
    for (const [varName, varData] of Object.entries(selectorVars)) {
      let category = 'other';
      
      if (varName.includes('primary')) category = 'primary';
      else if (varName.includes('surface')) category = 'surface';
      else if (varName.includes('text')) category = 'text';
      else if (varName.includes('border') || varName.includes('divider')) category = 'border';
      else if (varName.includes('shadow')) category = 'shadow';
      else if (varName.includes('radius')) category = 'radius';
      else if (varName.includes('accent') || varName.includes('success') || varName.includes('warning') || varName.includes('error') || varName.includes('info')) category = 'accent';
      
      if (!categories[category][selector]) {
        categories[category][selector] = {};
      }
      categories[category][selector][varName] = varData;
    }
  }
  
  return categories;
}

// Main execution
function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const allVars = {};
  const sources = [];
  
  for (const cssFile of CSS_FILES) {
    const fullPath = path.join(projectRoot, cssFile);
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`Warning: ${cssFile} not found, skipping...`);
      continue;
    }
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    const vars = extractCssVars(content, cssFile);
    
    // Merge vars
    for (const [selector, selectorVars] of Object.entries(vars)) {
      if (!allVars[selector]) {
        allVars[selector] = {};
      }
      Object.assign(allVars[selector], selectorVars);
    }
    
    sources.push(cssFile);
    console.log(`Extracted variables from: ${cssFile}`);
  }
  
  const categorized = categorizeVars(allVars);
  
  const output = {
    meta: {
      extractedAt: new Date().toISOString(),
      sources: sources,
      totalVariables: Object.values(allVars).reduce((sum, s) => sum + Object.keys(s).length, 0)
    },
    raw: allVars,
    categorized: categorized
  };
  
  // Ensure output directory exists
  const outputPath = path.join(projectRoot, OUTPUT_FILE);
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`\nWritten to: ${OUTPUT_FILE}`);
  console.log(`Total variables extracted: ${output.meta.totalVariables}`);
}

main();

