const caffeForm = document.querySelector("#add-cafe-form");
caffeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("adding new Caffe to the list");
  db.collection("caffes").add({
    name: caffeForm["name"].value,
    city: caffeForm["city"].value,
    location: caffeForm["location"].value,
  });
  caffeForm["name"].value = "";
  caffeForm["location"].value = "";
  caffeForm["city"].value = "";
});
