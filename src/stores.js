import { readable } from 'svelte/store';

export const info = readable({
  phone: '248-729-6772',
  email: 'support@pawsaroundmotown.com',
  address: { street: '834 W. 14 Mile Rd.', city: 'Clawson', state: 'MI', postalCode: '48017' },
  socials: {
    facebook: 'https://www.facebook.com/pawsaroundmotown',
    instagram: 'https://www.instagram.com/pawsaroundmotown',
    twitter: 'https://www.twitter.com/motownpaws',
    google: 'https://goo.gl/maps/9ac8XNrH7NJ2'
  }
});
