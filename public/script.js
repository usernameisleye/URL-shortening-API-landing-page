const linkInput = document.querySelector('.link-input');
const shortenLinkBtn = document.querySelector('.link-btn');
const shortendLinks = document.querySelector('.shortened-links');
const errorMsg = document.querySelector('.link-div span');
const originalLink = document.querySelector('.original-link');
const shortLink = document.querySelector('.short-link');
const copyBtn = document.querySelector('.copy-btn');

shortenLinkBtn.addEventListener('click', shortenLink);

function shortenLink(){
    if (linkInput.value == '') {
        linkInput.classList.add('border-solid', 'border-Red', 'border-2');
        errorMsg.textContent = 'Please add a link';
    }
    else{
        fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`).then(res => res.json()).then(outputLink => {
            console.log(outputLink);
            originalLink.textContent = outputLink.result.original_link;
            shortLink.textContent = outputLink.result.short_link;

            linkInput.classList.remove('border-solid', 'border-2', 'border-Red');
            errorMsg.textContent = '';
        }).catch(err =>{
            errorMsg.textContent = 'Invalid URL, Please Enter a Valid URL...';
            linkInput.classList.add('border-solid', 'border-Red', 'border-2');

            console.log(err);
        })
    }
}