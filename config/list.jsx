export function getList() {
  return fetch('http://localhost:3000/api/news')
    .then(data => data.json())
}