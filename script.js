var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// Modal functionality
var modal = document.getElementById("modal");
var modalText = document.getElementById("modal-text");
var closeModal = document.getElementsByClassName("close")[0];

// Open modal when clicking on a slide
document.querySelectorAll(".swiper-slide").forEach(function(slide) {
  slide.addEventListener("click", function() {
    var content = this.getAttribute("data-content");
    modalText.textContent = content;
    modal.style.display = "block";
  });
});

// Close modal when clicking on the close button
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
