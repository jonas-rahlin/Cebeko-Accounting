// FUNCTION FOR HIDING AND SHOWING THE SRF NEWSFLOW
// ************************************************

// defines the arrow and newsflow elements.
var srfBtn = document.getElementById("srf-arrow");
var srfNewsflow = document.getElementById("srf-newsflow");

// function for adding and removing classes wich changes the position of the newsflow.
function srfInteract() {
    if (srfNewsflow.classList.contains("srf-show")) {
        srfNewsflow.classList.remove("srf-show");
        srfNewsflow.classList.add("srf-hide");
    }

    else {
        srfNewsflow.classList.add("srf-show");
        srfNewsflow.classList.remove("srf-hide");
    }
}

// eventlistener that triggers above function when clicking on srfBTN("srf-arrow").
srfBtn.addEventListener("click", () => srfInteract());

//shows and hides newsflow on scroll.
window.onscroll = function() {
    if (window.pageYOffset > 1 && srfNewsflow.classList.contains("no-display")) {
        srfNewsflow.classList.remove("no-display");
        srfNewsflow.classList.remove("srf-hide");
    }

    else if (window.pageYOffset < 1) {
        srfNewsflow.classList.add("no-display");
    }
}