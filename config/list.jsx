export function getList() {
  return fetch('https://app-strapi-artem.herokuapp.com/posts')
    .then(data => data.json())
}