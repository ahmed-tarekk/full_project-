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


// modal oveRLAY 
// we have two options of using overlay 

// 1- by adding class 
// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal-overlay"); 
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener('click', function() { 
//     modal.classList.add('open-modal');
// })
// closeBtn.addEventListener('click', function() { 
//     modal.classList.remove('open-modal');

// })


// modal overlaaay 2 
// 2- by switch the style 
var modalBtns = document.querySelectorAll(".modal-btn");

modalBtns.forEach(function(btn) { 
    btn.onclick = function() { 
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach(function(btn) { 
    btn.onclick = function() { 
        var modal = (btn.closest(".modal-overlay").style.display = "none");
    };
});

window.onclick = function(e) { 
    if (e.target.className === "modal") { 
        e.target.style.display = "none";
    } 
};
