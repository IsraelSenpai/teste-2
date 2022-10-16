function selections(evt, selectionNumber) {
    var i, selected_panel, selection;
    selected_panel = document.getElementsByClassName("selected_panel");
    for (i = 0; i < selected_panel.length; i++) {
        selected_panel[i].style.display = "none"; 
    }
    selection = document.getElementsByClassName("selection");
    for (i = 0; i < selection.length; i++) {
        selection[i].className = selection[i].className.replace(" active", "");
    }
    document.getElementById(selectionNumber).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("selection-active").click();