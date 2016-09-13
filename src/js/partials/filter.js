var radio = document.getElementsByClassName('events-timetable__radio');
var list = document.getElementById('eventsList');

for (var i = 0; i < radio.length; i++) {
  radio[i].addEventListener('change', filterItems);
}

function filterItems() {
  var items = list.getElementsByClassName('events-timetable__item');
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(this.value)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}
