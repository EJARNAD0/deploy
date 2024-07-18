window.onload = () => {
   document.querySelector('.loader-container').classList.add('active');
   setTimeout(() => {
       document.querySelector('.loader-container').style.display = 'none';
   }, 2000);
};
