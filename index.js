// Add your code here
let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

fetch("http://localhost:3000/dogs", configurationObject);

configurationObject = {
  method: "POST"
  headers: {
    "Content-Type": "application/json"
    "Accept": "application/json"
  }
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
};
