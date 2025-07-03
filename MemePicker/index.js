import { catsData } from './data.js';

const emotionRadios = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-image-btn');

const getMatchingCatsArray = () => {
  if (document.querySelector('input[type="radio"]:checked')) {
    const radioInputs = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    console.log(radioInputs);
  }
};

getImageBtn.addEventListener('click', getMatchingCatsArray);

const highlightedCheckedOption = (e) => {
  const radios = document.getElementsByClassName('radio');
  for (let radio of radios) {
    radio.classList.remove('highlight');
  }

  document.getElementById(e.target.id).parentElement.classList.add('highlight');
};

emotionRadios.addEventListener('change', highlightedCheckedOption);

const getEmotionsArray = (cats) => {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
};

const renderEmotionsRadios = (cats) => {
  const emotions = getEmotionsArray(cats);
  let radioItems = '';
  for (let emotion of emotions) {
    radioItems += `
    <div class='radio'>
        <label for=${emotion}>${emotion}</label>
            <input
                type='radio'
                id="${emotion}"
                value="${emotion}"
                name='emotions'
            />
        
    </div>`;
  }
  emotionRadios.innerHTML = radioItems;
};

renderEmotionsRadios(catsData);
