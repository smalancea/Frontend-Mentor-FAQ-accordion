const accordion = document.getElementsByClassName('container');
const iconPlus = document.getElementsByClassName('icon-plus');
const iconMinus = document.getElementsByClassName('icon-minus');

for (let i = 0; i < accordion.length; i++) {
  // Hide iconMinus initially
  iconMinus[i].classList.add('hidden');

  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');

    // Toggle visibility of iconPlus and iconMinus
    iconPlus[i].classList.toggle('hidden');
    iconMinus[i].classList.toggle('hidden');
  });
}
