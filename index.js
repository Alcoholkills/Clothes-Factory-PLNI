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

function disableNeckShirt() {
    // Clothes.T-Shirt, Clothes.Sweeter, Clothes.TankTop `mutex` Neck.Shirt
    var mutexArray = ['tshirt', 'sweeter', 'tanktop'];
    var checked = document.querySelector('input[name="clothe"]:checked');
    var neckShirt = document.getElementById('shirtneck');
    if (mutexArray.includes(checked.id)) {
        neckShirt.checked = false;
        neckShirt.disabled = true;
        return;
    }
    neckShirt.disabled = false;
}

function disableNeckTurtle() {
    // - Clothes.Hoodie, Clothes.TankTop `mutex` Neck.Turtle
    var mutexArray = ['hoodie', 'tanktop']
    var checked = document.querySelector('input[name="clothe"]:checked');
    var neckTurtle = document.getElementById('turtle');
    if (mutexArray.includes(checked.id)) {
        neckTurtle.checked = false;
        neckTurtle.disabled = true;
        return;
    }
    neckTurtle.disabled = false;
}

function disableSleeves1() {
    // - Clothes.TankTop, Clothes.T-Shirt, ImageSize.Large `mutex` ImagePlaces.RightSleeve
    // - Clothes.TankTop, Clothes.T-Shirt, ImageSize.Large `mutex` ImagePlaces.LeftSleeve
    var mutexArray = ['tshirt', 'tanktop', 'large1'];
    var clothesChecked = document.querySelector('input[name="clothe"]:checked') ? document.querySelector('input[name="clothe"]:checked') : '';
    var image1Checked = document.querySelector('input[name="imagesize1"]:checked') ? document.querySelector('input[name="imagesize1"]:checked') : '';
    var imagePlaceRightSleeve1 = document.getElementById('rsleeve1');
    var imagePlaceLeftSleeve1 = document.getElementById('lsleeve1');
    if (mutexArray.includes(clothesChecked.id) || mutexArray.includes(image1Checked.id)) {
        imagePlaceRightSleeve1.checked = false;
        imagePlaceRightSleeve1.disabled = true;
        imagePlaceLeftSleeve1.checked = false;
        imagePlaceLeftSleeve1.disabled = true;
        return;
    }
    imagePlaceRightSleeve1.disabled = false;
    imagePlaceLeftSleeve1.disabled = false;
}

function disableSleeves2() {
    // - Clothes.TankTop, Clothes.T-Shirt, ImageSize.Large `mutex` ImagePlaces.RightSleeve
    // - Clothes.TankTop, Clothes.T-Shirt, ImageSize.Large `mutex` ImagePlaces.LeftSleeve
    var mutexArray = ['tshirt', 'tanktop', 'large2'];
    var clothesChecked = document.querySelector('input[name="clothe"]:checked') ? document.querySelector('input[name="clothe"]:checked') : '';
    var image2Checked = document.querySelector('input[name="imagesize2"]:checked') ? document.querySelector('input[name="imagesize2"]:checked') : '';
    var imagePlaceRightSleeve2 = document.getElementById('rsleeve2');
    var imagePlaceLeftSleeve2 = document.getElementById('lsleeve2');
    if (mutexArray.includes(clothesChecked.id) || mutexArray.includes(image2Checked.id)) {
        imagePlaceRightSleeve2.checked = false;
        imagePlaceRightSleeve2.disabled = true;
        imagePlaceLeftSleeve2.checked = false;
        imagePlaceLeftSleeve2.disabled = true;
        return;
    }
    imagePlaceRightSleeve2.disabled = false;
    imagePlaceLeftSleeve2.disabled = false;
}

function disableSleeves3() {
    // - Clothes.TankTop, Clothes.T-Shirt, ImageSize.Large `mutex` ImagePlaces.LeftSleeve
    // - Clothes.TankTop, Clothes.T-Shirt, ImageSize.Large `mutex` ImagePlaces.RightSleeve
    var mutexArray = ['tshirt', 'tanktop', 'large3'];
    var clothesChecked = document.querySelector('input[name="clothe"]:checked') ? document.querySelector('input[name="clothe"]:checked') : '';
    var image3Checked = document.querySelector('input[name="imagesize3"]:checked') ? document.querySelector('input[name="imagesize3"]:checked') : '';
    var imagePlaceRightSleeve3 = document.getElementById('rsleeve3');
    var imagePlaceLeftSleeve3 = document.getElementById('lsleeve3');
    if (mutexArray.includes(clothesChecked.id) || mutexArray.includes(image3Checked.id)) {
        imagePlaceRightSleeve3.checked = false;
        imagePlaceRightSleeve3.disabled = true;
        imagePlaceLeftSleeve3.checked = false;
        imagePlaceLeftSleeve3.disabled = true;
        return;
    }
    imagePlaceRightSleeve3.disabled = false;
    imagePlaceLeftSleeve3.disabled = false;
}

function disableShoulder1() {
    // - ImageSize.Large, Clothes.TankTop `mutex` ImagePlaces.LeftShoulder
    // - ImageSize.Large, Clothes.TankTop `mutex` ImagePlaces.RightShoulder
    var mutexArray = ['large1', 'tanktop'];
    var clothesChecked = document.querySelector('input[name="clothe"]:checked') ? document.querySelector('input[name="clothe"]:checked') : '';
    var image1Checked = document.querySelector('input[name="imagesize1"]:checked') ? document.querySelector('input[name="imagesize1"]:checked') : '';
    var imagePlaceRightShoulder1 = document.getElementById('rshoulder1');
    var imagePlaceLeftShoulder1 = document.getElementById('lshoulder1');
    if (mutexArray.includes(clothesChecked.id) || mutexArray.includes(image1Checked.id)) {
        imagePlaceRightShoulder1.checked = false;
        imagePlaceRightShoulder1.disabled = true;
        imagePlaceLeftShoulder1.checked = false;
        imagePlaceLeftShoulder1.disabled = true;
        return;
    }
    imagePlaceRightShoulder1.disabled = false;
    imagePlaceLeftShoulder1.disabled = false;
}

function disableShoulder2() {
    // - ImageSize.Large, Clothes.TankTop `mutex` ImagePlaces.LeftShoulder
    // - ImageSize.Large, Clothes.TankTop `mutex` ImagePlaces.RightShoulder
    var mutexArray = ['large2', 'tanktop'];
    var clothesChecked = document.querySelector('input[name="clothe"]:checked') ? document.querySelector('input[name="clothe"]:checked') : '';
    var image2Checked = document.querySelector('input[name="imagesize2"]:checked') ? document.querySelector('input[name="imagesize2"]:checked') : '';
    var imagePlaceRightShoulder2 = document.getElementById('rshoulder2');
    var imagePlaceLeftShoulder2 = document.getElementById('lshoulder2');
    if (mutexArray.includes(clothesChecked.id) || mutexArray.includes(image2Checked.id)) {
        imagePlaceRightShoulder2.checked = false;
        imagePlaceRightShoulder2.disabled = true;
        imagePlaceLeftShoulder2.checked = false;
        imagePlaceLeftShoulder2.disabled = true;
        return;
    }
    imagePlaceRightShoulder2.disabled = false;
    imagePlaceLeftShoulder2.disabled = false;
}

function disableShoulder3() {
    // - ImageSize.Large, Clothes.TankTop `mutex` ImagePlaces.LeftShoulder
    // - ImageSize.Large, Clothes.TankTop `mutex` ImagePlaces.RightShoulder
    var mutexArray = ['large3', 'tanktop'];
    var clothesChecked = document.querySelector('input[name="clothe"]:checked') ? document.querySelector('input[name="clothe"]:checked') : '';
    var image3Checked = document.querySelector('input[name="imagesize3"]:checked') ? document.querySelector('input[name="imagesize3"]:checked') : '';
    var imagePlaceRightShoulder3 = document.getElementById('rshoulder3');
    var imagePlaceLeftShoulder3 = document.getElementById('lshoulder3');
    if (mutexArray.includes(clothesChecked.id) || mutexArray.includes(image3Checked.id)) {
        imagePlaceRightShoulder3.checked = false;
        imagePlaceRightShoulder3.disabled = true;
        imagePlaceLeftShoulder3.checked = false;
        imagePlaceLeftShoulder3.disabled = true;
        return;
    }
    imagePlaceRightShoulder3.disabled = false;
    imagePlaceLeftShoulder3.disabled = false;
}

function disableChest1() {
    // - ImageSize.Large `mutex` ImagePlaces.LeftChest
    // - ImageSize.Large `mutex` ImagePlaces.RightChest
    var mutexArray = ['large1']
    var checked = document.querySelector('input[name="imagesize1"]:checked');
    var imagePlaceLeftChest = document.getElementById('lchest1');
    var imagePlaceRightChest = document.getElementById('rchest1');
    if (mutexArray.includes(checked.id)) {
        imagePlaceLeftChest.checked = false;
        imagePlaceLeftChest.disabled = true;
        imagePlaceRightChest.checked = false;
        imagePlaceRightChest.disabled = true;
        return;
    }
    imagePlaceLeftChest.disabled = false;
    imagePlaceRightChest.disabled = false;
}

function disableChest2() {
    // - ImageSize.Large `mutex` ImagePlaces.LeftChest
    // - ImageSize.Large `mutex` ImagePlaces.RightChest
    var mutexArray = ['large2']
    var checked = document.querySelector('input[name="imagesize2"]:checked');
    var imagePlaceLeftChest = document.getElementById('lchest2');
    var imagePlaceRightChest = document.getElementById('rchest2');
    if (mutexArray.includes(checked.id)) {
        imagePlaceLeftChest.checked = false;
        imagePlaceLeftChest.disabled = true;
        imagePlaceRightChest.checked = false;
        imagePlaceRightChest.disabled = true;
        return;
    }
    imagePlaceLeftChest.disabled = false;
    imagePlaceRightChest.disabled = false;
}

function disableChest3() {
    // - ImageSize.Large `mutex` ImagePlaces.LeftChest
    // - ImageSize.Large `mutex` ImagePlaces.RightChest
    var mutexArray = ['large3']
    var checked = document.querySelector('input[name="imagesize3"]:checked');
    var imagePlaceLeftChest = document.getElementById('lchest3');
    var imagePlaceRightChest = document.getElementById('rchest3');
    if (mutexArray.includes(checked.id)) {
        imagePlaceLeftChest.checked = false;
        imagePlaceLeftChest.disabled = true;
        imagePlaceRightChest.checked = false;
        imagePlaceRightChest.disabled = true;
        return;
    }
    imagePlaceLeftChest.disabled = false;
    imagePlaceRightChest.disabled = false;
}

function fireNeckShirt() {
    // - Clothes.Shirt `requires` Neck.Shirt
    var clotheShirt = document.getElementById('shirt');
    var neckShirt = document.getElementById('shirtneck');
    var necks = document.getElementsByClassName('necks');
    if (clotheShirt.checked === true) {
        for (var i = 0; i < necks.length; i++) {
            if (necks[i].id === neckShirt.id) {
                neckShirt.checked = true;
            } else {
                necks[i].disabled = true;
            }
        }
    } else {
        for (var i = 0; i < necks.length; i++) {
            necks[i].disabled = false;
        }
    }
}

function fireShapesBaggy() {
    // - Clothes.Hoodie `requires` Shapes.Baggy
    var clotheHoodie = document.getElementById('hoodie');
    var shapeBaggy = document.getElementById('baggy');
    var style = document.getElementsByClassName('styles');
    if (clotheHoodie.checked === true) {
        for (var i = 0; i < style.length; i++) {
            if (style[i].id === shapeBaggy.id) {
                shapeBaggy.checked = true;
            } else {
                style[i].disabled = true;
            }
        }
    } else {
        for (var i = 0; i < style.length; i++) {
            style[i].disabled = false;
        }
    }
}

document.getElementById('-').addEventListener('click', removeImage);
document.getElementById('+').addEventListener('click', addImage);

document.getElementById('Clothes').addEventListener('click', disableNeckShirt);
document.getElementById('Clothes').addEventListener('click', disableNeckTurtle);
document.getElementById('Clothes').addEventListener('click', disableShoulder1);
document.getElementById('Clothes').addEventListener('click', disableShoulder2);
document.getElementById('Clothes').addEventListener('click', disableShoulder2);
document.getElementById('Clothes').addEventListener('click', disableSleeves1);
document.getElementById('Clothes').addEventListener('click', disableSleeves2);
document.getElementById('Clothes').addEventListener('click', disableSleeves3);

document.getElementById('ImageSizes1').addEventListener('click', disableChest1);
document.getElementById('ImageSizes1').addEventListener('click', disableShoulder1);
document.getElementById('ImageSizes1').addEventListener('click', disableSleeves1);

document.getElementById('ImageSizes2').addEventListener('click', disableChest2);
document.getElementById('ImageSizes2').addEventListener('click', disableShoulder2);
document.getElementById('ImageSizes2').addEventListener('click', disableSleeves2);

document.getElementById('ImageSizes3').addEventListener('click', disableChest3);
document.getElementById('ImageSizes3').addEventListener('click', disableShoulder3);
document.getElementById('ImageSizes3').addEventListener('click', disableSleeves3);

document.getElementById('Clothes').addEventListener('click', fireNeckShirt);
document.getElementById('Clothes').addEventListener('click', fireShapesBaggy);
