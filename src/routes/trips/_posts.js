import path from 'path';
import matter from 'gray-matter';

const postPaths = import.meta.glob("./**/*.svx")
export const posts = Object.keys(postPaths).map(postFilename => {
  const postFrontMatter = matter.read(`./src/routes/trips/${postFilename.replace('./', '')}`);
  const slug = path.basename(postFilename, '.svx')
  return {
    slug,
    path: postFilename.replace('./', '/trips/').replace('.svx', ''),
    trip: path.dirname(postFilename).replace('./', ''),
    ...postFrontMatter.data,
  };
})

export default posts;
