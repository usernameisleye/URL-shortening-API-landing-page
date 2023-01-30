const linkInput = document.querySelector('.link-input');
const shortenLinkBtn = document.querySelector('.link-btn');
const shortendLinks = document.querySelector('.shortened-links');

shortenLinkBtn.addEventListener('click', shortenLink);

function shortenLink(){
    if (linkInput.value == '') {
        console.log('Empty');
    }
}