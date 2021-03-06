'use strict';

const images = [
  'https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae',
  'https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://media.gettyimages.com/photos/skyline-dallas-texas-america-picture-id623559564?s=612x612',
  'https://media3.s-nbcnews.com/j/newscms/2019_37/3008306/ss-190912-twip-05_a78cf5b1c44cee7e52b935b8983bc000.focal-360x700.jpg',
  'data:image/jpeg;base64,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',
];


const INDEX_SEARCH_KEY = 'current_image';
const RATIO = 16 / 9;
let currentImgIndex = 2;

function getNextIndex (index) {
  return (index + 1) % images.length;
}

function getPrevIndex (index) {
  return (index - 1 + images.length) % images.length;
}

const imageContainer = document.getElementById('imageContainer');

function render (index) {
  const imageElem = document.createElement('img');
  imageElem.setAttribute('src', images[index]);
  imageElem.onload = () => {
    const imageRatio = imageElem.naturalWidth / imageElem.naturalHeight;
    if (imageRatio > RATIO) {
      imageElem.style.width = '100%';
      imageElem.style.height = 'auto';
    } else {
      imageElem.style.width = 'auto';
      imageElem.style.height = '100%';
    }
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElem);
    updateUrl();
  }


}

function updateUrl(){
  history.replaceState(null, null, `?${INDEX_SEARCH_KEY}=${currentImgIndex}`);
  history.pushState(null, null, `?${INDEX_SEARCH_KEY}=${currentImgIndex}`);
  //localStorage.setItem('i', currentImgIndex);
}

window.onload = () => {
  let params = new URLSearchParams(location.search);
  if(params.has(INDEX_SEARCH_KEY)){
    currentImgIndex = params.get(INDEX_SEARCH_KEY);
  }
  render(currentImgIndex)};

const buttonPrev = document.getElementById('prevButton');
buttonPrev.onclick = () => {
  currentImgIndex = getPrevIndex(currentImgIndex);
  render(currentImgIndex);
};

const buttonNext = document.getElementById('nextButton');

buttonNext.onclick = () => {
  currentImgIndex = getNextIndex(currentImgIndex);
  render(currentImgIndex);
};


