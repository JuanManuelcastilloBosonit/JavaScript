const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  const filterList =arrCities2
    .filter(arrCities2 => {
        return arrCities2.country === 'Spain' && arrCities2.capital ===false;
    })
    .map(arrCities2 => ({
        city:arrCities2["city"],
        isSpain: arrCities2["country"] === 'Spain'
    }));

    console.log(filterList)