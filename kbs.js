// Wait for 3 seconds (3000 milliseconds) and then change the overlay height to 0px
setTimeout(function () {
    document.getElementById("overlay").style.height = "0px";
  }, 3000);

  // Wait for 3 seconds (3000 milliseconds) and then change the overlay height to 0px
  setTimeout(function () {
    document.getElementById("loader").style.margin = "0px 0px 900px 0px";
  }, 2600);
   // Find the element with the 'delete' class
const elementToDelete = document.querySelector('.delete');

// Function to remove the element
function removeElement() {
  if (elementToDelete) {
    elementToDelete.parentNode.removeChild(elementToDelete);
  }
}

// Remove the element after 4 seconds
setTimeout(removeElement, 4000); // 4000 milliseconds = 4 seconds
$(document).ready(function() {
    setTimeout(function() {
      $('.create').attr('id', 'slide');
    }, 2650); // 3000 milliseconds = 3 seconds
  });
  
  $(document).ready(function() {
    setTimeout(function() {
      $('.createe').attr('id', 'slidee');
    }, 2850); // 3000 milliseconds = 3 seconds
  });
  // Add a class after 3 seconds to trigger the transition
setTimeout(function() {
    document.getElementById('slide').classList.add('appear');
  }, 3100); // 3000 milliseconds = 3 seconds
  
  setTimeout(function() {
    document.getElementById('slidee').classList.add('appear');
  }, 2980); // 3000 milliseconds = 3 seconds
  const header = document.querySelector("header");
  const hamburgerBtn = document.querySelector("#hamburger-btn");
  const closeMenuBtn = document.querySelector("#close-menu-btn");

  // Toggle mobile menu on hamburger button click
  hamburgerBtn.addEventListener("click", () =>
    header.classList.toggle("show-mobile-menu")
  );

  // Close mobile menu on close button click
  closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
  function function3() { 
    swal("Success!", "Your data have been saved. Thank you!", "success");
  }
  function function4() { 
    swal("Sorry!", "Opps, something went wrong. Please try again later.", "error");
  }
  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var slideElement = document.querySelector('.slide');
        var slidePosition = slideElement.getBoundingClientRect().top;

        if (slidePosition < window.innerHeight) {
            slideElement.style.opacity = '1';
            slideElement.style.transform = 'translateY(0)';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var slideElement = document.querySelector('.slidet');
        var slidePosition = slideElement.getBoundingClientRect().top;

        if (slidePosition < window.innerHeight) {
            slideElement.style.opacity = '1';
            slideElement.style.transform = 'translateY(0)';
        }
    });
});
  // This line declares a variable called "url" and assigns it a value of "Api_Endpoint_Url"
  let url =
  "https://script.google.com/macros/s/AKfycbwVUPLNNDAeOrMLG5lDLZZRBtGrW4rbMGNkOYgbx7vBqL56zcfDdOWfDD2zdpuY10lxrw/exec";
// This line declares a variable called "file" and assigns it the value of the first input element on the page
let file = document.getElementById("image");
// This line declares a variable called "img" and assigns it the value of the first image element on the page
let img = document.getElementById("img-prew");
// This line adds an event listener to the "change" event of the "file" input element
let obj = {};
file.addEventListener("change", () => {
  // This line creates a new FileReader object called "fr"
  let fr = new FileReader();
  // This line adds an event listener to the "loadend" event of the FileReader object
  fr.addEventListener("loadend", () => {
    // This line declares a variable called "res" and assigns it the result of the FileReader object
    let res = fr.result;
    // This line sets the "src" attribute of the "img" element to the value of "res"
    img.src = res;
    // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
    let spt = res.split("base64,")[1];
    // This line creates an object called "obj" with three properties: "base64", "type", and "name"
    obj = {
      base64: spt,
      type: file.files[0].type,
      name: file.files[0].name,
    };
    // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
  });
  // This line reads the selected file as a data URL
  fr.readAsDataURL(file.files[0]);
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbznN1ErnKh1hV6WTFU8yDFOuN_zsmggfmp_8TUjJ_GxVvXrJv32hJaE-kX8I_2lR383/exec";
const from = document.forms["submit-formm"];

from.addEventListener("submit", (e) => {
  e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(from) })
      .then((response) => {
        // Use swal instead of alert
        swal("Success!", "Your form has been submitted successfully. Thank you!", "success")
          .then(() => {
            // Redirect to index.html after user clicks "OK" on SweetAlert
            window.location.href = "index.html";
          });
      })
      .catch((error) => {
        console.log(error);
      });

  fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
  })
    // This line waits for the response from the server and converts it to text
    .then((r) => r.text())
    // This line logs the response data to the console
    .then((data) => console.log(data));
});