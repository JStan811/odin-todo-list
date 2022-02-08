const renderPage = () => {
  createGridContainer();
  createMainHeading();
  createListContainer();
  createTaskContainer();
}

const createGridContainer = () => {
  const body = document.querySelector('body');

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid');

  body.appendChild(gridContainer);
}

const createMainHeading = () => {
  const heading = document.createElement('h1');
  const gridContainer = document.querySelector('.grid');

  heading.textContent = 'Todo List';

  gridContainer.appendChild(heading);
}

const createListContainer = () => {
  const listContainer = document.createElement('div');
  const gridContainer = document.querySelector('.grid');

  listContainer.classList.add('list-container');

  gridContainer.appendChild(listContainer);
}

const createTaskContainer = () => {
  const taskContainer = document.createElement('div');
  const gridContainer = document.querySelector('.grid');

  taskContainer.classList.add('task-container');

  gridContainer.appendChild(taskContainer);
}

export {
  renderPage,
};
