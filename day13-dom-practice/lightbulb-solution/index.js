const switchBulb = () => {
  const bulb = document.querySelector('#bulb');
  if (bulb.className === 'bulb bulb--off') {
    bulb.className = 'bulb bulb--on';
  } else {
    bulb.className = 'bulb bulb--off';
  }
}