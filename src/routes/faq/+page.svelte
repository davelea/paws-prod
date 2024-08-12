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
  <Faq>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">Will I have the same walker for every visit?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          At Paws Around Motown, we work as a team to cover all of our pet parent's needs. We invest
          in training our employees so that no matter which walker provides service, your pet is in
          experienced hands. Every employee is dog walker, pet sitter, and pet first aid & CPR
          certified.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3"
          >Who will have access to my house keys and property?</svelte:fragment
        >
        <p class="text-gray-500 dark:text-gray-400">
          We provide a lockbox to be placed anywhere you'd like which provides our employees with
          access to your key.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Who will enter my house/property?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Only an employee of Paws Around Motown will ever enter your house/property.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3"
          >How will I know my dog was walked and/or visited while I'm not home?</svelte:fragment
        >
        <p class="text-gray-500 dark:text-gray-400">
          Paws Around Motown utilizes a pet sitting app, called Time to Pet, to keep you updated.
          You will receive a real-time push notification when we check in and check out with a GPS
          location so you know where we are. By clicking the chat bubble, you may then have
          real-time communication with your walker/sitter through the app during your walk or visit.
          Upon completion of our visit, you will receive photo(s) of your pet(s), a typed update of
          how everything went, and a map of the walk route to view where we went with your pets. Our
          clients often tell us that this is the best part of their day!
        </p>
      </FaqItem>
    </div>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">Are you licensed, bonded, and insured?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Yes! Paws Around Motown is licensed with the state of Michigan. Every employee is bonded
          and insured through our pet sitting insurance company, Pet Sitters Associates, LLC.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Have all employees undergone background checks?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Yes, all employees must undergo and pass a background check prior to being employed by
          Paws Around Motown.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Have any other questions?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          If you have any other questions, please email us at <Envelope
            class="text-sm inline mr-1"
          />
          <a href="mailto:{$info.email}">
            {$info.email}
          </a>
          or call us at <Phone class="text-sm inline mr-1" />
          <a href="tel:{$info.phone}"> {$info.phone}</a>
        </p></FaqItem
      >
    </div>
  </Faq>
</Section>
