const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const errorMsg = 'Fill please all fields';

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert(errorMsg);
    return;
  }

  console.log(formData);

  form.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem('feedback-form-state');
});

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  emailInput.value = formData.email;
  messageInput.value = formData.message;
}
