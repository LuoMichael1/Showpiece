let window_width = window.innerWidth;
let root;
let totalImages = 20;
let iterator = totalImages;

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
                    img.style.width = imgStyle[iterator].width + "em";
                    img.style.height = imgStyle[iterator].height + "em";
                    img.style.margin = imgStyle[iterator].margL + "em " + imgStyle[iterator].margR + "em " + imgStyle[iterator].margT + "em " + imgStyle[iterator].margB + "em";

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
    {"img":"1", "width":64, "height":36, "margL":10, "margR":10, "margT":10, "margB":10},
    {"img":"2", "width":64, "height":36, "margL":9, "margR":10, "margT":10, "margB":10},
    {"img":"3", "width":64, "height":36, "margL":8, "margR":10, "margT":10, "margB":10},
    {"img":"4", "width":64, "height":36, "margL":7, "margR":10, "margT":10, "margB":10},
    {"img":"5", "width":64, "height":36, "margL":6, "margR":10, "margT":10, "margB":10},
    {"img":"6", "width":64, "height":36, "margL":5, "margR":10, "margT":10, "margB":10},
    {"img":"7", "width":64, "height":36, "margL":4, "margR":10, "margT":10, "margB":10},
    {"img":"8", "width":64, "height":36, "margL":3, "margR":10, "margT":10, "margB":10},
    {"img":"9", "width":64, "height":36, "margL":2, "margR":10, "margT":10, "margB":10},
    {"img":"10", "width":64, "height":36, "margL":1, "margR":10, "margT":10, "margB":10},
    {"img":"11", "width":64, "height":36, "margL":10, "margR":10, "margT":10, "margB":10},
    {"img":"12", "width":64, "height":36, "margL":9, "margR":10, "margT":10, "margB":10},
    {"img":"13", "width":64, "height":36, "margL":8, "margR":10, "margT":10, "margB":10},
    {"img":"14", "width":64, "height":36, "margL":7, "margR":10, "margT":10, "margB":10},
    {"img":"15", "width":64, "height":36, "margL":6, "margR":10, "margT":10, "margB":10},
    {"img":"16", "width":36, "height":64, "margL":5, "margR":10, "margT":10, "margB":10},
    {"img":"17", "width":64, "height":36, "margL":4, "margR":10, "margT":10, "margB":10},
    {"img":"18", "width":64, "height":36, "margL":3, "margR":10, "margT":10, "margB":10},
    {"img":"19", "width":64, "height":36, "margL":2, "margR":10, "margT":10, "margB":10},
    {"img":"20", "width":64, "height":36, "margL":1, "margR":10, "margT":10, "margB":10}
];
function applyStyle(file) {
    imgStyle = file; 
    console.log(imgStyle);
}