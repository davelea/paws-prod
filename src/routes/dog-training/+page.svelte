<script>
  import Building from 'virtual:icons/fa/building';
  import Dog from 'virtual:icons/fa-solid/dog';
  import ServiceSection from '$lib/serviceSection.svelte';
</script>

<div class="container">
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
  <div class="space-y-4">
    <section class="text-blueGray-700 ">
      <div class="py-12">
        <div class="flex flex-wrap lg:flex-nowrap gap-2 md:gap-0">
          <div class="flex flex-col xl:w-2/6 md:w-2/6 bg-white border rounded-lg shadow-xl">
            <img class="p-4 object-center rounded-t-lg h-44 h-36" src="/images/dog.svg" alt="" />
            <div class="flex flex-col flex-grow p-6">
              <h2 class="mb-4 text-base uppercase tracking-wider text-blueGray-700">
                Puppy Right Start
              </h2>
              <strong class="flex mb-8 text-3xl font-black leading-none text-black lg:text-4xl"
                >$350</strong
              >
              <p
                class="flex items-center mb-4 text-base font-medium leading-relaxed text-blueGray-700"
              >
                For puppies 2-5 months. This course is everything you need to get your puppy set up
                in their new home and get started on the right paw. Includes:
              </p>
              <ul class="list-disc list-outside mx-3">
                <li>Five week course.</li>
                <li>
                  The first week is an in-home orientation, where we will help you set up your potty
                  training and confinement areas. We will also teach you how puppies learn and other
                  important items.<em
                    >*If you do not want in-home orientation, the orientation may be booked over
                    Zoom.</em
                  >
                </li>
                <li>
                  Learn the basics like sit, polite greetings, teaching your puppy to share,
                  catching your puppy getting it right before they have a chance to get it wrong,
                  and more!
                </li>
                <li>
                  Potty training, crate training, victorious vet visits, and everything else you
                  need to get you and your puppy started off on the right paw.
                </li>
                <li>Socialization principles.</li>
                <li>
                  Access to your trainer during office hours for the length of your program via
                  phone or email.
                </li>
                <li>
                  Move up to our next level of training, Puppy Kindergarten, after graduation and
                  receive $50 off.
                </li>
              </ul>
            </div>
            <div class="px-4 pb-4 text-center">
              <a
                class="btn paws-btn_secondary paws-btn_large"
                href="https://PAMtrainingschedule.as.me/?appointmentType=category:Puppy%20Right%20Start%20"
                target="_blank">Register Now</a
              >
            </div>
          </div>
          <div class="flex flex-col xl:w-2/6 md:w-2/6 bg-white border rounded-lg shadow-xl">
            <img class="p-4 object-center rounded-t-lg h-44 h-36" src="/images/dog_2.svg" alt="" />
            <div class="flex flex-col flex-grow p-6">
              <h2 class="mb-4 text-base uppercase tracking-wider text-blueGray-700">
                Puppy Kindergarten
              </h2>
              <strong class="flex mb-8 text-3xl font-black leading-none text-black lg:text-4xl"
                >$350</strong
              >
              <p
                class="flex items-center mb-4 text-base font-medium leading-relaxed text-blueGray-700"
              >
                For dogs 6-12 months. Includes:
              </p>
              <ul class="list-disc list-outside mx-3">
                <li>Five week course.</li>
                <li>
                  The first session is our orientation without dogs, where you will learn many
                  important things like the science behind learning.
                </li>
                <li>
                  Learn how to teach your puppy basic manners including, sit, down, go to your
                  place, loose leash walking, and more!
                </li>
                <li>Working through distractions and real life situations.</li>
                <li>Weekly practice guides.</li>
                <li>
                  Access to your trainer during office hours for the length of your program via
                  phone or email.
                </li>
                <li>
                  Move up to our next level of training, Basic Manners, after graduation and receive
                  $50 off.
                </li>
              </ul>
            </div>
            <div class="px-4 pb-4 text-center">
              <a
                class="btn paws-btn_secondary paws-btn_large"
                href="https://PAMtrainingschedule.as.me/?appointmentType=category:Puppy%20Kindergarten"
                target="_blank">Register Now</a
              >
            </div>
          </div>
          <div class="flex flex-col xl:w-2/6 md:w-2/6 bg-white border rounded-lg shadow-xl">
            <img class="p-4 object-center rounded-t-lg h-44 h-36" src="/images/dog_3.svg" alt="" />
            <div class="flex flex-col flex-grow p-6">
              <h2 class="mb-4 text-base uppercase tracking-wider text-blueGray-700">
                Basic Manners
              </h2>
              <strong class="flex mb-8 text-3xl font-black leading-none text-black lg:text-4xl"
                >$350</strong
              >
              <p
                class="flex items-center mb-4 text-base font-medium leading-relaxed text-blueGray-700"
              >
                For dogs 12 months and older. Includes:
              </p>
              <ul class="list-disc list-outside mx-3">
                <li>Five week course</li>
                <li>
                  The first session is our orientation without dogs which is an important catalyst
                  of any training program.
                </li>
                <li>
                  Learn how to teach your dog basic manners including stay, heel, recall, and more
                </li>
                <li>Working through distractions and real life situations.</li>
                <li>Weekly practice guides.</li>
                <li>
                  Access to your trainer during office hours for the length of your program via
                  phone or email.
                </li>
                <li>
                  Move up to our next level of training, Intermediate Manners, after graduation and
                  receive $50 off.
                </li>
              </ul>
            </div>
            <div class="px-4 pb-4 text-center">
              <a
                class="btn paws-btn_secondary paws-btn_large"
                href="https://PAMtrainingschedule.as.me/?appointmentType=category:Basic%20Manners"
                target="_blank">Register Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="container">
    <div class="row py-3">
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
            up your best friend between 3pm and 4pm. This program is great for pet parents who do
            not have the time to invest in working with their dogs daily on the repetition that is
            required during practicing their training cues or that struggle with the patience that
            successful training requires.
          </p>

          <ul class="list-disc list-inside ml-4">
            <li>Includes 5 to 10 days of training with dog and trainer</li>
            <li>Includes 2 transfer sessions with trainer and pet parent</li>
            <li>
              A manageable training plan that includes teaching your dog impulse control, loose
              leash walking, polite greetings, and more.
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
            private in-home training, allowing you and your pup to work on your own turf, our
            private training programs offer a customized training experience for you and your dog.
            These programs start at four week intervals, are for dogs of all ages, and include:
          </p>

          <ul class="list-disc list-inside ml-4">
            <li>A manageable training plan</li>
            <li>Orientation and goal planning</li>
            <li>
              Private lessons with a certified trainer at our training facility or in your home
            </li>
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

        <div class="mb-4 space-y-4">
          <h2 class="text-3xl" id="Training-for-Pet-Parents">
            Pet Parents - Pet First-Aid and CPR
          </h2>
          <p>
            There is no 911 for pets. This course leads to certification in Pet First Aid and CPR so
            that you can save your pet's life in an emergency.
          </p>
          <h4>Live online five-hour pet first-aid and CPR class</h4>
          <ul class="list-disc list-inside ml-4">
            <li>General Course - $75</li>
            <li>Certification Course - $135</li>
          </ul>
          <a class="btn paws-btn_secondary" href="tel:248-729-6772">Call now</a>
        </div>
      </div>
    </div>
  </div>
</div>
