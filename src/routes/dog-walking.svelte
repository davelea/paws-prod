<script>
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
            <i class="far fa-building text-blue-500" aria-hidden="true" />
          </span>Office Hours: Sunday - Friday: 10am - 6pm, Closed Saturday
        </p>
        <p class="flex mb-2 text-blueGray-600">
          <span
            class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
          >
            <i class="fas fa-dog text-blue-500" aria-hidden="true" />
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
                  title="Dog Walking Services">Dog Walking Services</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                No worries when your pup is out and about with a Paws Around Motown Certified Dog
                Walker!
              </p>
            </div>
          </div>
          <div class="pricing-list__content space-y-4">
            <p>
              Your fur baby will have fresh water, undivided attention, positive reinforcement, and
              a safe environment to smell the smells and stretch those muscles! All walks are
              private on-leash experiences and are offered between 9 am and 4 pm, but early and late
              walks are available for a small fee.
            </p>
            <ul class="list-disc list-inside ml-4">
              <li>20-minute walk - $23</li>
              <li>30-minute walk - $30</li>
              <li>45-minute walk - $35</li>
              <li>60-minute walk - $40</li>
              <li>90-minute walk - $55</li>
            </ul>
            <div class="pricing-list__content-addons">
              <h3 class="text-2xl">Add-Ons</h3>
              <ul class="list-disc list-inside ml-4">
                <li>$10 for before or after-hours walks</li>
                <li>$5 per dog for walks with more than two dogs</li>
                <li>$10 for walks on Saturdays and Sundays</li>
              </ul>
            </div>
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
              id="potty-breaks"
              name="Potty Breaks"
            >
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Potty Breaks">Potty Breaks</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                No need to make your pup do the potty dance when you’re at work. Let Paws Around
                Motown give your fur baby a bladder break!
              </p>
            </div>
          </div>
          <div class="pricing-list__content paws-hide space-y-4">
            <p>
              Along with the potty break, your furry friend will have some supervised time in your
              backyard with light play, a wellness check, and a water refill during each visit.
            </p>
            <ul class="list-disc list-inside ml-4">
              <li>15-minute potty break in your backyard - $20</li>
              <li>20-minute potty break in your backyard - $23</li>
            </ul>
            <div class="pricing-list__content-addons">
              <h3 class="text-2xl">Add-Ons</h3>
              <ul class="list-disc list-inside ml-4">
                <li>$10 for before and after-hours potty breaks</li>
                <li>$5 per dog for potty breaks with more than two dogs</li>
                <li>$10 for potty breaks on Saturdays and Sundays</li>
              </ul>
            </div>
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
              id="pooper-scooper"
              name="Pooper Scooper"
            >
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Pooper Scooper">Pooper Scooper</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                The last thing you want to do after work is head outside and clean up the pet
                messes.
              </p>
            </div>
          </div>
          <div class="pricing-list__content paws-hide space-y-4">
            <p>Let us do the dirty work for you with weekly pet-waste clean-ups!</p>
            <h3 class="text-2xl">First Service or Monthly Clean Up</h3>
            <ul class="list-disc list-inside ml-4">
              <li>One dog - $80</li>
              <li>Two dogs - $100</li>
              <li>Three or more dogs - $125</li>
            </ul>
            <h3 class="text-2xl">Weekly Recurring Services</h3>
            <ul class="list-disc list-inside ml-4">
              <li>One dog - $20</li>
              <li>Two dogs - $26</li>
              <li>Three or more dogs - $32</li>
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
                  title="Pet Sitting">Pet Sitting</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                Are you spending time away from home? Paws Around Motown can drop by for a visit and
                a walk!
              </p>
            </div>
          </div>
          <div class="pricing-list__content paws-hide space-y-4">
            <p>
              Your pet will enjoy some time with a new friend between the hours of 8 am and 8 pm. A
              minimum of 3x per day for dogs and 1x per day for cats.
            </p>
            <ul class="list-disc list-inside ml-4">
              <li>30-minute cat sitting visit - $35</li>
              <li>30-minute visit with a walk for up to two pets - $35</li>
              <li>45-minute visit with a walk for up to two pets - $40</li>
              <li>60-minute visit with a walk for up to two pets - $45</li>
              <li>90-minute visit with a walk for up to two pets - $60</li>
            </ul>
            <div class="pricing-list__content-addons">
              <h3 class="text-2xl">Add-Ons</h3>
              <ul class="list-disc list-inside ml-4">
                <li>$10 before or after-hours visits</li>
                <li>$5 for each additional pet over two</li>
              </ul>
            </div>
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
              id="small-dog-yappy-hour"
              name="Small Dog Yappy Hour"
            >
              <button class="pricing-list__summary-action"
                ><i class="fas fa-chevron-right mr-2" aria-hidden="true" /><span
                  class="pricing-list__summary-title"
                  title="Small Dog Yappy Hour">Small Dog Yappy Hour</span
                ></button
              >
            </h2>
            <div class="pricing-list__summary-description">
              <p>
                We’ve had a lot more time at home with our pets lately. But maybe they’re ready to
                meet some new friends for a rigorous romp in our center!
              </p>
            </div>
          </div>
          <div class="pricing-list__content paws-hide space-y-4">
            <p>
              This socialization club for small dogs is a great way to get them some indoor playtime
              with other pups and humans from Paws Around Motown!
            </p>
            <p>
              We pick them up, transport them safely in individual crates for the ride there and
              back, and bring them home ready to relax!
            </p>
            <ul class="list-disc list-inside ml-4">
              <li>
                2-3 hours of playtime, including safe transportation to and from our center - $60
              </li>
              <li>Members receive a 10% discount</li>
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
              thing in the morning for a two-hour breakfast, private walk, and playtime.
            </p>
            <ul class="list-disc list-inside ml-4">
              <li>Pet sitting for up to two pets - $150</li>
            </ul>
            <div class="pricing-list__content-addons">
              <h3 class="text-2xl">Add-Ons</h3>
              <ul class="list-disc list-inside ml-4">
                <li>$5 for each additional pet over two</li>
              </ul>
            </div>
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
              <li>Daily, GPS tracked communication (you’ll know we came!)</li>
              <li>Back-up staff to cover in the event of ALL emergencies!</li>
            </ul>
            <p>Pricing:</p>
            <ul class="list-disc list-inside ml-4">
              <li>All this for a flat rate of $250 per night (no hidden fees!)</li>
            </ul>
            <p class="font-italic">
              *This service is booked on a first come first serve basis and fill up quickly. We
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
