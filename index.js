// Add your code here
let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};


let configurationObject = {
  method: "POST"
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
  body: JSON.stringify(formData)
};

function submitData() {
  return fetch("http://localhost:3000/dogs", configurationObject)
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
