export function enrichContentWithFiles(content, files) {
  return content.map(block => {
    if (block?.attrs?.id) {
      const file = files.find(f => f.id == block.attrs.id)
      if (file) {
        block.attrs.file = file
        block = { ...file, ...block }
      }
    }
    if (block.content) {
      block.content = enrichContentWithFiles(block.content, files)
    }
    return block
  })
}
