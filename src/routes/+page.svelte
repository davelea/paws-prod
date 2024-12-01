<script>
  import { Section, HeroHeader } from 'flowbite-svelte-blocks';
  import { FeatureDefault, FeatureItem } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Testimonial from '$lib/testimonial.svelte';
</script>

<Section name="heroVisual" sectionClass="relative lg:-mt-8" class="mr-auto">
  <div class="mr-auto place-self-center lg:col-span-7">
    <div class="hidden lg:block max-w-xs mx-auto">
      <img src="/images/logos/pam-logo_curve_no-text.png" alt="Paws Around Motown Logo" />
    </div>

    <HeroHeader
      h1Class="lg:mx-auto w-fit max-w-2xl mb-6 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none"
      h2Class="lg: max-auto w-fit mb-6 text-2xl tracking-tight leading-tight md:text-3xl"
      pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
    >
      <svelte:fragment slot="h1">Paws Around Motown</svelte:fragment>
      <svelte:fragment slot="h2"
        >Oakland County's Dog Walking, Dog Training, and Pet&nbsp;Sitting Professionals</svelte:fragment
      >
      <svelte:fragment slot="paragraph"
        >Welcome to the only triple-certified and award-winning pet care company in Oakland County,
        Michigan. Because your best friend deserves the best – enjoy peace of mind knowing they're
        in the paws of Oakland County's best.</svelte:fragment
      >
      <a href="https://www.timetopet.com/portal/pawsaroundmotown/create-account"
        ><Button size="xl" color="red" class="inline-flex items-center justify-center mr-3"
          >Book Now<ArrowRightOutline size="md" class="ml-2 -mr-1" /></Button
        >
      </a>
    </HeroHeader>
  </div>
  <div class="mt-8 lg:mt-0 lg:col-span-5 flex">
    <img
      src="/images/hero/hero_dog-walking-park.jpg"
      class="rounded-xl w-full h-auto"
      alt="Dog Walking"
    />
  </div>
</Section>

<Section name="feature" sectionClass="relative bg-yellow-100">
  <HeroHeader
    class="max-w-screen-md mb-8 lg:mb-16"
    h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
    pClass="text-gray-500 sm:text-xl dark:text-gray-400"
  >
    <svelte:fragment slot="h2">Offering pet services for people like you</svelte:fragment>
    <svelte:fragment slot="paragraph"
      >At Paws Around Motown we offer a wide array of pet services to improve the quality of your
      pet's life and reduce the stress of yours.</svelte:fragment
    >
  </HeroHeader>
  <FeatureDefault>
    <FeatureItem divClass="override" pClass="text-gray-600">
      <svelte:fragment slot="icon">
        <img
          class="h-24 w-auto -ml-2 -mt-2"
          src="/images/illustrations/woman-walking-dog.png"
          alt=""
        />
      </svelte:fragment>
      <svelte:fragment slot="h3">Dog Walking</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Tail-Waggin' Walks: Classic, Sniffari, or Distance - we've got the perfect personalized
        walking adventure for your pup! 🐶</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem divClass="override" pClass="text-gray-600">
      <svelte:fragment slot="icon"
        ><img
          class="h-24 w-auto -ml-2 -mt-2"
          src="/images/illustrations/woman-dog-trail-hike.png"
          alt=""
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Adventures & Excursions</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Unleash your pup's adventure with Paws Around Motown's Tail-Waggin' Tours and Paw-some Park
        Excursions! 🌿 Explore Oakland County's best spots today! 🐶🎉</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem divClass="override" pClass="text-gray-600">
      <svelte:fragment slot="icon"
        ><img
          class="h-24 w-auto -ml-2 -mt-2"
          src="/images/illustrations/woman-training-dog.png"
          alt=""
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Dog Training</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Unleash your pup's potential with Paws Around Motown's personalized training programs! From
        Puppy Preschool to Board and Train programs, we've got you covered.</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem divClass="override" pClass="text-gray-600">
      <svelte:fragment slot="icon"
        ><img
          class="h-24 w-auto -ml-2 -mt-2"
          src="/images/illustrations/woman-snuggling-cat.png"
          alt=""
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Overnight Pet Sitting</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >VIP Slumber Parties & Vacation Pampering: Exclusive overnight pet sitting for our devoted
        weekly clients! 🐶🐱</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem divClass="override" pClass="text-gray-600">
      <svelte:fragment slot="icon"
        ><img
          class="h-24 w-auto -ml-2 -mt-2"
          src="/images/illustrations/woman-dog-selfie.png"
          alt=""
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Cats and Small Pets</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Purr-fect Pampering & Whisker Wonders: From classic cuddles to interactive play, we've got
        your cat's perfect visit covered! 😻</svelte:fragment
      >
    </FeatureItem>
    <FeatureItem divClass="override" pClass="text-gray-600">
      <svelte:fragment slot="icon"
        ><img
          class="h-24 w-auto -ml-2 -mt-2"
          src="/images/illustrations/woman-question.png"
          alt=""
        /></svelte:fragment
      >
      <svelte:fragment slot="h3">Other Services</svelte:fragment>
      <svelte:fragment slot="paragraph"
        >Pet Taxi, Yard Cleanup, & More: We've got all your pet-related needs covered! 🚕💨 Discover
        our additional services today! 🌟</svelte:fragment
      >
    </FeatureItem>
  </FeatureDefault>
</Section>

<Testimonial></Testimonial>
