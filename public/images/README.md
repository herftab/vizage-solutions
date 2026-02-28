# Hero Images Setup

## Required Images

### Home Page Hero
**Filename:** `hero-times-square.jpg`
**Location:** `public/images/hero-times-square.jpg`
**Description:** Times Square cityscape image

### Digital Signage Page Hero
**Filename:** `hero-digital-signage.jpg`
**Location:** `public/images/hero-digital-signage.jpg`
**Description:** Reception area with two digital screens on wall
**Important:** Image is positioned at `center 40%` to ensure the two digital screens on the wall are visible and not cropped

## Image Specifications

- **Recommended size:** 1920x1080 or larger
- **Format:** JPG or PNG
- **Location:** `public/images/`

## Current Effects Applied

Both images are displayed with:
- 40% brightness (darkened)
- 110% contrast (slightly enhanced)
- Dark gradient overlay
- Blue tint overlay

This ensures white text stands out clearly against the background.

## To Change the Effect

Edit the respective page file and modify the filter values:
```javascript
filter: 'brightness(0.4) contrast(1.1)'
```

Adjust these values:
- `brightness(0-1)` - Lower = darker
- `contrast(0.5-2)` - Higher = more contrast

## Background Position

### Home Page (Times Square)
- `backgroundPosition: 'center center'` - Default centered

### Digital Signage Page (Reception)
- `backgroundPosition: 'center 40%'` - Positioned to show the digital screens on the wall without cropping them
- This ensures the two screens are visible on both desktop and mobile views

