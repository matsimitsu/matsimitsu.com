export const STORE_KEY = "mm-seen-posts";
const toString = (value) => JSON.stringify(value, null, 2)

export const getSeenPosts = () => {
  // Set default if it doesn't exist
  if (localStorage.getItem(STORE_KEY) === null) {
    localStorage.setItem(STORE_KEY, toString([]))
  }
  return JSON.parse(localStorage.getItem(STORE_KEY))
}

export const setSeenPost = (post) => {
  const oldPosts = getSeenPosts();
  const newPosts = oldPosts.includes(post) ? [...oldPosts] : [...oldPosts, post]
  localStorage.setItem(STORE_KEY, toString(newPosts))
  return newPosts;
}
