// Facebook Pixel Event Tracking Utilities

declare global {
  interface Window {
    fbq: any
  }
}

export const FB_PIXEL_ID = '680515578431305'

// Track page view
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// Track when someone views a product
export const trackViewContent = (productName: string, productId: string, value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: productName,
      content_ids: [productId],
      content_type: 'product',
      value: value,
      currency: 'MAD'
    })
  }
}

// Track when someone clicks "Commander" button
export const trackInitiateCheckout = (productName: string, productId: string, value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: productName,
      content_ids: [productId],
      content_type: 'product',
      value: value,
      currency: 'MAD'
    })
  }
}

// Track when someone submits the contact form (Lead)
export const trackLead = (productName: string, productId: string, value: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: productName,
      content_ids: [productId],
      content_category: 'LED Projector',
      value: value,
      currency: 'MAD'
    })
  }
}

// Track custom events
export const trackCustomEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data)
  }
}
