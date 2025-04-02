const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const textImages = {
    pic1: "Alternative text of image 1",
    pic2: "Alternative text of image 2",
    pic3: "Alternative text of image 3",
    pic4: "Alternative text of image 4",
    pic5: "Alternative text of image 5",
}

/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images[i]}`);
    newImage.setAttribute('alt', textImages[ images[i].replace('.jpg', '') ]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (e) => {
    const imagePath = e.target.src;
    const imageText = e.target.alt;
    displayedImage.setAttribute('src', imagePath);
    displayedImage.setAttribute('alt', imageText);
});

btn.addEventListener('click', (e) => {
    overlay.classList.toggle('visible');
});

/* Wiring up the Darken/Lighten button */
