const linkInput = document.querySelector('.link-input');
const shortenLinkBtn = document.querySelector('.link-btn');
const linkDiv = document.querySelector('.link-div');
const shortendLinks = document.querySelector('.shortened-links');

//Creating Error Msg
const span = document.createElement('span')
const errorMsg = document.createTextNode('Please add a link')
span.appendChild(errorMsg)

shortenLinkBtn.addEventListener('click', shortenLink);

function shortenLink(){
    if (linkInput.value == '') {
        linkInput.classList.remove('border-none');
        linkInput.classList.add('border-solid');
        linkDiv.appendChild(span)
    }
}