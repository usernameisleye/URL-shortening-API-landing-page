const linkInput = document.querySelector('.link-input');
const shortenLinkBtn = document.querySelector('.link-btn');
const shortendLinks = document.querySelector('.shortened-links');
const errorMsg = document.querySelector('.link-div span');

shortenLinkBtn.addEventListener('click', shortenLink);
shortendLinks.addEventListener('click', copyLink)

function shortenLink(){
    if (linkInput.value == '') {
        //if input is empty, add red border and error text
        linkInput.classList.add('border-solid', 'border-Red', 'border-2');
        errorMsg.textContent = 'Please add a link';
    }
    else{
        //fetching API and storing input value as query url then parsing json file
        fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`).then(res => res.json()).then(outputLink => {
            let shortLinkDiv = '';

            //creating shortened link divs with API generated links, then appending to main div
            shortLinkDiv = `<div class="shortened-link bg-White flex sm:flex-row flex-col justify-between items-center p-4 rounded-md w-3/4">
                                    <span class="original-link sm:border-none border-b-2 border-Gray border-solid w-full sm:text-start text-center break-all">${outputLink.result.original_link}</span>

                                <div class="flex sm:flex-row flex-col justify-end items-center gap-2 sm:mt-0 mt-4 w-full">
                                    <span class="text-Cyan short-link cursor-pointer">${outputLink.result.short_link}</span>
                                    <button class="copy-btn bg-Cyan h-9 px-8 sm:w-fit w-full rounded-md font-medium text-White hover:brightness-105 outline-none">Copy</button>
                            </div>`;
            shortendLinks.innerHTML += shortLinkDiv;
                          
            //removing error contents when right link is inputed
            linkInput.classList.remove('border-solid', 'border-2', 'border-Red');
            errorMsg.textContent = '';
        }).catch(err =>{//creating error message if an invalid URL is inputed
            errorMsg.textContent = 'Invalid URL, Please Enter a Valid URL...';
            linkInput.classList.add('border-solid', 'border-Red', 'border-2');

            console.log(err);
        })
    }
}
//If Enter Key is used for shotening
document.addEventListener('keypress', e => {
    if(e.key = 'Enter' || e.keyCode == 13 || e.which == 13){
        shortenLink();
    }
})

function copyLink(e){
    if(e.target.classList.contains('copy-btn')){
        let copyBtn = e.target
        //getting shotened link by targeting the text content of the first element from the parent element
        let copyText = copyBtn.parentElement.firstElementChild.textContent;
        navigator.clipboard.writeText(copyText);
        
        copyBtn.textContent = 'Copied!';
        copyBtn.style.backgroundColor = 'hsl(257, 27%, 26%)';
        //reverting changes made to button after 2 seconds
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.style.backgroundColor = 'hsl(180, 66%, 49%)';
        }, 2000)
    }
}