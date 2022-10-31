fetchInfo()

function fetchInfo() {
    fetch('https://restcountries.eu/rest/v2/all') 
      .then(response => response.json())
      .then(jsonObj => displayUi(jsonObj))
      .catch(() => alert('API Could not be reached at this time'))
      console.log(jsonObj)
  }