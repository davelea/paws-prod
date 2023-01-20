<script>
  import { info } from '../stores.js';
  import Envelope from 'virtual:icons/fa/envelope';
  import Phone from 'virtual:icons/fa/phone';

  import Facebook from 'virtual:icons/fa-brands/facebook';
  import Instagram from 'virtual:icons/fa-brands/instagram';
  import Tiktok from 'virtual:icons/fa-brands/tiktok';
  import Youtube from 'virtual:icons/fa-brands/youtube';
  import Google from 'virtual:icons/fa-brands/google';
</script>

<section class="bg-inherit text-black text-md sm:text-lg">
  <ul class="list-none block md:flex md:flex-wrap md:justify-evenly md:space-x-4">
    <li>
      <Envelope class="text-sm inline mr-1" />
      <a href="mailto:{$info.email}">
        {$info.email}
      </a>
    </li>

    <li>
      <Phone class="text-sm inline mr-1" />
      <a href="tel:{$info.phone}"> {$info.phone}</a>
    </li>

    <li class="hidden md:block">
      <div class="space-x-4">
        <a href={$info.socials.facebook}><Facebook class="text-sm inline" /></a>
        <a href={$info.socials.instagram}><Instagram class="text-sm inline" /></a>
        <a href={$info.socials.tiktok}><Tiktok class="text-sm inline" /></a>
        <a href={$info.socials.youtube}><Youtube class="text-sm inline" /></a>
        <a href={$info.socials.google}><Google class="text-sm inline" /></a>
      </div>
    </li>
  </ul>
</section>
