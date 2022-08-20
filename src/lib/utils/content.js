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

export function extractTypeFromContent(type, blocks) {
  let result = [];

  for (const { content = [], ...block} of blocks) {
    if (block.type === type) {
      result.push(block)
    }
    result = result.concat(extractTypeFromContent(type, content))
  }

  return result
}

export function readingTimeInMinutes(content) {
  const textBlocks = extractTypeFromContent("text", content);
  const words = textBlocks.map(t => t.text).join(" ").split(" ").length;
  return Math.ceil(words/ 200)
}

export function generateKey(length = 8) {
  return (Math.random() + 1).toString(36).substring(length)
}
