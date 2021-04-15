<script>
  export let src;
  export let alt;
  export let width,height;
  export let full = false;
  let style;
  src = src.split('.')
  src.pop()
  src = src.join(".")
  if (!alt) {
    const [name] = src.split("/").slice(-1)
    alt = name
  }

  function srcsetForExtension(ext) {
    return [360, 720, 1200, 2200].map(size => {

      return `${src}-${size}.${ext} ${size}w`
    }).join(", ")
  }

  style = `flex: ${width / height}`
</script>

<picture style="{style}" class="ml-2 first:ml-0 mb-4 overflow-hidden">
  <source type="image/jpg" srcset="{srcsetForExtension("jpg")}">
  <source type="image/webp" srcset="{srcsetForExtension("webp")}">
  <source type="image/avif" srcset="{srcsetForExtension("avif")}">
  <img class:max-w-screen-2xl="{!full }" width={width} height={height} class="block mx-auto w-full pt-6 h-auto" src="{src}-720.jpg" alt="{alt}">
</picture>
