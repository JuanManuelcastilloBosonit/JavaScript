const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ]

  const filterList = arrNames.filter(arrNames=>{
    return arrNames.id==3;
  }).map(arrNames =>({
    id:arrNames["id"],
    name: arrNames["name"]
  }))

  console.log(JSON.stringify(filterList))