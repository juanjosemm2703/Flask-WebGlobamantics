$(function(){
    $(".comment-form").submit(function(event){
        event.preventDefault();
        var form = $(this);

        $.ajax({
           type: form.attr("method"),
           url: form.attr("action"),
           data: form.serialize() + "&ajax=1"
        }).done(function(data){
            $("#content").val(""); //Limpia el text area del comentario
            $(".placeholder-comment").hide(); //Oculta el campo donde dice que sea el primer comentario
            $(data).insertAfter(".form-border"); //Inserta el html del nuevo comentario despues de la clase form-border
        }).fail(function (data){
            $("#content").val("");
            $(".comment-error").show(); //Limpia el text area del comentario
            $(".comment-error").html(data.responseText); //Envia el comentario como un html cuando se detecta un error 400
            // en la comunicacion "Content is required"
            $(".comment-error").fadeOut(2500); //Desvanece el comentario a los 2.5 segs
        });
    });
});