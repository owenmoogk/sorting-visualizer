modal = document.getElementById("myModal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal()
    }
}
function closeModal(){
    $(modal).slideUp()
}
function openModal(){
    $(modal).slideDown()
}
function noShowModal(){
    localStorage.setItem("modalshow", "false")
    closeModal()
}
function modalOnOpen(){
    if (localStorage.getItem("modalshow") == "false"){
        return
    }
    else{
        openModal()
    }
}