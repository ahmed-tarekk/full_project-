// navbar style 
// in this style when i click to the button it will add class active and remove  

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) { 
    bar.addEventListener('click', () => { 
        nav.classList.add('active'); 
    })
}
if (close) { 
    close.addEventListener('click', () => { 
        nav.classList.remove('active'); 
    })
}
// end of navbar java 

// slider container java
// in this style when i click to the button it will switch the style 0 to 100% 
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, index) { 
    slide.style.left = `${index * 100}%`
});

let counter = 0;

nextBtn.addEventListener("click", function() { 
    counter++;
    carouse();
});
prevBtn.addEventListener("click", function() { 
    counter--;
    carouse();
});

function carouse () { 

    // we have different options 
    // working with slide 

//     if(counter === slides.length) { 
//         counter = 0;
//     }
//     if(counter < 0) { 
//         counter = slides.length - 1 ;
// }

// working with buttons 

if ( counter < slides.length - 1) { 
    nextBtn.style.display = "block"; 
}else { 
    nextBtn.style.display = "none";
}
if(counter > 0) { 
    prevBtn.style.display = "block";
}else { 
    prevBtn.style.display = "none";
}
    slides.forEach(function (slide) { 
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
prevBtn.style.display = "none"; 

// end of slider container java 



// menu style 
// i know i can work on that by classlist or hide and show classes
//  but i worked on items cause it helped me to work or know more than codes to work 
//  that work to improve myself in javascript 


// items 
const menu = [ 
    { 
        id:1, 
        title: "pancakes",
        price: 15.99, 
        category: "breakfast",
        img: "img/food/22.jpg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:2, 
        title: "pancakes",
        price: 15.99, 
        category: "launch",
        img: "img/food/33.jpeg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:3, 
        title: "pancakes",
        price: 15.99, 
        category: "launch",
        img: "img/food/903374-21.jpg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:4, 
        title: "pancakes",
        price: 15.99, 
        category: "shakes",
        img: "img/food/99.jpg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:5, 
        title: "pancakes",
        price: 15.99, 
        category: "breakfast",
        img: "img/food/14.jpg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:6, 
        title: "pancakes",
        price: 15.99, 
        category: "shakes",
        img: "img/food/13.jpg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:7, 
        title: "pancakes",
        price: 15.99, 
        category: "breakfast",
        img: "img/food/12.jpg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:8, 
        title: "pancakes",
        price: 15.99, 
        category: "shakes",
        img: "img/food/33.jpeg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:9, 
        title: "pancakes",
        price: 15.99, 
        category: "launch",
        img: "img/food/22.jpg", 
        desc: "heloooooooooooooo"
    },
    { 
        id:10, 
        title: "pancakes",
        price: 15.99, 
        category: "shakes",
        img: "img/food/13.jpg", 
        desc: "heloooooooooooooo"
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items 
window.addEventListener("DOMContentLoaded", function () { 
    displayMenuItems(menu); 
    displayMenuButtons();
});

function displayMenuItems(menuItems) { 
    let displayMenu = menuItems.map(function (item) { 
        // console.log(item)
        return  `<article class="menu-item"> 
        <img src= ${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
    </article> ` ; 
    });

    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons( ) { 
    const categories = menu.reduce(function(values, item) { 
        if (!values.includes(item.category)) { 
            values.push(item.category);
        }
        return values
    },
        ['all']
        );
        const categoryBtns = categories.map(function(category) { 
            return `<button class="filter-btn" type="button"
            data-id=${category}>${category}</button>`;
        }) 
        .join("");
        container.innerHTML = categoryBtns ; 
        const filterBtns = container.querySelectorAll(".filter-btn");
        // filter items 
    filterBtns.forEach(function ( btn) { 
    btn.addEventListener("click", function (e) { 
        const category = e.currentTarget.dataset.id; 
        const menuCategory = menu.filter(function (menuItem) { 
            if (menuItem.category === category ) { 
                return menuItem ;
            }
        });
        // console.log(menuCategory);  
        if (category === 'all') {  
            displayMenuItems(menu)
        }else { 
            displayMenuItems(menuCategory)
        }
        });
    });
}





