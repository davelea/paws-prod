<script>
  import { info } from '../stores.js';
</script>

<section class="bg-inherit text-black text-md sm:text-lg">
  <ul class="list-none block md:flex md:flex-wrap md:justify-evenly md:space-x-4">
    <li>
      <i class="far fa-envelope mr-1 py-1" /><a href="mailto:{$info.email}">
        {$info.email}
      </a>
    </li>

    <li>
      <i class="fas fa-phone mr-1 py-1" /><a href="tel:{$info.phone}"> {$info.phone}</a>
    </li>

    <li class="hidden md:block">
      <div class="space-x-4">
        <a href={$info.socials.facebook}><i class="fab fa-facebook" /></a>
        <a href={$info.socials.instagram}><i class="fab fa-instagram" /></a>
        <a href={$info.socials.tiktok}><i class="fab fa-tiktok" /></a>
        <a href={$info.socials.youtube}><i class="fab fa-youtube" /></a>
        <a href={$info.socials.google}><i class="fab fa-google" /></a>
      </div>
    </li>
  </ul>
</section>
