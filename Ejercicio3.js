const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  const filterList = arrCities.filter(arrCities =>{
    return arrCities.country === 'Spain' && arrCities.capital === false
  }).map(arrCities =>({
    city: arrCities["city"]
  }));
  
  console.log(JSON.stringify(filterList))