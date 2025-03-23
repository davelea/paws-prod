<script>
  import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
  import Envelope from 'virtual:icons/fa/envelope';
  import Phone from 'virtual:icons/fa/phone';
  import { info } from '../../stores.js';
</script>

<svelte:head>
  <title>Paws Around Motown | Frequently Asked Questions</title>
</svelte:head>

<Section
  sectionClass="relative"
  classDiv="px-4 py-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6"
  name="faq"
>
  <h1 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    Frequently asked questions
  </h1>

  <p class="mb-8">
    Welcome to our FAQ page! We know that choosing the right pet care provider is an important
    decision, and we're here to help. Below are answers to some of the most common questions we
    receive. If you don't find what you're looking for, feel free to reach out—we'd love to chat!
  </p>

  <section>
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      General Questions
    </h2>

    <Faq>
      <FaqItem>
        <svelte:fragment slot="h3">What areas do you serve?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          We proudly serve pet parents in Berkley, Beverly Hills, Birmingham, Bingham Farms,
          Bloomfield Hills, Bloomfield Twp, Clawson, Farmington, Farmington Hills, Ferndale,
          Franklin, Huntington Woods, Lathrup Village, Madison Heights, Oak Park, Pleasant Ridge,
          Royal Oak, Southfield, Troy, and West Bloomfield. If you're unsure whether we cover your
          area, just ask — we'll always do our best to help!
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What types of pets do you care for?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          While we specialize in dogs and cats, we also provide care for small pets like rabbits,
          guinea pigs, fish, and reptiles. Have a pet that doesn't quite fit the mold? Let us know!
          We love meeting new animal friends.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">How do I book a service?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Booking with us is like giving your pet VIP treatment! All appointment requests must be
          submitted at least <span class="font-bold">10 days in advance</span> through our online
          portal, by phone, or via email. We operate on a first-come, first-served basis, and
          requests made less than 10 days in advance will incur a
          <span class="font-bold">$10 on-demand fee per appointment</span>. New clients will have a
          required meet-and-greet consultation before booking. Have a special circumstance? Contact
          us to request a booking waiver — we know life happens!
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Are you insured and bonded?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Yes! We are fully insured and bonded, because nothing matters more to us than your pet's
          safety and your peace of mind.
        </p>
      </FaqItem>
    </Faq>
  </section>

  <section>
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Dog Walking Services
    </h2>

    <Faq>
      <FaqItem>
        <svelte:fragment slot="h3">What's included in a dog walking appointment?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Think of our dog walks as an adventure tailored to your pup's unique personality! We
          provide exercise, potty breaks, fresh water, and a detailed visit report with
          photos—because we know you love seeing those happy tail wags. Every walk is designed to
          match your dog's needs, whether they prefer a leisurely sniffari or a power walk around
          the block.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3"
          >What if my dog has special needs or behavioral challenges?</svelte:fragment
        >
        <p class="text-gray-500 dark:text-gray-400">
          No two dogs are the same, and that's exactly why we love what we do! Whether your dog is
          shy, reactive, high-energy, or just has some quirks, we adapt our approach to provide a
          safe, enjoyable experience. Let's work together to create a plan that keeps tails wagging!
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Can you accommodate last-minute bookings?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          We get it—life happens! While we recommend booking in advance for guaranteed slots, we'll
          always do our best to accommodate last-minute requests. Just know that on-demand fees may
          apply.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">How do you ensure my dog's safety on walks?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Safety isn't just a priority—it's our passion! Our Pet Care Technicians use secure
          leashes, avoid risky situations, and never conduct pack walks (unless the dogs live in the
          same home). Each Pet Care Technician is certified in pet care, pet first aid, and CPR, and
          we perform safety checks on all gear before heading out. Your pup's well-being is in
          expert hands!
        </p>
      </FaqItem>
    </Faq>
  </section>

  <section>
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Pet Sitting Services
    </h2>

    <Faq>
      <FaqItem>
        <svelte:fragment slot="h3">What's included in a pet sitting visit?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Our pet sitting visits are designed to make your pet feel like royalty! We provide
          feeding, fresh water, potty breaks or litter box cleaning, playtime, medications (if
          needed), and home care tasks like mail retrieval, plant watering, and even yard clean-ups.
          Your pet's routine stays consistent, and your home is well cared for while you're away.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Will my pet sitter send updates?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Absolutely! We know how much you miss your furry friend, so we send visit reports with
          photos after every visit. It's the next best thing to being there yourself!
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3"
          >What's the difference between “Everything but the Slumber” and an overnight stay?</svelte:fragment
        >
        <p class="text-gray-500 dark:text-gray-400">
          If your pet likes extra company but doesn't need someone there all night, our “Everything
          but the Slumber” service provides multiple extended visits throughout the day and evening.
          Overnight stays, on the other hand, include an in-home overnight stay for pets who love a
          cozy sleepover buddy.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Can you administer medication to my pet?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Yes! Whether it's oral, topical, or some injectable medications, our team is trained to
          ensure your pet gets the care they need, stress-free.
        </p>
      </FaqItem>
    </Faq>
  </section>

  <section>
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Training Services
    </h2>

    <Faq>
      <FaqItem>
        <svelte:fragment slot="h3">What training methods do you use?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          We believe in positive reinforcement and making training fun! Our training techniques
          focus on praise, treats, and toys to encourage good behavior, while strengthening the bond
          between you and your pet.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Do you offer private training sessions?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Yes! We customize every training session to fit your dog's unique needs, whether it's
          basic obedience, leash manners, or behavior modification. No cookie-cutter programs
          here—just real results!
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3"
          >How long does it take to see results from training?</svelte:fragment
        >
        <p class="text-gray-500 dark:text-gray-400">
          Every dog learns at their own pace, but with consistency and practice, you'll start seeing
          progress before you know it. We'll guide you every step of the way!
        </p>
      </FaqItem>
    </Faq>
  </section>

  <section>
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Billing & Policies
    </h2>

    <Faq>
      <FaqItem>
        <svelte:fragment slot="h3">How does billing work?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          We keep things simple! Payments are processed weekly (Monday through Sunday), with
          invoices sent every Thursday for review before billing on Friday. We accept major credit
          cards and ACH transfers. If you ever spot an error on your invoice, just let us know
          before Friday, and we'll fix it right away!
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What is your cancellation policy?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          We understand that plans change, but we do require <span class="font-bold"
            >48 hours notice</span
          > for cancellations. If you cancel with less than 48 hours notice, the full appointment fee
          applies. Emergencies happen — if you have a serious situation, reach out, and we'll review
          it case by case.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What happens if I forget to pay?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          If your payment doesn't go through, you'll need to provide an alternative method within <span
            class="font-bold">24 hours</span
          >
          to avoid a <span class="font-bold">$10 late fee</span>. Unresolved payment issues after
          <span class="font-bold">7 days</span> may result in a pause on future appointments — let's
          avoid that by keeping your payment info up to date!
        </p>
      </FaqItem>
    </Faq>
  </section>

  <section>
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Emergency & Home Access Policies
    </h2>

    <Faq>
      <FaqItem>
        <svelte:fragment slot="h3">What if my pet needs emergency veterinary care?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          If your pet has a medical emergency, we will try to reach you first. If it's urgent and we
          can't get in touch, we'll take your pet to the nearest veterinarian for immediate care. We
          ask all clients to keep a <span class="font-bold">credit card on file</span> with their
          vet to cover emergency costs. If you can't be reached, we are authorized to approve up to
          <span class="font-bold">$200 in medical expenses</span>
          before needing further consent.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">How do you access my home for appointments?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Every client uses a lockbox for secure and reliable home access. You can provide your own
          or request one from us. If we can't access your home due to a lockbox issue or other
          barrier, the full appointment fee still applies. Need an alternate access method? Let's
          discuss a backup plan!
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3"
          >What happens if I don't return as scheduled from a trip?</svelte:fragment
        >
        <p class="text-gray-500 dark:text-gray-400">
          If you don't return as planned and don't update us within <span class="font-bold"
            >24 hours</span
          >, we'll try reaching both you and your emergency contact. If
          <span class="font-bold">48 hours</span> go by without a response, we reserve the right to arrange
          appropriate care for your pet (such as boarding), at your expense. We will never leave a pet
          stranded. If we do not receive notification that you have returned home, additional services
          may be scheduled, and you will be charged accordingly.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3"
          >Can I have a friend or family member care for my pet while using your services?</svelte:fragment
        >
        <p class="text-gray-500 dark:text-gray-400">
          Of course! But keep in mind that we are only responsible for the care we provide during
          our scheduled visits. If another caregiver is involved, please provide their contact
          details to avoid any miscommunications. Because we employ employees rather than
          contractors, we must follow all employment laws. If someone who is not a client is staying
          in the home with your pets, we ask that they not be present when we arrive for service,
          that you sign a release of liability waiver for anything that happens in the home in our
          absence, and that we have their contact details on file.
        </p>
      </FaqItem>
    </Faq>
  </section>

  <section class="space-y-4">
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Still have questions?
    </h2>

    <p>Reach out to us today—we love connecting with fellow pet lovers! 😊</p>
    <p>
      <Envelope class="text-sm inline mr-1" />
      <a href="mailto:{$info.email}">
        {$info.email}
      </a>
    </p>
    <p>
      <Phone class="text-sm inline mr-1" />
      <a href="tel:{$info.phone}"> {$info.phone}</a>
    </p>
  </section>
</Section>
