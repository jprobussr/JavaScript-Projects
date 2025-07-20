import { catsData } from './data.js';

const emotionRadios = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-image-btn');
const gifsOnlyOption = document.getElementById('gifs-only-option');

const getMatchingCatsArray = () => {
  const selectedEmotion = document.querySelector(
    'input[type="radio"]:checked'
  ).value;
  const isGif = gifsOnlyOption.checked;

  const matchingCatsArray = catsData.filter((cat) => {
    if (isGif) {
      return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
    } else {
      return cat.emotionTags.includes(selectedEmotion);
    }
  });

  if (document.querySelector('input[type="radio"]:checked')) {
    const radioInputs = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    
  }
  return matchingCatsArray
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
