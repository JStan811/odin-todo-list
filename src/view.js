const renderPage = () => {
  const body = document.querySelector('body');

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid');

  body.appendChild(gridContainer);
}

export {
  renderPage,
};
