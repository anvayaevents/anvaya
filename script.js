<<<<<<< HEAD
// Sample of your JSON data (You can also fetch this from a .json file)
const imageData = [
    { "image_name": 1, "extensions": { "jpg": "1.JPG" } },
    { "image_name": 2, "extensions": { "jpg": "2.JPG" } },
    { "image_name": 3, "extensions": { "jpg": "3.JPG" } }
    // ... add all 182 items here
];

const container = document.getElementById('gallery-container');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');

// 1. Generate Gallery Items
function loadGallery() {
    imageData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        
        // Path logic: assuming images are in a folder named 'images'
        const imgPath = `images/${item.extensions.jpg}`; 
        
        div.innerHTML = `<img src="${imgPath}" alt="Event Image ${item.image_name}" loading="lazy">`;
        
        div.onclick = () => {
            modal.style.display = "block";
            modalImg.src = imgPath;
        };
        
        container.appendChild(div);
    });
}

// 2. Close Modal Logic
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// Initialize
=======
// Sample of your JSON data (You can also fetch this from a .json file)
const imageData = [
    { "image_name": 1, "extensions": { "jpg": "1.JPG" } },
    { "image_name": 2, "extensions": { "jpg": "2.JPG" } },
    { "image_name": 3, "extensions": { "jpg": "3.JPG" } }
    // ... add all 182 items here
];

const container = document.getElementById('gallery-container');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');

// 1. Generate Gallery Items
function loadGallery() {
    imageData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        
        // Path logic: assuming images are in a folder named 'images'
        const imgPath = `images/${item.extensions.jpg}`; 
        
        div.innerHTML = `<img src="${imgPath}" alt="Event Image ${item.image_name}" loading="lazy">`;
        
        div.onclick = () => {
            modal.style.display = "block";
            modalImg.src = imgPath;
        };
        
        container.appendChild(div);
    });
}

// 2. Close Modal Logic
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// Initialize
>>>>>>> e110670 (Upload images and update gallery design)
loadGallery();