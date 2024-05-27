<script>
  import { each } from 'svelte/internal';
  import TeamMemberCard from '$lib/teamMemberCard.svelte';
  import Container from '$lib/container.svelte';

  export let data;

  const teamMembers = data?.teamMembers.data;
</script>

<svelte:head>
  <title>Paws Around Motown | About Us</title>
</svelte:head>

<Container>
  <h1 class="pt-4 mb-8 text-4xl font-black tracking-tighter text-black md:text-5xl title-font">
    About Paws Around Motown
  </h1>
  <section class="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
    <div class="font-light sm:text-lg">
      <p class="mb-4">
        The team at Paws Around Motown shares Becky's passion and expertise in pet care. Our staff
        members are all pet lovers and certified in pet first aid and CPR and pet care, ensuring
        that your furry friend is in the best hands possible. Our team consists of experienced dog
        walkers, pet sitters, and trainers who use positive reinforcement techniques to help your
        pet thrive. Our hourly staff know and do so much that they hold the position of Pet Care
        Technician here at Paws Around Motown.
      </p>

      <p class="mb-4">
        At Paws Around Motown, we understand the importance of having a trusted and reliable pet
        care team. That's why we thoroughly vet and train each of our staff members to ensure they
        meet our high standards. Our team is dedicated to providing the best possible care for your
        pet and ensuring that you have peace of mind while you're away.
      </p>

      <p class="mb-4">
        When you choose Paws Around Motown, you're choosing a team that's dedicated to making a
        positive difference in the lives of both pets and their owners. We're here to help make your
        pet's life better and ensure that they're happy, healthy, and well-cared for at all times.
        Contact us today to learn more about our services and to schedule a consultation with one of
        our expert pet care professionals.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <img class="w-full rounded-lg" src="/images/becky.jpg" alt="Becky Lea posing with a dog" />

      <img
        class="mt-4 w-full lg:mt-10 rounded-lg"
        src="/images/megan.jpg"
        alt="Megan (Paws Around Motown Manager) posing with a dog"
      />
    </div>
  </section>
</Container>

<Container>
  <section class="pt-8 mx-auto max-w-screen-xl">
    <div class="max-w-screen-lg font-light sm:text-lg">
      <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
        Our Mission
      </h2>
      <p class="mb-4">
        To provide a safe, stress-free, and quality pet care experience for pet and pet parent. We
        do this through compassion, patience, honesty, open communication, and respect.
      </p>
    </div>
  </section>
</Container>

{#if teamMembers}
  <Container>
    <section class="py-8 mx-auto max-w-screen-xl">
      <div class="font-light sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Our Team
        </h2>

        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {#each teamMembers as teamMember}
            <TeamMemberCard teamMember={teamMember.attributes} />
          {/each}
        </div>
      </div>
    </section>
  </Container>
{/if}
