import { readable } from 'svelte/store';

export const info = readable({
  phone: '248-729-6772',
  email: 'support@pawsaroundmotown.com',
  address: { street: '135 N. Old Woodward Ave.', streetTwo: 'Suite 200', city: 'Birnmingham', state: 'MI', postalCode: '48009' },
  socials: {
    facebook: 'https://www.facebook.com/pawsaroundmotown',
    instagram: 'https://www.instagram.com/pawsaroundmotown',
    tiktok: 'https://www.tiktok.com/@paws_around_motown',
    twitter: 'https://www.twitter.com/motownpaws',
    youtube: 'https://www.youtube.com/channel/UCNCxWq6BOBioNGt93KJhDTg',
    google: 'https://goo.gl/maps/9ac8XNrH7NJ2'
  }
});
