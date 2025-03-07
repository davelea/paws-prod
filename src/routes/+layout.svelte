<script>
  import '../output.css';
  import { page } from '$app/stores';
  import Banner from '$lib/banner.svelte';
  import { info } from '../stores.js';

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

  import Envelope from 'virtual:icons/fa/envelope';
  import Phone from 'virtual:icons/fa/phone';
  import MapMarker from 'virtual:icons/fa/map-marker';

  import Facebook from 'virtual:icons/fa-brands/facebook';
  import Instagram from 'virtual:icons/fa-brands/instagram';
  import Tiktok from 'virtual:icons/fa-brands/tiktok';
  import Youtube from 'virtual:icons/fa-brands/youtube';
  import Google from 'virtual:icons/fa-brands/google';

  $: activeUrl = $page.url.pathname;
</script>

<svelte:head>
  <title>Paws Around Motown</title>
  <meta
    name="description"
    content="Paws Around Motown - Professional Dog Walking and Pet Services around Metro Detroit"
  />
  <meta name="author" content="Becky Lea" />
  <meta
    name="keywords"
    content="Dogs,Walking,Metro Detroit,Puppies,Dog Walkers,Dog Walking,Berkley,Royal Oak,Ferndale,Huntington Woods,Pleasant Ridge,Oak Park, West Bloomfield,Waterford,Lathrup Village,Franklin,Beverly Hills,Detroit"
  />
  <meta name="google-site-verification" content="4MW2Yc1iry7pSGIfxv86ruYNMnBaBHNztJS2Q7Q7WDE" />

  <link rel="stylesheet" href="/styles/paws-styles.css" />

  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
  <link rel="manifest" href="/favicon/site.webmanifest" />
  <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
  <link rel="shortcut icon" href="/favicon/favicon.ico" />
  <meta name="msapplication-TileColor" content="#ffc40d" />
  <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
  <meta name="theme-color" content="#ffffff" />

  <script src="https://kit.fontawesome.com/d2e9fa292e.js" crossorigin="anonymous"></script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60585727-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-60585727-1');
  </script>
</svelte:head>

<div class="max-w-screen-2xl mx-auto">
  <div class="bg-yellow-500">
    <div class="px-4 py-2 md:px-0 md:py-0">
      <Banner />
    </div>
  </div>

  <Navbar fluid="true" rounded color="navbarUL">
    <NavBrand href="/">
      <img
        src="/images/logos/pam-logo_horizontal_no-text.png"
        class="me-3 h-12"
        alt="Paws Around Motown Logo"
      />
    </NavBrand>
    <NavHamburger />
    <NavUl
      {activeUrl}
      ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-base md:font-medium"
      activeClass="text-white bg-red-700 md:bg-transparent md:text-red-700"
    >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/dog-training">Dog Training</NavLi>
      <NavLi href="/dog-walking">Dog Walking</NavLi>
      <NavLi href="/blog">Blog</NavLi>
      <NavLi href="/faq">FAQ</NavLi>
      <NavLi href="https://www.timetopet.com/portal/pawsaroundmotown">Existing Client Login</NavLi>
    </NavUl>
  </Navbar>

  <slot />

  <div class="flex justify-center" style="background-color:#252F3F">
    <footer
      class="grid grid-cols-1 py-16 px-8 gap-y-8 text-gray-200 text-opacity-75 2xl:container xl:px-16"
    >
      <section
        class="grid grid-cols-2 gap-y-8 pb-8 text-lg border-b border-gray-500 border-opacity-50 md:grid-cols-4"
      >
        <div>
          <h3 class="text-base uppercase tracking-wider">Company</h3>
          <ul class="mt-4 space-y-4">
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-base uppercase tracking-wider">Support</h3>
          <ul class="mt-4 space-y-4">
            <li><a href="/faq">Frequent Questions</a></li>
            <li><a href="https://www.timetopet.com/portal/pawsaroundmotown">Client Login</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-base uppercase tracking-wider">Dog Training</h3>
          <ul class="mt-4 space-y-4">
            <li><a href="/dog-training#Dog-Training-at-our-Center">Group Sessions </a></li>
            <li><a href="/dog-training#Training-for-Pet-Parents">First Aid and CPR Classes</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-base uppercase tracking-wider">Dog Walking</h3>
          <ul class="mt-4 space-y-4">
            <li><a href="/dog-walking">Dog Walking </a></li>
            <li><a href="/dog-walking#pooper-scooper">Yard Cleanup </a></li>
            <li><a href="/dog-walking#pet-sitting">Pet Sitting </a></li>
            <li><a href="/dog-walking#small-dog-yappy-hour">Dog Socials</a></li>
          </ul>
        </div>
      </section>
      <section
        class="grid grid-cols-1 gap-y-8 pb-8 text-lg border-b border-gray-500 border-opacity-50 md:grid-cols-2"
      >
        <div>
          <h3 class="text-opacity-75 text-base uppercase tracking-wider">
            Office &amp; Training Location
          </h3>
          <div class="flex mt-4">
            <MapMarker class="inline text-sm text-red-500 mr-1" />
            <address>
              <a
                href="https://www.google.com/maps/place/Paws+Around+Motown/@42.5469868,-83.2148034,15z/data=!4m6!3m5!1s0x8824c8983d8552bb:0x7472c4eee8976dcc!8m2!3d42.5469868!4d-83.2148034!16s%2Fg%2F11bv2gz9j0?entry=ttu"
                >135 N. Old Woodward Ave.<br />Suite 200<br />Birmingham, MI 48009</a
              >
            </address>
          </div>
        </div>
        <div>
          <h3 class="text-opacity-75 text-base uppercase tracking-wider">Contact Information</h3>
          <div class="flex mt-4">
            <a href="tel:248-729-6772">
              <Phone class="inline text-sm text-purple-500 mr-1" />
              248-729-6772</a
            >
          </div>
          <div class="flex">
            <a href="mailto:support@pawsaroundmotown.com">
              <Envelope class="inline text-sm text-pink-500 mr-1" />
              support@pawsaroundmotown.com
            </a>
          </div>
        </div>
      </section>
      <section class="grid grid-cols-1 gap-y-8 text-lg md:grid-cols-2">
        <div class="mr-8">
          <p>&copy; 2014 - 2022 Paws Around Motown LLC. All rights reserved.</p>
        </div>
        <div class="text-2xl lg:text-4xl space-x-12">
          <a href={$info.socials.facebook}><Facebook class="inline" /></a>
          <a href={$info.socials.instagram}><Instagram class="inline" /></a>
          <a href={$info.socials.tiktok}><Tiktok class="inline" /></a>
          <a href={$info.socials.youtube}><Youtube class="inline" /></a>
          <a href={$info.socials.google}><Google class="inline" /></a>
        </div>
      </section>
    </footer>
  </div>
</div>
