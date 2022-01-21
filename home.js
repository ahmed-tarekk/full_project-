// modal overlaaay 2 

var modalBtns = document.querySelectorAll(".press");

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