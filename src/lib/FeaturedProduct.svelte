<script>
  export let heading;
  export let image;
  export let price;
  export let feature;
  export let ctalink;
  export let ctalabel;
</script>

<div class="flex flex-col xl:w-2/6 md:w-2/6 bg-white border rounded-lg shadow-xl">
  <img class="p-4 object-center rounded-t-lg h-44 h-36" src={image} alt="" />

  <div class="flex flex-col flex-grow p-6">
    <h2 class="mb-4 text-base uppercase tracking-wider text-blueGray-700">{heading}</h2>

    <strong class="flex mb-8 text-3xl font-black leading-none text-black lg:text-4xl"
      >{price}</strong
    >

    {#if feature}
      <p class="flex items-center mb-4 text-base font-medium leading-relaxed text-blueGray-700">
        {feature}
      </p>

      <ul class="list-disc list-outside mx-3">
        <slot name="content" />
      </ul>
    {:else}
      <slot name="feature" />

      <ul class="list-disc list-outside mx-3">
        <slot name="content" />
      </ul>
    {/if}

    <slot name="subcontent" />
  </div>

  <div class="px-4 pb-4 text-center">
    <a class="btn paws-btn_secondary paws-btn_large" href={ctalink} target="_blank">{ctalabel}</a>
  </div>
</div>
