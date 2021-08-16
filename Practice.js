const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
  }  
  const json = response => response.json().fetch('/todos.json')
    .then(status)    // Note that the `status` function is called here.
    .then(json)      // Likewise the `json` function is called, json function returns
  // a promise that resolves with `data`
    .then(data => {  
      console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
      console.log('Request failed', error)
    })

    //We call fetch () to get the list of TODO items from the 
    //todos.json file found on the domain root, nd we craeted chain of promises.Promise

    // Returning to the fetch() retuns a reponse.