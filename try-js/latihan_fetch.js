require('isomorphic-fetch')

fetch('https://dekontaminasi.com/api/id/covid19/hospitals')
  .then(res => res.json())
  .then(data => console.table(data))