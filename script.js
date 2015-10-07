function paraPage() {
    document.getElementById("exe").onclick = function() {
        if (document.getElementById("exe").className == "wrapper") {
            document.getElementById("exe").className = "";}
        else {
            document.getElementById("exe").className = "wrapper";
        }
    };
}

window.onload = function() {
    paraPage();
}