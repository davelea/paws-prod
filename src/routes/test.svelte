<script context="module">
  import marked from 'marked/lib/marked.esm';

  export async function load() {
    const url = `http://localhost:1337/api/blogs`;
    const res = await fetch(url);
    const data = await res.json();

    let blog;
    let content;

    if (data) {
      blog = data.data[0];
      blog.html = marked(blog.attributes.content);
    }
    return { props: { blog: blog } };
  }
</script>

<script>
  export let blog;
  let content;
</script>

<article>
  <h1>{blog.attributes.title}</h1>

  <summary><em>{blog.attributes.summary}</em></summary>

  <section>{@html blog.html}</section>
</article>
