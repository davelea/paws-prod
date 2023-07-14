<script>
  import { get } from 'svelte/store';
  import { PUBLIC_CMS_URL } from '$env/static/public';

  export let teamMember;

  const name = getFullName(teamMember?.firstname, teamMember?.lastname);
  let avatar = PUBLIC_CMS_URL + teamMember?.avatar.data.attributes.url;

  function getFullName(firstname, lastname) {
    return firstname !== null
      ? lastname !== null
        ? firstname + ' ' + lastname
        : firstname
      : firstname;
  }
</script>

<div class="max-w-lg lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow">
  <img class="object-cover object-top min-w-full max-h-96 rounded-t-lg" src={avatar} alt="" />

  <div class="pt-4 pb-4 px-4">
    <h3 class="text-2xl font-bold tracking-tight text-gray-900">
      {name}
    </h3>

    <span class="text-sm text-gray-500 dark:text-gray-400">{teamMember.title}</span>
  </div>
</div>
