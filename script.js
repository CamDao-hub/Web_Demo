//Nút play
const playBtn = document.querySelector('.hero button');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    alert("Playing rocket intro video... (demo)");
  });
}
//Nút try demo

document.querySelectorAll('a.btn.btn-warning').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Demo is not available yet.");
  });
});

//Nút buy now
const buyNowBtn = document.querySelector('.btn.btn-outline-light');
if (buyNowBtn) {
  buyNowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Redirecting to rocket purchase page...");
  });
}

//Nút learn more
document.querySelectorAll('a.text-danger').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Opening details... (demo mode)");
  });
});

//Nút all stories
const allStoriesBtn = document.querySelector('.btn.btn-lg.text-white');
if (allStoriesBtn) {
  allStoriesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Showing all rocket stories...");
  });
}
//Form
const newsletterForm = document.querySelector('form.d-flex');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please enter your email.");
    } else {
      alert(`Subscribed successfully: ${email}`);
      emailInput.value = "";
    }
  });
}

document.querySelectorAll('footer .bi').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    alert("This social link is not active in demo mode.");
  });
});
