const texts = ["<> Welcome to my website </>"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    const animatedTextElement = document.getElementById('animated-text');
    if (charIndex < texts[textIndex].length) {
        animatedTextElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        textIndex++; 
        charIndex = 0; 

        if (textIndex < texts.length) {
            animatedTextElement.innerHTML += '\n'; 
            setTimeout(typeText, 500); 
        } else {
            setTimeout(() => {
                animatedTextElement.innerHTML = ''; 
                textIndex = 0; 
                setTimeout(typeText, 1000); 
            }, 2000); 
        }
    }
}

window.onload = typeText;

function dark_white_mode(event){
    let back = document.getElementById('back');
    let text = document.getElementById('Text');
    var gitLogo = document.getElementById('gitLogo');
    var linkedLogo = document.getElementById('linkedLogo');

    if (event.target.id === 'moon') {
        back.style.backgroundColor = "black";
        text.style.color = 'white';
        gitLogo.src = "images/githubLogo/github-mark-white.png"
        linkedLogo.src = "images/linkedinLogo/In-White-96.png"
    } else if (event.target.id === 'sun') {
        back.style.backgroundColor = "white";
        text.style.color = 'black';
        gitLogo.src = "images/githubLogo/github-mark.png"
        linkedLogo.src = "images/linkedinLogo/In-Blue-96.png"
    }
}

document.getElementById("moon").addEventListener("click", dark_white_mode);
document.getElementById("sun").addEventListener("click", dark_white_mode);