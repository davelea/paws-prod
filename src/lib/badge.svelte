<script>
  export let label;
  export let size = 'base';

  const horizontalPadding = size === 'sm' ? '2' : '4';
  const vertialPadding = size === 'sm' ? '1' : '2.5';
</script>

<span
  style="background-color: rgba(229, 211, 21, 0.40);"
  class="text-{size} px-{horizontalPadding} py-{vertialPadding} rounded-full"
>
  {label}
</span>
