// Buttons
const clickButton = document.getElementById('display-name-button');

clickButton.addEventListener('click', () => {
    document.getElementById('display-name').classList = 'alert alert-success';
});

// Mouse Over
const lightBulb = document.getElementById('light-bulb');
lightBulb.addEventListener('mouseover', () => {
    lightBulb.src = './images/light-bulb-on.png';
});
lightBulb.addEventListener('mouseout', () => {
    lightBulb.src = './images/light-bulb-off.png';
});

// Toggle
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    document.getElementById('toggle-alert').classList.toggle('invisible');
});

// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
const formValidate = document.getElementById('form-validate');
const valInput = document.getElementById('form-validate-first-name');
formValidate.addEventListener('submit', (event) => {
    event.preventDefault();
    if ((valInput.value).length < 3) {
        valInput.classList.add('is-invalid');
        valInput.classList.remove('is-valid');
    } else {
        valInput.classList.add('is-valid');
        valInput.classList.remove('is-invalid');
    }
});

// Challenge: Lists
const formList = document.getElementById('form-hobby');

formList.addEventListener('submit', (event) => {
    event.preventDefault();
    const hobbyInput = document.getElementById('form-hobby-text').value;
    const topNode = document.getElementById('hobby-list');
    const listNode = document.createElement('li');
    const newHobby = document.createTextNode(hobbyInput);
    listNode.className = 'list-group-item';
    listNode.appendChild(newHobby);
    topNode.appendChild(listNode);
});

// Challenge: Lists (Part 2)
const selectedUl = document.getElementById('hobby-list-2');

selectedUl.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        const delNode = event.target.parentElement;
        selectedUl.removeChild(delNode);
    }
});
