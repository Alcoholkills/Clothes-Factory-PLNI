function removeImage() {
    var imagesDiv = document.getElementsByClassName('Image');
    for (var i = 0; i < imagesDiv.length; i++) {
        if (imagesDiv[i].hasAttribute('hidden')) {
            if (i - 1 < 0) return;
            imagesDiv[i - 1].setAttribute('hidden', true);
            return;
        }
    }
    imagesDiv[imagesDiv.length - 1].setAttribute('hidden', true);
};

function addImage() {
    var imagesDiv = document.getElementsByClassName('Image');
    for (var i = 0; i < imagesDiv.length; i++) {
        if (imagesDiv[i].hasAttribute('hidden')) {
            imagesDiv[i].removeAttribute('hidden');
            return;
        }
    }
}

document.getElementById('-').addEventListener('click', removeImage);
document.getElementById('+').addEventListener('click', addImage);