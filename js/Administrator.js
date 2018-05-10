$(document).ready(function()
{
    $("a").on("click", function(event)
    {
        event.preventDefault();            
       //Cargamos el contenido del enlace
        $('#contentdiv').load(this.href);
    });
});