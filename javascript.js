function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you, ${nameInput.value}! Form submitted successfully.`);
    
    }
}
const btnElement = document.querySelector('button');
const spanElement = document.querySelector('h1 > span');

btnElement.onclick = function() {
    const yourName = prompt('Please enter your name: ');
    spanElement.textContent = yourName;
}
