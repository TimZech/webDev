function displayImages() {
  let images = "";
  imagesArray.forEach((image, index) => {
    images = `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(0)">&times;</span>
              </div>`
  })
  output.innerHTML = images;
}

let imagesArray = []
let output;
let input;
let eventName;
let date;
let location;
let description;
let creatorName;
let creatorSurname;

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("open-eventCreator").addEventListener("click", () => {

    document.getElementById("eventCreator").showModal();

    output = document.getElementById("output");

    eventName = document.getElementById("eventName");
    eventName.addEventListener("change", () => {
    })

    date = document.getElementById("eventDate");
    date.addEventListener("change", () => {
    })

    location = document.getElementById("eventLocation");
    location.addEventListener("change", () => {
    })

    input = document.getElementById("eventPicture");
    input.addEventListener("change", () => {

      const file = input.files;
      imagesArray.push(file[0]);

      displayImages();
    })

  });

  // Listener um den Eventcreator zu schließen
  document.getElementById("close-eventCreator").addEventListener("click", () => {
      document.getElementById("eventCreator").close();
    });

document.getElementById("createEvent").addEventListener("click", () => {
      document.getElementById("eventCreator").close();
    });
});

function deleteImage(index) {
  imagesArray.splice(index, 1);
  displayImages();
}
