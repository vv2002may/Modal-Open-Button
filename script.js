// variables
let openBtn = document.getElementById('open-btn')
let modalContainer = document.getElementById('modal-container')
let closeBtn = document.getElementById('close-btn')

// Event listener
// show modal container on click
openBtn.addEventListener('click', function () {
   modalContainer.style.display = 'block'
}
);

// hide modal container on cross
closeBtn.addEventListener('click', function () {
   modalContainer.style.display = 'none'
}
);

// to remove modal container on clicking anywhere in window
window.addEventListener('click', function (e) {
   if (e.target == modalContainer)
      modalContainer.style.display = 'none'
}
);