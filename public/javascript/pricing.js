function addPricingEventListeners() {
  const pricingButtons = document.querySelectorAll('.pricing-list__summary-heading');

  pricingButtons.forEach(button => {
    button.addEventListener('click', handlePricingItemClick);
  });
}

function handlePricingItemClick(event) {
  // TODO: use closest or something cleaner
  const contentSection = event.currentTarget.parentElement.parentElement.querySelector('.pricing-list__content');
  const chevron = event.currentTarget.querySelector('.pricing-list__summary-action > i');

  togglePricingVisibility(contentSection, chevron);
}

function hashSetup() {
  let hash = window.location.hash.substr(1);
  
  if (hash) {
    console.log(hash);
    const pricingListItem = document.querySelector(`#${hash}`);

    // don't toggle if element is already visible
    if (pricingListItem && pricingListItem.parentElement.nextElementSibling.classList.contains('paws-hide')) {
      togglePricingVisibility(pricingListItem.parentElement.nextElementSibling, pricingListItem.querySelector('.pricing-list__summary-action > i'));
    }
  }
}

function init() {
  hashSetup();
  addPricingEventListeners();
}

function togglePricingVisibility(contentSection, chevron) {
  if (contentSection.classList.contains('paws-hide')) {
    contentSection.classList.remove('paws-hide');

    chevron.classList.add('paws-rotate-90');
  } else {
    contentSection.classList.add('paws-hide');
    chevron.classList.remove('paws-rotate-90');
  }
}

init();
