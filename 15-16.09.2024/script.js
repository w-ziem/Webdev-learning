const createParagraph = () => {
    const para = document.createElement('p');
    para.textContent = prompt('What you wanna say to the world?');
    document.body.appendChild(para);
}


const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener('click', createParagraph);
};

