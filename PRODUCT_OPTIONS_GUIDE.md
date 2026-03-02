# Product Options Configuration Guide

## Overview
Product configuration options (colour, size, CMS add-ons, subscriptions) are now managed through a static configuration file that persists across deployments.

## How It Works

### Static Configuration (Persists Across Deployments)
Default prices and options are defined in `src/lib/product-options.ts`. This file is committed to your repository and will always be deployed with your code.

### Admin Overrides (Temporary)
The admin console allows you to override prices temporarily using localStorage. These overrides:
- Only exist in your browser
- Will be lost when you clear browser data
- Are useful for testing different prices before committing them

## Managing Product Options

### Method 1: Edit Static Configuration (Recommended)
For permanent price changes that persist across deployments:

1. Open `src/lib/product-options.ts`
2. Find the product you want to edit (e.g., `'double-sided-display'`)
3. Update the prices or enabled states
4. Commit and push changes
5. AWS Amplify will deploy with your new prices

Example:
```typescript
'double-sided-display': [
  // Change the 55" size price from 500 to 600
  { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 600, enabled: true },
  
  // Disable the white colour option
  { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: false },
]
```

### Method 2: Admin Console (Temporary Testing)
For temporary price changes to test before committing:

1. Go to `/admin/products/[product-id]/options`
2. Edit prices or toggle options
3. Changes are saved to localStorage
4. Test on the product shop page
5. If satisfied, update `src/lib/product-options.ts` with the same values
6. Commit and push

## Adding a New Product

To add configuration options for a new product:

1. Open `src/lib/product-options.ts`
2. Add a new entry to `productOptionsConfig`:

```typescript
export const productOptionsConfig: Record<string, ProductOption[]> = {
  // ... existing products ...
  
  'your-new-product-id': [
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 500, enabled: true },
    // ... add more options as needed
  ],
};
```

## Option Types

### Colour Options
- `type: 'colour'`
- Typically no additional cost (price: 0)
- Common values: 'black', 'white'

### Size Options
- `type: 'size'`
- Price represents the additional cost for that size
- Common values: '49', '55'

### CMS Add On
- `type: 'cms'`
- Values: 'yes' or 'no'
- 'no' should have price: 0

### CMS Subscription
- `type: 'subscription'`
- Values: 'na', '1year', '3years', 'unlimited'
- 'na' should have price: 0
- Only shown when CMS Add On is 'yes'

## Disabling Options

To hide an option from the product page, set `enabled: false`:

```typescript
{ id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: false },
```

This option will not appear on the product configuration page.

## Best Practices

1. **Always commit price changes** - Don't rely on localStorage for production pricing
2. **Test in admin first** - Use the admin console to test prices before committing
3. **Keep prices consistent** - Ensure prices make sense across all products
4. **Document changes** - Use clear commit messages when updating prices
5. **Backup before major changes** - Keep a copy of the old configuration

## Troubleshooting

### Prices reset after deployment
- This means you're using localStorage overrides instead of static configuration
- Solution: Update `src/lib/product-options.ts` and commit the changes

### Admin changes not showing
- Clear your browser's localStorage
- Refresh the page to load static configuration

### Product has no options
- Check that the product ID in `productOptionsConfig` matches exactly
- Product IDs are case-sensitive

## File Locations

- Static configuration: `src/lib/product-options.ts`
- Shop page (uses options): `src/app/products/[id]/shop/page.tsx`
- Admin page (edits options): `src/app/admin/products/[id]/options/page.tsx`
