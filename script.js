let window_width = window.innerWidth;
let root;
let totalImages = 20;
let iterator = totalImages;
let imgRatio = 0;

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
function pictureLoad() {
    themeSetup();
    addObservers();
}

//----------- adds images as the user scrolls down the page ----------------
let options = {
    root: null,
    rootMargin: "400px",
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < 2; i++) {
                console.log(10);
                console.log(iterator);
                if (iterator > 0) {
                    console.log(1);
                    // Create a new image element
                    let img = document.createElement('div');
                    img.id = "img" + iterator;
                    img.className = "sketch";
                    img.style.backgroundImage = "url(images/img" + iterator + ".webp)";
                    
                    iterator--;
                    
                    imgRatio = imgStyle[iterator].ratioW / imgStyle[iterator].ratioH; 

                    img.style.width = imgStyle[iterator].width + "em";
                    img.style.height = imgStyle[iterator].width/imgRatio + "em";
                    img.style.margin = imgStyle[iterator].margT + "em " + imgStyle[iterator].margR + "em " + 0 + "em " + imgStyle[iterator].margL + "em";

                    // Append the image element to the grid content
                    document.getElementById("gridcontent").appendChild(img);
                    
                    
                    
                } 
                else {
                    console.log(2);
                    observer.unobserve(document.getElementById("footer"));
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

let imgStyle = [
    {"img":"1", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"2", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"3", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"4", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"5", "ratioW":16, "ratioH":9, "width":20, "margL":10, "margR":10, "margT":10},
    {"img":"6", "ratioW":675, "ratioH":1200, "width":32, "margL":10, "margR":10, "margT":10},
    {"img":"7", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"8", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"9", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"10", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"11", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"12", "ratioW":16, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"13", "ratioW":20, "ratioH":9, "width":64, "margL":10, "margR":10, "margT":10},
    {"img":"14", "ratioW":1095, "ratioH":1414, "width":64, "margL":15, "margR":10, "margT":10},
    {"img":"15", "ratioW":1200, "ratioH":1697, "width":25, "margL":10, "margR":10, "margT":10},
    {"img":"16", "ratioW":1200, "ratioH":1697, "width":20, "margL":55, "margR":10, "margT":10},
    {"img":"17", "ratioW":16, "ratioH":9, "width":40, "margL":10, "margR":10, "margT":10},
    {"img":"18", "ratioW":16, "ratioH":9, "width":60, "margL":5, "margR":10, "margT":10},
    {"img":"19", "ratioW":1, "ratioH":1, "width":40, "margL":20, "margR":10, "margT":20},
    {"img":"20", "ratioW":235, "ratioH":108, "width":70, "margL":8, "margR":10, "margT":10},
];
function applyStyle(file) {
    imgStyle = file; 
    console.log(imgStyle);
}