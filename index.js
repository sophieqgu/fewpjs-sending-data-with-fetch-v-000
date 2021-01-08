// Add your code here





function submitData(name, email) {
  let formData = {
    name: name.
    email: email
  };

  let configurationObject = {
    method: "POST"
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
    body: JSON.stringify(formData)
  };




  return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
        return response.json();
      })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
}
