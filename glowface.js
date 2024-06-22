const imageInput = document.getElementById('imageInput');
const uploadedImage = document.getElementById('uploadedImage');
const imageContainer = document.querySelector('.image-container');

//landscape
document.getElementById('changeImageButton').addEventListener('click', function() {
    document.getElementById('uploadedImage').src = 'landscape.png';
  });
  document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('uploadedImage').src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  });
    
// UPLOAD IMAGE
imageInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          uploadedImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    });

//rotate
imageContainer.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY, target } = event;
    const { clientWidth, clientHeight } = target;
    const centerX = clientWidth / 2;
    const centerY = clientHeight / 2;
    const rotateX = (offsetY - centerY) / centerY * 15;
    const rotateY = (centerX - offsetX) / centerX * 15;

    uploadedImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


// MOVE CURSOR BACK
imageContainer.addEventListener('mouseleave', () => {
      uploadedImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });