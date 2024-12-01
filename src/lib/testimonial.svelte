<script>
  import {
    Section,
    Quotes,
    Testimonial,
    TestimonialCard,
    TestimonialCardItem
  } from 'flowbite-svelte-blocks';
  import MdiFaceWoman from '~icons/mdi/face-woman';
</script>

<Section name="testimonial" sectionClass="override">
  <TestimonialCard>
    <svelte:fragment slot="header">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Testimonials
      </h2>
      <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
        We're never prouder than when our happy customers trust us enough to refer our services to
        their friends and family. Here's what some of them are saying about us.
      </p>
    </svelte:fragment>
  </TestimonialCard>
  <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
    <TestimonialCardItem>
      <svelte:fragment slot="h3">This is an amazing dog walking service</svelte:fragment>
      <p class="my-4">
        "They treat my dog as if he was their own. They do everything from dog walking to pet taxi
        to overnight stays. When my husband and I leave town, we know our furbaby is in the best
        hands. Every member of the team is phenomenal. They consistently go above and beyond
        expectations. It's rare to find people, let alone companies who you can rely on these days.
        The best of the best! ❤️"
      </p>
      <svelte:fragment slot="caption">
        <MdiFaceWoman style="font-size:1em"></MdiFaceWoman>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Natasha</div>
          <!-- <div class="text-sm font-light text-gray-500 dark:text-gray-400">Title/Location</div> -->
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">You and your pets will be in good hands with Paws</svelte:fragment>
      <p class="my-4">
        I am so grateful to Paws Around Motown! They have continued to take excellent care of my
        5-year-old Husky. You and your pets will be in good hands with this company. Everyone I have
        ever spoken to here is kind and accommodating, making sure our dog sitting/walking needs are
        met and going above and beyond with their level of care. I love that I get the picture
        updates and can see when they arrive at my apartment.
      </p>
      <p class="my-4">Thank you for always taking excellent care of Mia!"</p>
      <svelte:fragment slot="caption">
        <MdiFaceWoman style="font-size:1em"></MdiFaceWoman>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Kelly</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Paws took care of my dwarf rabbit</svelte:fragment>
      <p class="my-4">
        "They did an awesome job caring for my dwarf rabbit Pooki while we were out of town. Pooki
        is very social and they did a great job keeping her entertained, fed, and with a clean
        litter box. Thanks for taking care of her!"
      </p>
      <svelte:fragment slot="caption">
        <MdiFaceWoman style="font-size:1em"></MdiFaceWoman>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Ivana</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Paws visits are our pet's favorite part of the day</svelte:fragment
      >
      <p class="my-4">
        "Very happy with Paws! Over the past 3 years Becky and staff have provided excellent service
        in training/walking our dog Brady. They're visits are his favorite part of the day. Would
        highly recommend them to anyone in the area that needs behavioral training or dog walking
        for their pets!"
      </p>
      <svelte:fragment slot="caption">
        <MdiFaceWoman style="font-size:1em"></MdiFaceWoman>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Sharon</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Trustworthy and capable dog walkers and trainers</svelte:fragment>
      <p class="my-4">
        "I'd highly recommend Becky, Megan, and Paws Around Motown to anyone asking me for
        trustworthy, capable dog walkers and trainers.
      </p>
      <p class="my-4">
        My dog Prince is a young rescue with behavioral issues from being abused in his prior
        "home." As a result, I was having serious problems helping him adapt to his new life and the
        people in it. Thanks particularly to Becky's patient training of both Prince and me, life is
        much improved for us both!"
      </p>
      <svelte:fragment slot="caption">
        <MdiFaceWoman style="font-size:1em"></MdiFaceWoman>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Margo</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Training with guidance and support</svelte:fragment>
      <p class="my-4">
        "I have been in home training with my dog Winnie for several weeks and I am so happy with
        the improvements we have made. Winnie is a rescue and she has many behavioral issues but
        with the careful, patient training we are seeing so many positive changes! The staff have
        been very encouraging and give just the right amount of guidance and support to help me to
        continue to reinforce what she has learned."
      </p>
      <p class="my-4">
        I also had them provide in home care for Winnie while I was away recently. What a comforting
        experience. Winnie loves her trainer Becky and the home care went smoothly. The daily
        check-ins with photos and logs were fantastic! I am a business owner and as such, I really
        appreciate this level of caring and customer service. Thoroughly recommend Paws Around
        Motown!""
      </p>
      <svelte:fragment slot="caption">
        <MdiFaceWoman style="font-size:1em"></MdiFaceWoman>
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Diane</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
  </div>
</Section>
