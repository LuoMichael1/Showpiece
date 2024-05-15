let window_width = window.innerWidth;
let root;

// used for the picture pages where the grid needs to go down to 2 columns if the screen is small and 3 if the screen is wide
function getWidth() {
    new ResizeObserver(() => {
        window_width = window.innerWidth;
        changeWidth();
    }).observe(document.body)
}
function changeWidth() {    
    tile_width = window_width*0.8;

    if (tile_width > 700) {
        tile_width /= 3;
        tile_width -= 11;
        document.getElementById("renders").style.gridAutoRows = tile_width + 'px';
        document.getElementById("renders").style.gridTemplateColumns = 'repeat(3, '+ tile_width + 'px)';
    }
    else {
        tile_width /= 2;
        document.getElementById("renders").style.gridAutoRows = tile_width + 'px';
        document.getElementById("renders").style.gridTemplateColumns = 'repeat(2, '+ tile_width + 'px)';
    }
}


// ------------- dark mode and light mode ----------------------
function themeSetup() {
    root = document.querySelector(':root');
    if (localStorage.getItem("theme") == "0") {
        localStorage.setItem("theme", "1")
        changeTheme();
    }
    else {
        localStorage.setItem("theme", "1");
    }
}
function changeTheme() {
    if (localStorage.getItem("theme") == "1") {
        root.style.setProperty('--main-color1', 'rgb(20 20 20)');
        root.style.setProperty('--main-color2', 'rgb(200 200 200)');
        root.style.setProperty('--highlight-color', '#00df89');     
        localStorage.setItem("theme", "0");
    }
    else if (localStorage.getItem("theme") == "0") {
        root.style.setProperty('--main-color1', 'white');
        root.style.setProperty('--main-color2', 'black');
        root.style.setProperty('--highlight-color', '#FF4A80');
        localStorage.setItem("theme", "1");
    }
}

function indexLoad() {
    themeSetup();
}
function pictureLoad() {
    themeSetup();
    addObservers();
}

//----------- animation for revealing images as the user scrolls down the page ----------------
let options = {
    root: null,
    rootMargin: "10%",
};
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            setTimeout(() => {entry.target.classList.remove('reveal');
                }, 1000);
            setTimeout(() => {entry.target.classList.add('contenthover');;
                }, 1010);
            removeobs(entry.target);
        }
    });
}, options);
function removeobs(target) {
    observer.unobserve(target);
}


function addObservers() {
    const hiddenElements = document.querySelectorAll(".content > div");
    hiddenElements.forEach((el) => observer.observe(el));   
}


