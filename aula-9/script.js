const datas = require("./data.json")

console.log(datas)

const fetchData = async () => {
  const people = await fetch('https://servicodados.ibge.gov.br/api/v1/produtos/estatisticas')
  const data = await people.json()
  console.log(data)
}

fetchData();