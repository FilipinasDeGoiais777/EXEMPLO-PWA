$(document).ready(function() {

    //$.ajax({
    //dataType: 'JSON',
    //type: 'GET',
    //assync: true,
    //url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/distritos',
    //success: function(dados) {
    //for (var i = 0; i < dados.length; i++) {
    //$('#cidade').append(`<option value="${dados[i].id}">${dados[i].nome}</option>`)
    //}
    //}
    //})

    $('#cidade').keyup(function() {
        let nome = $(this).val()

        $.ajax({
            dataType: 'JSON',
            type: 'GET',
            assync: true,
            url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/distritos',
            success: function(dados) {
                for (var i = 0; i < dados.length; i++) {
                    if (dados[i].nome == nome) {
                        $('#cidade').after(`<p>${dados[i].nome}</p>`)
                    }
                }
            }
        })

    })

    $('.btn-success').click(function(e) {

        e.preventDefault()

        var dados = $('#form-cad').serialize()

        console.log(dados)
    })

});