# Images Directory

This directory contains all images used throughout the Vizage Solutions website.

## Hero Images

### Home Page Hero
**Filename:** `hero-times-square.jpg`
**Location:** `public/images/hero-times-square.jpg`
**Description:** Times Square cityscape image
**Position:** `center center`

### Digital Signage Page Hero
**Filename:** `hero-digital-signage.jpg`
**Location:** `public/images/hero-digital-signage.jpg`
**Description:** Reception area with two digital screens on wall
**Position:** `center 40%` - Ensures the two digital screens on the wall are visible and not cropped

## Product Images

All product images use SEO-friendly descriptive naming:

- `double-sided-display.jpg` - Double-Sided Ultra High Brightness Window Display
- `single-sided-display.jpg` - Single-Sided Display (placeholder)
- `slim-wall-mounted-display.jpg` - Slim Wall Mounted Display (placeholder)
- `interactive-touch-display.jpg` - Interactive Touch Display (placeholder)
- `external-mounted-display.jpg` - External Mounted Display (placeholder)
- `premium-interactive-kiosk.jpg` - Premium Interactive Kiosk (placeholder)

## Naming Convention

- Use lowercase with hyphens for SEO optimization
- Use descriptive names that match product IDs
- Format: `product-name-description.jpg`
- Keep file sizes optimized for web (recommended < 500KB)

## Image Specifications

### Hero Images
- **Recommended size:** 1920x1080 or larger
- **Format:** JPG or PNG
- **Effects applied:** 40% brightness, 110% contrast, dark gradient overlay, blue tint

### Product Images
- **Recommended size:** 1200x1200px (square aspect ratio)
- **Format:** JPG or PNG
- **Background:** White or transparent
- **Optimize for web:** < 500KB file size

## Current Effects Applied

Hero images are displayed with:
- 40% brightness (darkened)
- 110% contrast (slightly enhanced)
- Dark gradient overlay
- Blue tint overlay

This ensures white text stands out clearly against the background.

## To Change Effects

Edit the respective page file and modify the filter values:
```javascript
filter: 'brightness(0.4) contrast(1.1)'
```

Adjust these values:
- `brightness(0-1)` - Lower = darker
- `contrast(0.5-2)` - Higher = more contrast
