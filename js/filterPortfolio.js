(() => {
  const menuListRef = document.querySelector('.portfolio__list');
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const portfolioDataList = document.querySelector('[data-portfolio-list]');
  const portfolioDataItem = document.querySelectorAll('.portfolio__element');
  const listButtons = document.querySelectorAll('.buttons');

  menuListRef.addEventListener('click', clickFilter);

  function clickFilter(e) {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    const currentBtn = e.target;
    currentBtn.classList.add('buttons--active');

    listButtons.forEach(item => {
      if (item !== currentBtn) {
        item.classList.remove('buttons--active');
      }
    });

    const currentBtnAttribute = currentBtn.getAttribute('data-filter');

    portfolioDataItem.forEach(item => {
      if (currentBtnAttribute === 'all') {
        item.classList.remove('visually-hidden');
        return;
      }
      item.classList.add('visually-hidden');

      if (item.getAttribute('data-filter') === currentBtnAttribute) {
        item.classList.remove('visually-hidden');
        return;
      }
    });
  }
})();
