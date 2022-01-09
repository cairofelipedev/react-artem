export function getList() {
  return fetch('https://www.artemcardiologia.com.br/api/news')
    .then(data => data.json())
}