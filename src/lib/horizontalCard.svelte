<script>
  import Badge from './badge.svelte';
  export let imageSrc;
  export let imageAlt;
  export let heading;
  export let description;
  export let age;
  export let link;
  export let cta = 'Register Now';
</script>

<div
  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row"
  style="background-color: rgba(229, 211, 21, 0.40)"
>
  <img
    class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src={imageSrc}
    alt={imageAlt}
  />
  <div class="flex flex-col justify-between p-4 space-y-2 leading-normal">
    <h3 class="text-2xl font-bold tracking-tight text-gray-900">
      {heading}
    </h3>

    {#if age}
      <span><Badge label={age} size="sm" /></span>
    {/if}

    <p class="font-normal text-gray-700">
      {description}
    </p>

    <a
      href={link}
      class="py-2.5 px-5 mr-2 mb-2 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      ><div class="flex justify-center items-center">
        <span>{cta}</span><svg
          aria-hidden="true"
          class="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </div>
    </a>
  </div>
</div>
