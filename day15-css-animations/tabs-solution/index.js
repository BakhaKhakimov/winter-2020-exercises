let activeTab = 'tab1';

const activateTab = (tabId) => {
  const linkToActivate = document.querySelector('#' + tabId + 'link');
  const linkToDeactivate = document.querySelector('#' + activeTab + 'link');

  linkToActivate.classList.add('tabs__link--active');
  linkToDeactivate.classList.remove('tabs__link--active');

  const tabElmToHide = document.querySelector('#' + activeTab);
  const tabElmToShow = document.querySelector('#' + tabId);

  tabElmToHide.style.display = 'none';
  tabElmToShow.style.display = 'block';

  activeTab = tabId;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#tab1link').addEventListener(
    'click', () => activateTab('tab1')
  );
  document.querySelector('#tab2link').addEventListener(
    'click', () => activateTab('tab2')
  );
  document.querySelector('#tab3link').addEventListener(
    'click', () => activateTab('tab3')
  );
});
