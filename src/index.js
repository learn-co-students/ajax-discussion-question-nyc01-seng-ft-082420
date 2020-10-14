const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let obj = data['results'][0]
    console.log(obj)
    const nameField = document.getElementById('fullname')
    nameField.textContent = obj.name.first +" " + obj.name.last
  })
});
