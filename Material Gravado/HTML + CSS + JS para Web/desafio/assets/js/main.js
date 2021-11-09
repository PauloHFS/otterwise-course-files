const IMAGE_DIR = './assets/images/';

function createMenuButtonClosed() {
  try {
    const previousMenu = document.querySelector('#menu-opened');
    previousMenu.parentElement.removeChild(previousMenu);
  } catch (error) {
    console.log(error);
  }

  const header = document.querySelector('header');
  const menuClosed = document.createElement('img');

  menuClosed.setAttribute('src', IMAGE_DIR + 'Hamburguer.png');
  menuClosed.setAttribute('alt', '');
  menuClosed.setAttribute('class', 'menu');
  menuClosed.setAttribute('id', 'menu-closed');

  menuClosed.addEventListener('click', () => {
    document.querySelector('#nav-bar').setAttribute('style', 'display:block');
    createMenuButtonOpened();
  });

  header.appendChild(menuClosed);
}

function createMenuButtonOpened() {
  try {
    const previousMenu = document.querySelector('#menu-closed');
    previousMenu.parentElement.removeChild(previousMenu);
  } catch (error) {
    console.log(error);
  }

  const header = document.querySelector('header');
  const menuOpened = document.createElement('img');

  menuOpened.setAttribute('src', IMAGE_DIR + 'Hamburguer-close.png');
  menuOpened.setAttribute('alt', '');
  menuOpened.setAttribute('class', 'menu');
  menuOpened.setAttribute('id', 'menu-opened');

  menuOpened.addEventListener('click', () => {
    document.querySelector('#nav-bar').setAttribute('style', 'display:none');
    createMenuButtonClosed();
  });

  header.appendChild(menuOpened);
}

window.onload = () => {
  createMenuButtonClosed();
};
