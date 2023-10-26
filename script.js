// Header function

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("header-scroll");
    } else {
      $(".header").removeClass("header-scroll");
    }
  });
});

// Silder for Parents



// Newsletter
// Add this in your existing script or create a new JavaScript file

window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.75) {
    document.getElementById('popupContainer').style.display = 'block';
  }
});

function closePopup() {
  // document.getElementById('popupContainer').style.display = 'none';
  let formHidden = false;
  const popupContainer = document.getElementById('popupContainer');
  const popup = document.getElementById('popup');

  if (!formHidden) {
    popup.style.display = 'none';
    formHidden = true;
  } else {
    // Display the popup and reset formHidden after 1 minute
    setTimeout(() => {
      popup.style.display = 'block';
      formHidden = false;
    }, 60000); // 1 minute = 60,000 milliseconds
  }

  popupContainer.style.display = 'none';
}



function subscribe(event) {
  event.preventDefault(); // Prevent form submission (for demo purposes)
  const email = document.getElementById('email').value;
  const userType = document.querySelector('input[name="userType"]:checked');

  if (email && userType) {
    // Handle form submission (e.g., send the data to a server)
    console.log('Email:', email);
    console.log('User Type:', userType.value);
    alert('Thank you for subscribing!');
    closePopup();
  }
}
