<script>
  import Building from 'virtual:icons/fa/building';
  import Dog from 'virtual:icons/fa-solid/dog';
  import ServiceSection from '$lib/serviceSection.svelte';
  import HorizontalCard from '$lib/horizontalCard.svelte';
  import Container from '$lib/container.svelte';
</script>

<Container>
  <section class="text-blueGray-700 ">
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
            </span>Office Hours: Tuesday - Friday: 10am - 6pm
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
            and positive reinforcement, we aim to create a harmonious home for every pet and parent.
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
          class="object-cover object-center rounded-lg "
          alt=""
          src="/images/abc-certified-dog-trainer.png"
        />
      </div>
    </div>
  </section>
</Container>

<Container backgroundColor="var(--brand-background_light)">
  <section class="py-8">
    <h2 class="text-3xl pb-4">Group Training Classes</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <HorizontalCard
        heading="Puppy Right Start"
        description="This course is everything you need to get your puppy set up in their new home and get started on the right foot."
        imageSrc="/images/illustrations/woman-dog-desk.png"
        age="2-5 months"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Puppy%20Right%20Start%20"
      />
      <HorizontalCard
        heading="Puppy Kindergarten"
        description="Learn how to teach your puppy basic manners like, sit, stay, loose leash walking, and more."
        imageSrc="/images/illustrations/woman-dog-selfie.png"
        age="5-12 months"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Puppy%20Kindergarten"
      />
      <HorizontalCard
        heading="Basic Manners"
        description="Learn how to teach your dog basic manners like, stay, heel, down, and more."
        imageSrc="/images/illustrations/woman-training-dog.png"
        age="12+ months"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Basic%20Manners%20"
      />
      <HorizontalCard
        heading="Intermediate"
        description="Build upon the foundation of our basic manners training course."
        imageSrc="/images/illustrations/woman-walking-dog.png"
        age="12+ months"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Intermediate%20Training"
      />
    </div>

    <div class="pt-4 space-y-4">
      <h3 class="text-2xl">All classes include:</h3>

      <ul class="list-disc list-inside ml-4">
        <li>Five weeks of training on a set schedule</li>
        <li>
          The first session is our orientation without dogs, which is an important catalyst of any
          training program
        </li>
        <li>Each class teaches a set of different commands</li>
        <li>We teach you how to work through distractions and real life situations</li>
        <li>Weekly practice guides</li>
        <li>
          Access to your trainer during office hours for the length of your program via phone or
          email
        </li>
        <li>After each level's graduation, receive $50 off of the next level</li>
        <li>
          Learn how to teach your puppy basic manners including, sit, down, go to your place, loose
          leash walking, and more!
        </li>
      </ul>
    </div>
  </section>
</Container>

<Container>
  <div class="row py-8">
    <div class="pricing-container">
      <ServiceSection
        heading="Day Training"
        price="Starting at $1500"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Day%20Training"
        cta="Register Now"
      >
        <p>
          We take your pup on the learning experience of a lifetime! You drop your best friend off
          at our training center between 9am and 10am where we will do intensive training and
          socialization exercises.
        </p>

        <p>
          In between training we do play sessions, rest sessions, and lots of walks. Then you pick
          up your best friend between 3pm and 4pm. This program is great for pet parents who do not
          have the time to invest in working with their dogs daily on the repetition that is
          required during practicing their training cues or that struggle with the patience that
          successful training requires.
        </p>

        <ul class="list-disc list-inside ml-4">
          <li>Includes 5 to 10 days of training with dog and trainer</li>
          <li>Includes 2 transfer sessions with trainer and pet parent</li>
          <li>
            A manageable training plan that includes teaching your dog impulse control, loose leash
            walking, polite greetings, and more.
          </li>
          <li>We teach you and your dog cues like sit, down, stay, leave it, heel, and more.</li>
          <li>Access to our online learning library</li>
          <li>Pet taxis if you need assistance with transport</li>
          <li>Discounts on maintenance walks</li>
        </ul>
      </ServiceSection>

      <ServiceSection
        heading="Private Training"
        price="Starting at $1100"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Private%20Training"
        cta="Register Now"
      >
        <p>
          Whether you come to us for private training in our training center or we come to you for
          private in-home training, allowing you and your pup to work on your own turf, our private
          training programs offer a customized training experience for you and your dog. These
          programs start at four week intervals, are for dogs of all ages, and include:
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

      <ServiceSection
        heading="Pet Parents - Pet First Aid and CPR"
        price="$135"
        link="https://PAMtrainingschedule.as.me/?appointmentType=category:Pet%20First%20Aid%20and%20CPR"
        cta="Register Now"
      >
        <p>
          There is no 911 for pets, so you have to be their emergency response team! This human-only
          class prepares you to do that in just 5 hours. You will feel empowered and able to provide
          potentially life saving aid to a pet in need!
        </p>

        <p>
          During this course we will cover CPR techniques, trauma responses such as bleeding
          protocols, treating shock, splinting fractures, and more!
        </p>

        <ul class="list-disc list-inside ml-4">
          <li>
            Looking for certification for the staff of your pet related business? <a
              href="tel:248-729-6772">Contact us</a
            > to discuss special bulk rates
          </li>
        </ul>
      </ServiceSection>
    </div>
  </div>
</Container>
