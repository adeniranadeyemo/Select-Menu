const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const options =  document.getElementsByClassName('options');
const list = document.getElementById('list');
const arrow = document.getElementById('arrow')

for(option of options){
  option.addEventListener('click', function() {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle('rotate');
  });
}

selectField.addEventListener('click', function() {
  list.classList.toggle("hide");
  arrow.classList.toggle('rotate');
});
