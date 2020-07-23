function addPricingEventListeners() {
  const pricingButtons = document.querySelectorAll('.pricing-list__summary-heading');

  pricingButtons.forEach(button => {
    button.addEventListener('click', togglePricingVisibility);
  });
}

function togglePricingVisibility(event) {
  console.log(event.currentTarget.parentElement);
  const contentSection = event.currentTarget.parentElement.parentElement.querySelector('.pricing-list__content');

  if (contentSection.classList.contains('paws-hide')) {
    contentSection.classList.remove('paws-hide');
  } else {
    contentSection.classList.add('paws-hide');
  }
}

addPricingEventListeners();
