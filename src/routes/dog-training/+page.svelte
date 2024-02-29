<script>
  import Building from 'virtual:icons/fa/building';
  import Dog from 'virtual:icons/fa-solid/dog';
  import ServiceSection from '$lib/serviceSection.svelte';
  import HorizontalCard from '$lib/horizontalCard.svelte';
  import Container from '$lib/container.svelte';

  const bookNowUrl = 'https://www.timetopet.com/portal/pawsaroundmotown/create-account';
</script>

<Container>
  <section class="text-blueGray-700">
    <div class="flex flex-col items-center pt-4 md:flex-row">
      <div
        class="flex flex-col items-start mb-4 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0"
      >
        <h1 class="mb-8 text-4xl font-black tracking-tighter text-black md:text-5xl title-font">
          Accredited and Award Winning Dog Training
        </h1>
        <div class="flex flex-col justify-center lg:flex-row gap-x-2">
          <p class="flex mb-2 text-blueGray-600">
            <span
              class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
            >
              <Building class="inline text-sm text-blue-500" />
            </span>Office Hours: Monday - Friday: 10am - 6pm
          </p>
          <p class="flex mb-2 text-blueGray-600">
            <span
              class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
            >
              <Dog class="inline text-sm text-blue-500" />
            </span><span
              >Training Hours: Vary based on class schedules and trainer availability
            </span>
          </p>
        </div>
        <div class="text-base leading-relaxed text-left text-blueGray-600">
          <p class="pt-2">
            Transform your furry friend into a well-behaved companion with our expert dog training
            services. Our dedicated trainers are invested in your success and committed to
            strengthening the bond between you and your pet. Through a combination of treats, toys,
            and praise, we aim to create a harmonious home for every pet and parent.
          </p>
          <p class="pt-2">
            Enjoy personalized attention in our small-group classes, designed for a more
            individualized training experience. Our comprehensive curriculum covers all aspects of
            dog behavior and obedience, ensuring a well-rounded education for you and your pet. Join
            us and watch your furry friend thrive!
          </p>
        </div>
      </div>
      <div class="max-w-sm lg:max-w-md">
        <img
          class="object-cover object-center rounded-lg"
          alt=""
          src="/images/abc-certified-dog-trainer.png"
        />
      </div>
    </div>
  </section>
</Container>

<Container backgroundColor="var(--brand-background_light)">
  <section class="py-8">
    <h2 class="text-3xl pb-4">Private Training Classes</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <HorizontalCard
        heading="Puppy Preschool"
        description="Bringing home a new furry member of the family? Our Puppy Preschool Private Class will teach you everything you need to know to set up your new puppy for success."
        imageSrc="/images/illustrations/woman-dog-desk.png"
        age="2-5 months"
        link={bookNowUrl}
      />
      <HorizontalCard
        heading="K9 Kindergarten"
        description="Whether continuing your education from Puppy Preschool or bringing home a new puppy, our three week K9 Kindergarten private class teaches you and your new best friend the basics like stay, down, loose leash walking, and more!"
        imageSrc="/images/illustrations/woman-dog-selfie.png"
        age="5-12 months"
        link={bookNowUrl}
      />
      <HorizontalCard
        heading="Sit, Stay, Succeed!"
        description="Whether continuing your education from K9 Kindergarten private class or bringing home a new best friend, our three week Sit, Stay, Succeed! private class teaches you how to train your new best friend the essential manners needed to live a harmonious life together."
        imageSrc="/images/illustrations/woman-training-dog.png"
        age="12+ months"
        link={bookNowUrl}
      />
      <HorizontalCard
        heading="Top Dog Academy"
        description="Everything you need to work with your pup in the face of real life distractions with real life dogs, while learning some new and fun skills."
        imageSrc="/images/illustrations/woman-walking-dog.png"
        age="12+ months"
        link={bookNowUrl}
      />
    </div>

    <div class="pt-4 space-y-4">
      <h3 class="text-2xl">All classes include:</h3>

      <ul class="list-disc list-inside ml-4">
        <li>Three to four weeks of training on a set schedule</li>
        <li>We teach you how to work through distractions and real life situations</li>
        <li>Weekly practice guides</li>
      </ul>
    </div>
  </section>
</Container>

<Container>
  <div class="py-8">
    <div class="pricing-container">
      <ServiceSection
        heading="Private Training"
        price="Starting at $900"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Private%20Training"
        cta="Register Now"
      >
        <p>
          Need a more customizable experience? Our private training program is tailored to suit your
          individual needs. This program starts at four week intervals, are for dogs of all ages,
          and include:
        </p>

        <ul class="list-disc list-inside ml-4">
          <li>A manageable training plan</li>
          <li>Orientation and goal planning</li>
          <li>Private lessons with a certified trainer at our training facility or in your home</li>
          <li>Working through distractions and real life situations</li>
          <li>Weekly practice guides</li>
          <li>
            Access to your trainer during office hours for the length of your program via phone or
            email
          </li>
          <li>One free training tune-up session, redeemable within six months of graduation</li>
          <li>Discounts on continued training maintenance walks</li>
          <li>
            Plus, we can spend as much time as you like on each training cue, because you can
            continue training in four-week intervals
          </li>
        </ul>
      </ServiceSection>
    </div>
  </div>
</Container>
