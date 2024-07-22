let variables = [1, 2, 3, 4, 5, 6, 7];
let currentIndex = variables.indexOf(1);

function updateDisplay() {
    const currentValue = variables[currentIndex];
    document.getElementById("variable").innerText = currentValue;
    executeAction(currentValue);
}

function left() {
    currentIndex = (currentIndex - 1 + variables.length) % variables.length;
    updateDisplay();
}

function right() {
    currentIndex = (currentIndex + 1) % variables.length;
    updateDisplay();
}

function setProfileImage(url) {
    const pfpElement = document.getElementById('pfp');
    const tempImage = new Image();
    tempImage.src = url;
    tempImage.onload = () => {
        pfpElement.style.backgroundImage = `url(${url})`;
    };
    tempImage.onerror = () => {
        pfpElement.style.backgroundImage = 'url(nowifi.png)';
        setTimeout(() => {
            setProfileImage(url);
        }, 5000);
    };
}

function executeAction(value) {
    switch (value) {
        case 1:
            document.getElementById('class').textContent = 'Meet the team';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/umaera.png');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'UmaEra';
            document.getElementById('profile').textContent = 'Creator';
            document.getElementById('profile').style.color = '#FFFFFF';

            document.getElementById('right-arrow').style.backgroundImage = 'url(right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(left-arrow-red.png)';
            break;
        case 2:
            document.getElementById('class').textContent = 'Meet the team';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/dhummy.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'Dhummy';
            document.getElementById('profile').textContent = 'Developer and Animator';
            document.getElementById('profile').style.color = '#FFFFFF';

            document.getElementById('right-arrow').style.backgroundImage = 'url(right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(left-arrow-red.png)';
            break;
        case 3:
            document.getElementById('class').textContent = 'Meet the team';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/erica_zy.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'erica_zy';
            document.getElementById('profile').textContent = 'Animator';
            document.getElementById('profile').style.color = '#FFFFFF';

            document.getElementById('right-arrow').style.backgroundImage = 'url(right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(left-arrow-red.png)';
            break;
        case 4:
            document.getElementById('class').textContent = 'Meet the team';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/shitist.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'ShiTist';
            document.getElementById('profile').textContent = 'Animator';
            document.getElementById('profile').style.color = '#FFFFFF';

            document.getElementById('right-arrow').style.backgroundImage = 'url(right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(left-arrow-red.png)';
            break;
        case 5:
            document.getElementById('class').textContent = 'Meet the team';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/storm.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'Storm';
            document.getElementById('profile').textContent = 'Developer and Designer';
            document.getElementById('profile').style.color = '#FFFFFF';

            document.getElementById('right-arrow').style.backgroundImage = 'url(right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(left-arrow-red.png)';
            break;
        case 6:
            document.getElementById('class').textContent = 'Meet the team';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/isis.webp');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'Isis';
            document.getElementById('profile').textContent = 'Designer';
            document.getElementById('profile').style.color = '#FFFFFF';

            document.getElementById('right-arrow').style.backgroundImage = 'url(right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(left-arrow-red.png)';
            break;
        case 7:
            document.getElementById('class').textContent = 'Meet the team';
            document.getElementById('class').style.color = '#ff004c';
            setProfileImage('https://umaera.github.io/icons/pfp/abby.jpg');
            document.getElementById('pfp').style.boxShadow = '0 0 10px #ff004c';
            document.getElementById('name').textContent = 'abby';
            document.getElementById('profile').textContent = 'Designer and Concept helper';
            document.getElementById('profile').style.color = '#FFFFFF';

            document.getElementById('right-arrow').style.backgroundImage = 'url(right-arrow-red.png)';
            document.getElementById('left-arrow').style.backgroundImage = 'url(left-arrow-red.png)';
            break;
        default:
    }
}

updateDisplay();