function searchMarcas() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("results");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// Agrega un evento de entrada al campo de teléfono para validar la entrada
document.getElementById('telefono').addEventListener('input', function () {
    // Elimina cualquier carácter no numérico
    this.value = this.value.replace(/\D/g, '');
    
    // Limita la longitud a 10 dígitos
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});