const linkInput = document.querySelector('.link-input');
const shortenLinkBtn = document.querySelector('.link-btn');
const shortendLinks = document.querySelector('.shortened-links');

shortenLinkBtn.addEventListener('click', shortenLink);

function shortenLink(){
    fetch('https://api.shrtco.de/v2/').then(res => res.json()).then(shortLink =>{
        console.log(shortLink);
    }).catch(error =>{
        console.log(error);
    })
}