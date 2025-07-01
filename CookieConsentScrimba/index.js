const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const modalInner = document.getElementById('modal-inner');
const declineBtn = document.getElementById('decline-btn');
const buttonContainer = document.getElementById('modal-choice-btns')


setTimeout(() => {
  modal.style.display = 'inline';
}, 1500);

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

consentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginformData = new FormData(consentForm);
  const name = loginformData.get('fullName');
  const email = loginformData.get('email');
  console.log(name, email);

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>
  `;

  setTimeout(() => {
    document.getElementById('upload-text').innerText = `Making the sale...`;
  }, 2000);

  setTimeout(() => {
    modalCloseBtn.disabled = false;
    document.getElementById('modal-inner').innerHTML = `
  
    <h2>Thanks <span>${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>`;
  }, 4000);
});

declineBtn.addEventListener('mouseover', () => {
  buttonContainer.classList.toggle('reverse')
});
