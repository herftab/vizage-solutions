# Hero Image Setup

## Required Image

Please save the Times Square image you provided as:
`hero-times-square.jpg`

Place it in this directory: `public/images/`

## Image Specifications

- **Filename:** `hero-times-square.jpg`
- **Recommended size:** 1920x1080 or larger
- **Format:** JPG or PNG
- **Location:** `public/images/hero-times-square.jpg`

## Current Effect Applied

The image will be displayed with:
- 60% grayscale (desaturated)
- 40% brightness (darkened)
- 110% contrast (slightly enhanced)
- Dark gradient overlay
- Blue tint overlay

This ensures the white text stands out clearly against the background.

## To Change the Effect

Edit `src/app/page.tsx` and modify the filter values:
```javascript
filter: 'grayscale(60%) brightness(0.4) contrast(1.1)'
```

Adjust these values:
- `grayscale(0-100%)` - 0% = full color, 100% = black & white
- `brightness(0-1)` - Lower = darker
- `contrast(0.5-2)` - Higher = more contrast
