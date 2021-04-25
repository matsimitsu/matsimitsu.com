export function get({context}) {
  return {
    body: context.posts,
  };
}
