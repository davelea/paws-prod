<script>
  import Badge from '$lib/badge.svelte';

  export let heading;
  export let price;
  export let link;
  export let cta;
</script>

<section>
  <div class="flex justify-between">
    <h2 class="text-3xl pb-4">{heading}</h2>
    <div><Badge label={price} color="blue" /></div>
  </div>

  <div class="space-y-4"><slot /></div>

  {#if link && cta}
    <div class="py-4">
      <a class="btn paws-btn_primary" href={link}>{cta}</a>
    </div>
  {/if}
</section>
