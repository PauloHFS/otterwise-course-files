window.onload = () => {
  const paragrafos = document.querySelectorAll('p');

  setTimeout(() => {
    paragrafos[0].remove();
  }, 1000);

  paragrafos[1].innerText = 'ESSE TEXTO FOI MUDADO';
};
