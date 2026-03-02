// Product-specific configuration options
// Edit prices and enabled states here - these will persist across deployments

export interface ProductOption {
  id: string;
  type: 'colour' | 'size' | 'cms' | 'subscription';
  name: string;
  value: string;
  label: string;
  price: number;
  enabled: boolean;
}

// Default options for each product
export const productOptionsConfig: Record<string, ProductOption[]> = {
  // Double-Sided Display
  'double-sided-display': [
    // Colour options
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    
    // Size options
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 890, enabled: true },
    
    // CMS Add On options
    { id: 'cms-yes', type: 'cms', name: 'CMS Add On', value: 'yes', label: 'Yes', price: 140, enabled: true },
    { id: 'cms-no', type: 'cms', name: 'CMS Add On', value: 'no', label: 'No', price: 0, enabled: true },
    
    // CMS Subscription options
    { id: 'subscription-na', type: 'subscription', name: 'CMS Subscription', value: 'na', label: 'N/A', price: 0, enabled: true },
    { id: 'subscription-1year', type: 'subscription', name: 'CMS Subscription', value: '1year', label: '1 Year', price: 100, enabled: true },
    { id: 'subscription-3years', type: 'subscription', name: 'CMS Subscription', value: '3years', label: '3 Years', price: 240, enabled: true },
    { id: 'subscription-unlimited', type: 'subscription', name: 'CMS Subscription', value: 'unlimited', label: 'Unlimited', price: 460, enabled: true },
  ],

  // Single-Sided Display
  'single-sided-display': [
    // Colour options
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    
    // Size options
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 400, enabled: true },
    
    // CMS Add On options
    { id: 'cms-yes', type: 'cms', name: 'CMS Add On', value: 'yes', label: 'Yes', price: 249, enabled: true },
    { id: 'cms-no', type: 'cms', name: 'CMS Add On', value: 'no', label: 'No', price: 0, enabled: true },
    
    // CMS Subscription options
    { id: 'subscription-na', type: 'subscription', name: 'CMS Subscription', value: 'na', label: 'N/A', price: 0, enabled: true },
    { id: 'subscription-1year', type: 'subscription', name: 'CMS Subscription', value: '1year', label: '1 Year', price: 100, enabled: true },
    { id: 'subscription-3years', type: 'subscription', name: 'CMS Subscription', value: '3years', label: '3 Years', price: 240, enabled: true },
    { id: 'subscription-unlimited', type: 'subscription', name: 'CMS Subscription', value: 'unlimited', label: 'Unlimited', price: 460, enabled: true },
  ],

  // Textura Display
  'textura-display': [
    // Colour options
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    
    // Size options
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 600, enabled: true },
    
    // CMS Add On options
    { id: 'cms-yes', type: 'cms', name: 'CMS Add On', value: 'yes', label: 'Yes', price: 349, enabled: true },
    { id: 'cms-no', type: 'cms', name: 'CMS Add On', value: 'no', label: 'No', price: 0, enabled: true },
    
    // CMS Subscription options
    { id: 'subscription-na', type: 'subscription', name: 'CMS Subscription', value: 'na', label: 'N/A', price: 0, enabled: true },
    { id: 'subscription-1year', type: 'subscription', name: 'CMS Subscription', value: '1year', label: '1 Year', price: 100, enabled: true },
    { id: 'subscription-3years', type: 'subscription', name: 'CMS Subscription', value: '3years', label: '3 Years', price: 240, enabled: true },
    { id: 'subscription-unlimited', type: 'subscription', name: 'CMS Subscription', value: 'unlimited', label: 'Unlimited', price: 460, enabled: true },
  ],

  // Textura Home Digital Canvas
  'textura-home-canvas': [
    // Colour options
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    
    // Size options
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 300, enabled: true },
    
    // CMS Add On options
    { id: 'cms-yes', type: 'cms', name: 'CMS Add On', value: 'yes', label: 'Yes', price: 199, enabled: true },
    { id: 'cms-no', type: 'cms', name: 'CMS Add On', value: 'no', label: 'No', price: 0, enabled: true },
    
    // CMS Subscription options
    { id: 'subscription-na', type: 'subscription', name: 'CMS Subscription', value: 'na', label: 'N/A', price: 0, enabled: true },
    { id: 'subscription-1year', type: 'subscription', name: 'CMS Subscription', value: '1year', label: '1 Year', price: 149, enabled: true },
    { id: 'subscription-3years', type: 'subscription', name: 'CMS Subscription', value: '3years', label: '3 Years', price: 399, enabled: true },
    { id: 'subscription-unlimited', type: 'subscription', name: 'CMS Subscription', value: 'unlimited', label: 'Unlimited', price: 799, enabled: true },
  ],

  // Textura Pro Digital Canvas
  'textura-pro-canvas': [
    // Colour options
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    
    // Size options
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 400, enabled: true },
    
    // CMS Add On options
    { id: 'cms-yes', type: 'cms', name: 'CMS Add On', value: 'yes', label: 'Yes', price: 299, enabled: true },
    { id: 'cms-no', type: 'cms', name: 'CMS Add On', value: 'no', label: 'No', price: 0, enabled: true },
    
    // CMS Subscription options
    { id: 'subscription-na', type: 'subscription', name: 'CMS Subscription', value: 'na', label: 'N/A', price: 0, enabled: true },
    { id: 'subscription-1year', type: 'subscription', name: 'CMS Subscription', value: '1year', label: '1 Year', price: 199, enabled: true },
    { id: 'subscription-3years', type: 'subscription', name: 'CMS Subscription', value: '3years', label: '3 Years', price: 549, enabled: true },
    { id: 'subscription-unlimited', type: 'subscription', name: 'CMS Subscription', value: 'unlimited', label: 'Unlimited', price: 999, enabled: true },
  ],
};

// Helper function to get options for a specific product
export function getProductOptions(productId: string): ProductOption[] {
  // Check localStorage first for admin overrides
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`productOptions_${productId}`);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored options:', e);
      }
    }
  }

  // Return static config or default options
  return productOptionsConfig[productId] || getDefaultOptions();
}

// Fallback default options for products not in config
function getDefaultOptions(): ProductOption[] {
  return [
    { id: 'colour-black', type: 'colour', name: 'Colour', value: 'black', label: 'Black', price: 0, enabled: true },
    { id: 'colour-white', type: 'colour', name: 'Colour', value: 'white', label: 'White', price: 0, enabled: true },
    { id: 'size-49', type: 'size', name: 'Size', value: '49', label: '49"', price: 0, enabled: true },
    { id: 'size-55', type: 'size', name: 'Size', value: '55', label: '55"', price: 500, enabled: true },
    { id: 'cms-yes', type: 'cms', name: 'CMS Add On', value: 'yes', label: 'Yes', price: 299, enabled: true },
    { id: 'cms-no', type: 'cms', name: 'CMS Add On', value: 'no', label: 'No', price: 0, enabled: true },
    { id: 'subscription-na', type: 'subscription', name: 'CMS Subscription', value: 'na', label: 'N/A', price: 0, enabled: true },
    { id: 'subscription-1year', type: 'subscription', name: 'CMS Subscription', value: '1year', label: '1 Year', price: 100, enabled: true },
    { id: 'subscription-3years', type: 'subscription', name: 'CMS Subscription', value: '3years', label: '3 Years', price: 240, enabled: true },
    { id: 'subscription-unlimited', type: 'subscription', name: 'CMS Subscription', value: 'unlimited', label: 'Unlimited', price: 460, enabled: true },
  ];
}
