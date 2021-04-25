export async function getContext() {
  const pages = await Promise.all(
      Object.entries(import.meta.glob('/src/routes/trips/**/*.svelte')).map(
          async ([path, page]) => {
            const url = path
              .replace('/src/routes', '')
              .replace("index.svelte", "")
              .replace(".svelte", "")

              const { metadata } = await page();
              return { ...metadata, url };
          }
      )
  );
  return {
      pages,
  };
}
