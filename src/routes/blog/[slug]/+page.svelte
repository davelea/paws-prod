<script>
  import { Section, BlogTemplate, Comment, CommentItem } from 'flowbite-svelte-blocks';

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
        profilePicture: rawBlog[0].attributes.author?.data.attributes.avatar?.data.attributes.url
      },
      date: new Date(rawBlog[0].attributes.publishedAt).toLocaleDateString(),
      content: rawBlog[0].attributes.content
    };
  }
</script>

<Section
  name="blogTemplate"
  sectionClass="relative"
  classSection="px-4 pt-4 pb-12 mx-auto max-w-screen-xl lg:py-6 lg:px-6"
  articleCls="prose lg:prose-xl"
>
  <BlogTemplate {blog} classArticle="dark:text-white" />
</Section>
