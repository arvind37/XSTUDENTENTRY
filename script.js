const nameInputEle = document.querySelector('.name-input');
const ageInputEle = document.querySelector('.age-input');
const gradeInputEle = document.querySelector('.grade-input');
const addbtnEle = document.querySelector('.addbtn');
const clearbtnEle = document.querySelector('.clearbtn');
const nonRenderedEle = document.querySelector('.non-rendered-text');
const renderedEle = document.querySelector('.rendered-details');
const renderBodyEle = document.querySelector('.render-body');

function getDetails() {
  const nameValue = nameInputEle.value;
  const ageValue = ageInputEle.value;
  const gradeValue = gradeInputEle.value;

  nonRenderedEle.classList.add('hide');
  renderedEle.classList.remove('hide');

  renderBodyEle.innerHTML += `
          <div class="render-names">
            <div class="name">${nameValue}</div>
            <div class="age">${ageValue}</div>
            <div class="grade">${gradeValue}</div>
            <button class="btn removebtn">Remove</button>
          </div>
  `;

}

function clearInputValues() {
  nameInputEle.value = '';
  ageInputEle.value = '';
  gradeInputEle.value = '';
}

addbtnEle.addEventListener('click', getDetails);
clearbtnEle.addEventListener('click', clearInputValues);

renderBodyEle.addEventListener('click', (event) => {
  if(event.target.classList.contains('removebtn')){
    const row = event.target.closest('.render-names');
    row.remove();
  }

  if(renderBodyEle.children.length === 0) {
    renderedEle.classList.add('hide');
    nonRenderedEle.classList.remove('hide');
  }
});