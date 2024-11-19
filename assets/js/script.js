$(document).ready(function () {

    //  menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    //scroll
    var scroll = new SmoothScroll('a[href*="#"]');
});
var texto = "ISCHE 45: (De)coloniality and Diversity in the Histories of Education";
var index = 0;
var velocidade = 100;

function exibirLetra() {
    if (index < texto.length) {
        document.getElementById("typing-text").innerHTML += texto.charAt(index);
        index++;
        setTimeout(exibirLetra, velocidade);
    }
}

window.onload = function () {
    exibirLetra();
}