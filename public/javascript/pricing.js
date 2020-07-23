function addPricingEventListeners() {
  const pricingButtons = document.querySelectorAll('.pricing-list__summary-heading');

  pricingButtons.forEach(button => {
    button.addEventListener('click', togglePricingVisibility);
  });
}

function togglePricingVisibility(event) {
  console.log(event.currentTarget.parentElement);
  // TODO: use closest or something cleaner
  const contentSection = event.currentTarget.parentElement.parentElement.querySelector('.pricing-list__content');

  const chevron = event.currentTarget.querySelector('.pricing-list__summary-action > i')

  if (contentSection.classList.contains('paws-hide')) {
    contentSection.classList.remove('paws-hide');

    chevron.classList.add('paws-rotate-90');
  } else {
    contentSection.classList.add('paws-hide');
    chevron.classList.remove('paws-rotate-90');
  }
}

addPricingEventListeners();
