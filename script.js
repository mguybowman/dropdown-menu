const dropdownMenus = document.getElementsByClassName('dropdownMenu');

function getDropdownMenuButtons() {
  const dropdownMenuButtons = [];
  for (let i = 0; i < dropdownMenus.length; i += 1) {
    const buttons = dropdownMenus[i].getElementsByClassName('button');
    dropdownMenuButtons.push(buttons[0]);
  }
  return dropdownMenuButtons;
}

document.addEventListener('click', (e) => {
  for (let i = 0; i < getDropdownMenuButtons().length; i += 1) {
    const currentButton = getDropdownMenuButtons()[i];
    const currentMenu = currentButton.parentElement;
    const currentOptions = currentMenu.getElementsByClassName('options')[0];
    const optionArray = currentOptions.getElementsByClassName('option');

    let maxHeight = 0;
    for (let i = 0; i < optionArray.length; i += 1) {
      maxHeight += optionArray[i].offsetHeight;
    }
    maxHeight += 'px';

    if (e.path.includes(currentButton) && currentButton.dataset.open === 'closed') {
      currentMenu.style.zIndex = 1;
      currentButton.dataset.open = 'open';
      currentOptions.style.maxHeight = maxHeight;
    } else {
      currentMenu.style.zIndex = 0;
      currentButton.dataset.open = 'closed';
      currentOptions.style.maxHeight = '0px';
    }
  }
});
