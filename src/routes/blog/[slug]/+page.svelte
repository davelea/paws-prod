<script>
  import { Section, BlogTemplate } from 'flowbite-svelte-blocks';

  export let data = [];

  const rawBlog = data?.blogs.data;
  let blog;

  if (rawBlog.length) {
    blog = {
      id: rawBlog[0].id,
      title: rawBlog[0].attributes.title,
      author: {
        name: rawBlog[0].attributes.author?.data.attributes.firstname,
        title: rawBlog[0].attributes.author?.data.attributes.firstname,
        avatar: rawBlog[0].attributes.author?.data.attributes.avatar?.data.attributes.url
      },

      date: new Date(rawBlog[0].attributes.publishedAt).toLocaleDateString(),
      content: rawBlog[0].attributes.content
    };
  }
</script>

<Section sectionClass="relative" classDiv="px-4 py-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
    <article
      class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert dark:text-white"
    >
      <header class="mb-4 lg:mb-6 not-format">
        <address class="flex items-center mb-6 not-italic">
          <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              class="mr-2 w-6 h-6 rounded-full"
              src={blog.author.avatar}
              alt={blog.author.name}
            />
            <div>
              <p class="text-base font-light text-gray-500 dark:text-gray-400">
                {blog.author.name}
              </p>
              <p class="text-base font-light text-gray-500 dark:text-gray-400">
                <time title={blog.date}>{blog.date}</time>
              </p>
            </div>
          </div>
        </address>
        <h1
          class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
        >
          {blog.title}
        </h1>
      </header>

      <section class="prose lg:prose-xl">
        {@html blog.content}
      </section>
    </article>
  </div>
</Section>
