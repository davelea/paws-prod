<script>
  import Building from 'virtual:icons/fa/building';
  import Dog from 'virtual:icons/fa-solid/dog';

  import { onMount } from 'svelte';

  onMount(() => {
    init();
  });

  function addPricingEventListeners() {
    const pricingButtons = document.querySelectorAll('.pricing-list__summary-heading');

    pricingButtons.forEach((button) => {
      button.addEventListener('click', handlePricingItemClick);
    });
  }

  function handlePricingItemClick(event) {
    // TODO: use closest or something cleaner
    const contentSection =
      event.currentTarget.parentElement.parentElement.querySelector('.pricing-list__content');
    const chevron = event.currentTarget.querySelector('.pricing-list__summary-action > i');

    togglePricingVisibility(contentSection, chevron);
  }

  function hashSetup() {
    let hash = window.location.hash.substr(1);

    if (hash) {
      console.log(hash);
      const pricingListItem = document.querySelector(`#${hash}`);

      // don't toggle if element is already visible
      if (
        pricingListItem &&
        pricingListItem.parentElement.nextElementSibling.classList.contains('paws-hide')
      ) {
        togglePricingVisibility(
          pricingListItem.parentElement.nextElementSibling,
          pricingListItem.querySelector('.pricing-list__summary-action > i')
        );
      }
    }
  }

  function init() {
    hashSetup();
    addPricingEventListeners();
  }

  function togglePricingVisibility(contentSection, chevron) {
    if (contentSection.classList.contains('paws-hide')) {
      contentSection.classList.remove('paws-hide');

      chevron.classList.add('paws-rotate-90');
    } else {
      contentSection.classList.add('paws-hide');
      chevron.classList.remove('paws-rotate-90');
    }
  }
</script>

<div class="container">
  <h1 class="text-4xl mt-4 mb-3">Dog Walking &amp; Pet Sitting Services</h1>
  <div class="container mb-4 space-y-4">
    <div class="row">
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
          </span><span>Walk Hours: Every Day 9am - 4pm*</span>
        </p>
      </div>
      <p>
        <em
          >*Need a walk outside our walk hours? Give us a call! We'll find a way to make it work!</em
        >
      </p>
    </div>
  </div>
  <div class="container pricing-container mb-3">
    <ul class="pricing-list">
      <li class="pricing-list__item">
        <section class="pricing-list__section space-y-4">
          <div class="pricing-list__summary space-y-4">
            <h2
              class="pricing-list__summary-heading text-3xl"
              id="dog-walking-services"
              name="Dog Walking Services"
            >
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2 paws-rotate-90" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Dog Walking Services">Dog Walking Services - Starting at $25</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                No worries when your pup is out and about with a Paws Around Motown certified dog
                walker!
              </p>
            </div>
          </div>
          <div class="pricing-list__content space-y-4">
            <p>
              Your fur baby will have fresh water, undivided attention, positive reinforcement, and
              a safe environment to smell the smells and stretch those muscles! All walks are
              private on-leash experiences and are offered between 9 am and 4 pm. Our base walk is
              30 minutes, and then $20 for each additional 30 minutes.
            </p>

            <div class="pricing-list__content-cta">
              <a
                class="btn paws-btn_primary mx-1"
                href="https://www.timetopet.com/portal/pawsaroundmotown/create-account">Book Now</a
              >
            </div>
          </div>
        </section>
      </li>

      <li class="pricing-list__item">
        <section class="pricing-list__section space-y-4">
          <div class="pricing-list__summary space-y-4">
            <h2
              class="pricing-list__summary-heading text-3xl"
              id="doggy-day-camp"
              name="Doggy Day Camp"
            >
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Doggy Day Camp">Doggy Day Camp</span
                ></button
              >
            </h2>

            <div class="pricing-list__summary-description">
              <p>A special day just for your baby</p>
            </div>
          </div>

          <div class="pricing-list__content paws-hide space-y-4">
            <p>
              Who doesn't want to have a special day out, being pampered and loved? Well, now your
              dog can do just that! Introducing… DOGGY DAY CAMP!
            </p>

            Your dog's day at camp will start at pick up in the morning. We will head out for a
            hike, make a pit stop for a puppacino, and end with a shopping trip to the pet store
            where your dog can pick out a toy and a special treat to take home and enjoy later.
            Perfect for special occasions or just because!

            <ul class="list-disc list-inside ml-4">
              <li>$200</li>
            </ul>

            <div class="pricing-list__content-cta">
              <a
                class="btn paws-btn_primary mx-1"
                href="https://www.timetopet.com/portal/pawsaroundmotown/create-account">Book Now</a
              >
            </div>
          </div>
        </section>
      </li>

      <li class="pricing-list__item">
        <section class="pricing-list__section space-y-4">
          <div class="pricing-list__summary space-y-4">
            <h2 class="pricing-list__summary-heading text-3xl" id="pet-sitting" name="Pet Sitting">
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Pet Sitting">Pet Sitting - Starting at $30</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                Are you spending time away from home? Paws Around Motown can drop by for a visit!
              </p>
            </div>
          </div>

          <div class="pricing-list__content paws-hide space-y-4">
            <p>
              Your pet will enjoy some time with a new friend between the hours of 8 am and 8 pm. A
              minimum of 3x per day for dogs and 1x per day for cats.
            </p>

            <div class="pricing-list__content-cta">
              <a
                class="btn paws-btn_primary mx-1"
                href="https://www.timetopet.com/portal/pawsaroundmotown/create-account">Book Now</a
              >
            </div>
          </div>
        </section>
      </li>

      <li class="pricing-list__item">
        <section class="pricing-list__section space-y-4">
          <div class="pricing-list__summary space-y-4">
            <h2
              class="pricing-list__summary-heading text-3xl"
              id="everything-but-the-slumber-pet-sitting"
              name="Everything but the Slumber Pet Sitting"
            >
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Everything but the Slumber Pet Sitting"
                  >Everything but the Slumber Pet Sitting</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>Tuck-in and breakfast services for your pet plus a private walk!</p>
            </div>
          </div>
          <div class="pricing-list__content paws-hide space-y-4">
            <p>It can still be a party without an overnight guest!</p>

            <p>
              Your pet gets three hours of undivided attention in the evening, and we return first
              thing in the morning for a one-hour breakfast plus a one-hour private mid-day walk and
              play session.
            </p>

            <ul class="list-disc list-inside ml-4">
              <li>$200</li>
            </ul>

            <div class="pricing-list__content-cta">
              <a
                class="btn paws-btn_primary mx-1"
                href="https://www.timetopet.com/portal/pawsaroundmotown/create-account">Book Now</a
              >
            </div>
          </div>
        </section>
      </li>

      <li class="pricing-list__item">
        <section class="pricing-list__section space-y-4">
          <div class="pricing-list__summary space-y-4">
            <h2
              class="pricing-list__summary-heading text-3xl"
              id="overnight-pet-sitting"
              name="Overnight Pet Sitting"
            >
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Overnight Pet Sitting">Overnight Pet Sitting</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                Give your pets a dream staycation with an all-inclusive overnight stay and
                personalized care during the day.
              </p>
            </div>
          </div>
          <div class="pricing-list__content paws-hide space-y-4">
            <p>
              Our overnight pet sitting services are transparent, luxury, and all-inclusive. Perfect
              for that special four-legged someone who needs a human companion all overnights and
              attentive care throughout the day.
            </p>
            <p>What it includes:</p>
            <ul class="list-disc list-inside ml-4">
              <li>A 10-hour overnight stay with your pets</li>
              <li>A morning, mid-day and evening walk for pups</li>
              <li>Food and water at each visit, medication as needed</li>
              <li>Litter box scooped daily and/or daily yard clean up</li>
              <li>Collection of mail, packages, and newspapers</li>
              <li>Trash and recycling take-out services</li>
              <li>Light grooming</li>
            </ul>
            <p>Our Promise:</p>
            <ul class="list-disc list-inside ml-4">
              <li>Focused and dedicated care from 10pm-8am</li>
              <li>Long, loving walks two times per day</li>
              <li>Daily, GPS tracked communication (you'll know we came!)</li>
              <li>Back-up staff to cover in the event of ALL emergencies!</li>
            </ul>
            <p>Pricing:</p>
            <ul class="list-disc list-inside ml-4">
              <li>All this for a flat rate of $300 per day (no hidden fees!)</li>
            </ul>
            <p class="font-italic">
              *This service is booked on a first come first serve basis and we fill up quickly. We
              recommend booking as soon as possible!
            </p>
            <div class="pricing-list__content-cta">
              <a
                class="btn paws-btn_primary mx-1"
                href="https://www.timetopet.com/portal/pawsaroundmotown/create-account">Book Now</a
              >
            </div>
          </div>
        </section>
      </li>
    </ul>
  </div>
</div>
