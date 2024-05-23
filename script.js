let window_width = window.innerWidth;
let root;
let totalImages = 20;
let iterator = totalImages;

// 
function getWidth() {
    new ResizeObserver(() => {
        window_width = window.innerWidth;
        changeWidth();
    }).observe(document.body)
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
let data;
function pictureLoad() {
    themeSetup();
    addObservers();
    data=readJson();
    console.log("hi" + data);
}

//----------- adds images as the user scrolls down the page ----------------
let options = {
    root: null,
    rootMargin: "400px",
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            for (let i=0; i<2; i++) {

                let el = '<div id="img'+iterator+'" class="sketch" style="background-image: url(images/img'+iterator+'.webp);"></div>';
                document.getElementById("gridcontent").innerHTML+=el;
                iterator -= 1;
                
                console.log(data[0]);
                
                if (iterator == 0) {
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





async function readJson() {
    const requestURL ="https://luomichael1.github.io/Showpiece/images.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const data =  JSON.parse(await response.json());
    console.log(data);
    
    return data;
}

async function applyStyle(id) {
    await console.log(data);

}