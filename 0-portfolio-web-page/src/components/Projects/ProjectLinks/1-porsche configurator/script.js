let checkboxDivs = document.querySelectorAll(".checkbox");
let totalPrice = document.querySelector('.totalPrice');

checkboxDivs.forEach(checkboxDiv => {
    checkboxDiv.addEventListener("click", () => {
        const checkbox = checkboxDiv.querySelector("input[type='checkbox']");
        checkbox.checked = !checkbox.checked;
        addValue();
        uncheckOthers(checkbox);
        checkboxDiv.classList.toggle('checked');
    });
});

function addValue() {
    let sum = 0;

    checkboxDivs.forEach(checkboxDiv => {
        const checkbox = checkboxDiv.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            sum += parseInt(checkbox.value);
        }
    });

    totalPrice.textContent = sum;
};

function uncheckOthers(clicked) {
    let name = clicked.getAttribute('name');
    let isPenktas = name == 'penktas';

    checkboxDivs.forEach(otherCheckboxDiv => {
        const otherCheckbox = otherCheckboxDiv.querySelector("input[type='checkbox']");
        if (otherCheckbox !== clicked && otherCheckbox.getAttribute('name') == name && !isPenktas) {
            otherCheckbox.checked = false;
            otherCheckboxDiv.classList.remove('checked');
        }

        if(isPenktas.checked){
            otherCheckboxDiv.classList.add('checked');
        } else if (isPenktas.unchecked) {
            otherCheckboxDiv.classList.remove('checked');
        }
    });

    addValue();
};

// Second view transition button

let orderButton = document.querySelector('.fourthRow button');
orderButton.addEventListener('click', () => {

    document.querySelector('.fourthRow svg').classList.remove('hide');
    document.querySelector('.fourthRow button p').classList.add('hide');
    document.querySelector('.fourthRow button ').style.width = '124px';

    setTimeout(() => {
        document.querySelector('.firstRow').classList.add('hide');
        document.querySelector('.secondRow').classList.add('hide');
        document.querySelector('.thirdRow').classList.add('hide');
        document.querySelector('.seperator').classList.add('hide');
        document.querySelector('.fourthRow').classList.add('hide');

        document.querySelector('.after-click').classList.remove('hide');
        document.querySelector('.after-click').classList.add('show');
    }, 1000);
});

// Carousel script

const carouselButtons = document.querySelectorAll('[data-carousel-button]');

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        } else if (newIndex >= slides.children.length) {
            newIndex = 0;
        };

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

// Carousel color change

const carouselColorChangeButtonDivs = document.querySelectorAll('.secondRow .colorSelection .checkboxes .checkbox');
carouselColorChangeButtonDivs.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        let firstSlide = document.querySelector('.firstRow .carousel .slideOne');
        let secondSlide = document.querySelector('.firstRow .carousel .slideTwo');
        let thirdSlide = document.querySelector('.firstRow .carousel .slideThree');

        switch (true) {
            case checkbox.classList.contains('white'):
                firstSlide.querySelector('img').src = './white/white1.png';
                secondSlide.querySelector('img').src = './white/white2.png';
                thirdSlide.querySelector('img').src = './white/white3.png';
                break;
            case checkbox.classList.contains('black'):
                firstSlide.querySelector('img').src = './black/black1.png';
                secondSlide.querySelector('img').src = './black/black2.png';
                thirdSlide.querySelector('img').src = './black/black3.png';
                break;
            case checkbox.classList.contains('red'):
                firstSlide.querySelector('img').src = './red/red1.png';
                secondSlide.querySelector('img').src = './red/red2.png';
                thirdSlide.querySelector('img').src = './red/red3.png';
                break;
            case checkbox.classList.contains('grey'):
                firstSlide.querySelector('img').src = './grey/grey1.png';
                secondSlide.querySelector('img').src = './grey/grey2.png';
                thirdSlide.querySelector('img').src = './grey/grey3.png';
                break;
            case checkbox.classList.contains('yellow'):
                firstSlide.querySelector('img').src = './yellow/yellow1.png';
                secondSlide.querySelector('img').src = './yellow/yellow2.png';
                thirdSlide.querySelector('img').src = './yellow/yellow3.png';
                break;
            case checkbox.classList.contains('blue'):
                firstSlide.querySelector('img').src = './blue/blue1.png';
                secondSlide.querySelector('img').src = './blue/blue2.png';
                thirdSlide.querySelector('img').src = './blue/blue3.png';
                break;
        };
    });
});
