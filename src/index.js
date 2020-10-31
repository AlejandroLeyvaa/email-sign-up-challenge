import validData from './components/validData';
import invalidData from './components/invalidData';
import './styles/styles.css';


const warn = document.createElement('section');
warn.id = 'warn';
warn.className = 'Warn-invalid-container';

const confirm = document.createElement('section');
confirm.id = 'confirm';
confirm.className = 'Confirm-valid-container';

const form = document.getElementById('form');
const mainContent = document.getElementById('main-content');



form.addEventListener('submit', (e) => {
  e.preventDefault();

  const main = document.getElementById('main');
  const mainContent = document.getElementById('main-content');
  const email = document.getElementById('email').value;

  const data = { "username": email };
  if (email.includes('@')) {
    confirm.innerHTML = validData;
    mainContent.appendChild(confirm);
    console.log(email);
    // fetch('http://localhost:3001/user-email', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then((res) => res.json())
    //   .catch((error) => console.error('Error', error))
    //   .then((response) => console.log('Success:', response))
    //   .then((require) => console.log('Require', require));
    location = '#/confirm'

    if (location.hash === '#/confirm') {
      mainContent.remove();
      const section = document.createElement('section');
      section.className = 'Confirm-valid-container';

      section.innerHTML = validData
      main.appendChild(section);
    }

    console.log(location);
  } else {
    confirm.remove();
  }
  console.log(e);
});

const email = document
  .getElementById('email')
  .addEventListener('input', (e) => {
    const input = e.target.value;
    console.log('input', input);
    const getWarnElement = document.getElementById('warn');

    if (input.length > 10 && !input.includes('@')) {
      warn.innerHTML = invalidData;
      mainContent.appendChild(warn);
      confirm.remove();
      console.log('100');
      console.log('Warn', getWarnElement);
    } else {
      getWarnElement.remove();
    }
  });
