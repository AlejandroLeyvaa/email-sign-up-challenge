import './styles/styles.css';

const invalidData = `
  <article class="Warn-invalid-content">
    <span>
      <figure class="Warn-invalid-figure">
        <img src="../src/assets/images/alert-triangle.svg" alt="">
      </figure>
      <h3 class="Warn-invalid-title">
        Please use valid email
      </h3>
    </span>
    <p class="Warn-invalid-inf">Like: person@inbox.com</p>
  </article>
`;

const warn = document.createElement('section');
warn.id = 'warn';
warn.className = 'Warn-invalid-container';

const confirm = document.createElement('section');
confirm.id = 'confirm';
confirm.className = 'Confirm-valid-container';

const validData = `
<article class="Confirm-valid-content">
  <span>
    <figure class="Confirm-valid-figure">
      <img src="../src/assets/images/check.svg" alt="">
    </figure>
    <h3 class="Confirm-valid-title">Yay! Thank you</h3>
  </span>
  <p class="Confirm-valid-inf">We've sent a confirmation link <br> to yout inbox</p>
</article>
`;

const form = document.getElementById('form');
const getWarnElement = document.getElementById('warn')
const mainContent = document.getElementById('main-content');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const mainContent = document.getElementById('main-content');
  const email = document.getElementById('email').value;
  if (email.includes('@')) {
    confirm.innerHTML = validData;
    mainContent.appendChild(confirm);
    location = '/confirm'
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
    const getWarnElement = document.getElementById('warn')

    if (!input.includes('@')) {
      warn.innerHTML = invalidData;
      mainContent.appendChild(warn);
      confirm.remove();
      console.log('100');
      console.log('Warn', getWarnElement);
    } else {
      getWarnElement.remove();
    }
  });
