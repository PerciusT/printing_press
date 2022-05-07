

$(document).ready(function() {
  
  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.card');

    if (entry.isIntersecting) {
      square.classList.add('cardz');
    return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('cardz');
  });
});

observer.observe(document.querySelector('.animethis'));
})
