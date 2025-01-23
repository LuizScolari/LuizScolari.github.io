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

// menu lateral
function createSidebar() {
    // container do menu
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    document.body.appendChild(menuContainer);

    // ícone 
    const hamburgerIcon = document.createElement('div');
    hamburgerIcon.id = 'hamburger-icon';
    hamburgerIcon.innerText = '☰';
    hamburgerIcon.onclick = toggleMenu;
    menuContainer.appendChild(hamburgerIcon);

    // sidebar
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    menuContainer.appendChild(sidebar);

    // botão de fechar 
    const closeButton = document.createElement('span');
    closeButton.id = 'close-btn';
    closeButton.innerText = '×';
    closeButton.onclick = toggleMenu;
    sidebar.appendChild(closeButton);

    // links da sidebar
    const ul = document.createElement('ul');
    const pages = ['About me', 'Projects', 'Contact'];
    pages.forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${page.toLowerCase()}`;
        a.innerText = page;
        li.appendChild(a);
        ul.appendChild(li);
    });
    sidebar.appendChild(ul);
}

// Função para alternar a visibilidade da sidebar
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Estilo do menu e da sidebar
function addStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #menu-container {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 100;
        }

        #hamburger-icon {
            font-size: 30px;
            cursor: pointer;
        }

        #sidebar {
            position: fixed;
            left: 0;
            top: 0;
            height: 100%;
            width: 0;
            background-color: #333;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
        }

        #sidebar ul {
            list-style-type: none;
            padding: 0;
        }

        #sidebar ul li {
            padding: 10px 15px;
            text-align: center;
        }

        #sidebar ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
        }

        #sidebar ul li a:hover {
            background-color: #575757;
        }

        #sidebar.open {
            width: 250px;
        }

        #close-btn {
            position: absolute;
            top: 10px;
            left: 15px;
            font-size: 30px;
            color: white;
            cursor: pointer;
        }

        #close-btn:hover {
            color: #ccc;
        }

        #back {
            background-color: white;
            min-height: 100vh;
        }

        #Text {
            color: black;
            text-align: center;
            margin-top: 100px;
        }

        #dark_white_mode {
            display: inline-flex;
            position: relative;
            margin-top: 10px;
            left: 100%;
            transform: translate(-140%);
        }

        #moon, #sun {
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}

window.onload = () => {
    addStyles();
    createSidebar();
    typeText();

    document.getElementById("moon").addEventListener("click", dark_white_mode);
    document.getElementById("sun").addEventListener("click", dark_white_mode);
};