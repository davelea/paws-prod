<script>
  import {
    Section,
    ArticleAuthor,
    ArticleBody,
    ArticleHead,
    ArticleWrapper,
    BlogHead,
    BlogBodyWrapper
  } from 'flowbite-svelte-blocks';
  import { BookOpenOutline, ArrowRightOutline, NewspaperSolid } from 'flowbite-svelte-icons';
  import Time from 'svelte-time/Time.svelte';

  export let data = [];

  const blogs = data?.blogs.data;
</script>

<svelte:head>
  <title>Paws Around Motown | Blog</title>
</svelte:head>

<Section
  name="blog"
  sectionClass="relative"
  classDiv="px-4 py-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6"
>
  <h1 class="mb-8 text-4xl font-black tracking-tighter text-black md:text-5xl title-font">Blog</h1>

  <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
    Explore our blog to stay updated on the latest pet tips, stories, and insights about Paws Around
    Motown! Dive in and get to know us better.
  </p>

  <BlogBodyWrapper>
    {#each blogs as blog}
      <ArticleWrapper>
        <ArticleHead>
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
          >
            <BookOpenOutline size="lg" class="mr-1" />
          </span>
          <span class="text-sm"><Time relative timestamp={blog.attributes.publishedAt} /></span>
        </ArticleHead>
        <ArticleBody>
          <svelte:fragment slot="h2"
            ><a href="/blog/{blog.attributes.slug}">{blog.attributes.title}</a></svelte:fragment
          >
          <svelte:fragment slot="paragraph">
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              {blog.attributes.summary}
            </p>
          </svelte:fragment>
        </ArticleBody>

        <ArticleAuthor>
          <svelte:fragment slot="author">
            {#if blog?.attributes?.author?.data}
              <img
                class="w-7 h-7 rounded-full"
                src={blog?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url}
                alt=""
              />
              <span class="font-medium dark:text-white"
                >{blog?.attributes?.author?.data?.attributes?.firstname}</span
              >
            {/if}
          </svelte:fragment>

          <a
            href="/blog/{blog.attributes.slug}"
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Read more
            <ArrowRightOutline size="sm" class="ml-2" />
          </a>
        </ArticleAuthor>
      </ArticleWrapper>
    {:else}
      <p>No blogs found</p>
    {/each}
  </BlogBodyWrapper>
</Section>
