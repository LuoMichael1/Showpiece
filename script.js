let window_width = window.innerWidth;
let root;
let totalImages = 20;
let iterator = totalImages;

/*
function getWidth() {
    new ResizeObserver(() => {
        window_width = window.innerWidth;
        changeWidth();
    }).observe(document.body)
}
*/

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
let data;
function pictureLoad() {
    themeSetup();
    addObservers();
    readJson();
}

//----------- adds images as the user scrolls down the page ----------------
let options = {
    root: null,
    rootMargin: "400px",
};
/*
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            // adds two new images
            for (let i=0; i<2; i++) {

                if (iterator > 0) {
                    let el = '<div id="img'+iterator+'" class="sketch" style="background-image: url(images/img'+iterator+'.webp);"></div>';
                    document.getElementById("gridcontent").innerHTML+=el;
                    
                    iterator -= 1;
                    document.getElementById("img" + iterator).style.width = "" + imgStyle[iterator][1] + "em";
                    document.getElementById("img" + iterator).style.height = "" + imgStyle[iterator][2] + "em";
                    document.getElementById("img" + iterator).style.margin = "" + imgStyle[iterator][3] + "em " + imgStyle[iterator][4] + "em " + imgStyle[iterator][5] + "em " + imgStyle[iterator][6] + "em ";
                }
                else {
                    observer.unobserve(document.getElementById("footer"));
                    break;
                }
            }
        }
    });
}, options);
*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < 2; i++) {
                if (iterator > 0) {
                    // Create a new image element
                    let img = document.createElement('div');
                    img.id = "img" + iterator;
                    img.className = "sketch";
                    img.style.backgroundImage = "url(images/img" + iterator + ".webp)";
                    
                    // Append the image element to the grid content
                    document.getElementById("gridcontent").appendChild(img);
                    
                    // Decrement iterator
                    iterator--;

                    try {
                    //console.log(imgStyle[1] + "em");
                    //Apply styles
                    img.style.width = imgStyle[iterator][1] + "em";
                    img.style.height = imgStyle[iterator][2] + "em";
                    img.style.margin = imgStyle[iterator][3] + "em " + imgStyle[iterator][4] + "em " + imgStyle[iterator][5] + "em " + imgStyle[iterator][6] + "em";
                    }
                    catch(e) {
                        console.log(e);
                    }
                    
                } else {
                    break;
                }
            }
        }
    });
}, options);

function addObservers() {
    observer.observe(document.getElementById("footer"));   
}


function readJson() {
    fetch('https://luomichael1.github.io/Showpiece/images.json')
        .then((response) => response.json())
        .then((json) => applyStyle(json));
}

let imgStyle
function applyStyle(file) {
    imgStyle = file; 
    console.log(imgStyle);
}