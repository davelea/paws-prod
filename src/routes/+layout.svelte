<script>
  import '../app.css';
  import Banner from '$lib/banner.svelte';
  import { info } from '../stores.js';

  import Envelope from 'virtual:icons/fa/envelope';
  import Phone from 'virtual:icons/fa/phone';
  import MapMarker from 'virtual:icons/fa/map-marker';

  import Facebook from 'virtual:icons/fa-brands/facebook';
  import Instagram from 'virtual:icons/fa-brands/instagram';
  import Tiktok from 'virtual:icons/fa-brands/tiktok';
  import Youtube from 'virtual:icons/fa-brands/youtube';
  import Google from 'virtual:icons/fa-brands/google';
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
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="/styles/styles.css" />
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
  <script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
    integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
    integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
    crossorigin="anonymous"
  ></script>

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

<div style="background-color: #e5d315">
  <div class="container mx-auto">
    <Banner />
  </div>
</div>

<header>
  <nav class="navbar navbar-expand-md navbar-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><img
          class="paws-header__logo"
          src="/images/pawsaroundmotown-horizontal-crop.png"
          alt="Paws Around Motown"
        /></a
      ><button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"><span class="navbar-toggler-icon" /></button
      >
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="/dog-training">Dog Training</a></li>
          <li class="nav-item"><a class="nav-link" href="/dog-walking">Dog Walking</a></li>
          <!-- <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li> -->
          <li class="nav-item"><a class="nav-link" href="/faq">FAQ</a></li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.timetopet.com/portal/pawsaroundmotown"
              >Existing Client Login</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

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
          <!-- <li><a href="/blog">Blog</a></li> -->
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
