const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


  const imagesEl = document.getElementById('gallery');

const imagesGallery = images.map(image => {
return `<li><img src='${image.url}' alt='${image.alt}'></li>`
}).join('');

imagesEl.insertAdjacentHTML('afterbegin', imagesGallery);
    


//==========через фор и не шаблонные строки

  // for (const image of images){

  //   const imageList = document.createElement('li');
  //   const imageTag = document.createElement('img');

  //   imagesEl.appendChild(imageList);
  //   imageList.appendChild(imageTag);

  //   imageTag.insertAdjacentHTML('afterbegin', image);
  //   imageTag.src = image.url;
   
  // };