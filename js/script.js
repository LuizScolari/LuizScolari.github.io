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

window.onload = typeText; // Inicia a animação quando a página carregar
