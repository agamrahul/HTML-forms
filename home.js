function validateForm() {
    var x = parseInt(document.forms["details"]["age"].value);
    
    if(x < 18) {
        alert("Age is below 18, form cannot be submitted");
        return false;
    }
}