$(document).ready(function() {
    $('.btn-find').click(function(e) {

        e.preventDefault()

        var cep = $('#CEP').val()

        var find = `https://viacep.com.br/ws/${cep}/json/`

        $.ajax({
            dataType: 'JSON',
            type: 'GET',
            assync: true,
            url: find,
            success: function(dados) {
                $('#logradouro').val(dados.logradouro)
                $('#bairro').val(dados.bairro)
                $('#localidade').val(dados.localidade)
                $('#estado').val(dados.uf)
            }
        })
    })

})