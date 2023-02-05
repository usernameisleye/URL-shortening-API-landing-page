const linkInput = document.querySelector('.link-input');
const shortenLinkBtn = document.querySelector('.link-btn');
const shortendLinks = document.querySelector('.shortened-links');
const errorMsg = document.querySelector('.link-div span');
const originalLink = document.querySelector('.original-link');
const shortLink = document.querySelector('.short-link');
const copyBtn = document.querySelector('.copy-btn');

shortenLinkBtn.addEventListener('click', shortenLink);
copyBtn.addEventListener('click', copyLink)

function shortenLink(){
    if (linkInput.value == '') {
        linkInput.classList.add('border-solid', 'border-Red', 'border-2');
        errorMsg.textContent = 'Please add a link';
    }
    else{
        fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`).then(res => res.json()).then(outputLink => {
            let shortLinkDiv = '';
            originalLink.textContent = outputLink.result.original_link;
            shortLink.textContent = outputLink.result.short_link;

            shortLinkDiv = ` <div class="shortened-links flex flex-col gap-4 w-3/4">
                                <div class="shortened-link bg-White flex sm:flex-row flex-col justify-between items-center p-4 rounded-md">
                                    <span class="original-link sm:border-none border-b-2 border-Gray border-solid w-full sm:text-start text-center">${originalLink.value}</span>

                                <div class="flex sm:flex-row flex-col justify-end items-center gap-2 sm:mt-0 mt-4 w-full">
                                    <span class="text-Cyan short-link cursor-pointer">${shortLink.value}</span>
                                    <button class="copy-btn bg-Cyan h-9 px-8 sm:w-fit w-full rounded-md font-medium text-White hover:brightness-105 outline-none">Copy</button>
                                </div>
                            </div>`;

                          
            linkInput.classList.remove('border-solid', 'border-2', 'border-Red');
            errorMsg.textContent = '';
        }).catch(err =>{
            errorMsg.textContent = 'Invalid URL, Please Enter a Valid URL...';
            linkInput.classList.add('border-solid', 'border-Red', 'border-2');

            console.log(err);
        })
    }
}

function copyLink(e){
    navigator.clipboard.writeText(shortLink.textContent);
    
    copyBtn.textContent = 'Copied!';
    copyBtn.style.backgroundColor = 'hsl(257, 27%, 26%)';
    setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.style.backgroundColor = 'hsl(180, 66%, 49%)';
    }, 2000)
}