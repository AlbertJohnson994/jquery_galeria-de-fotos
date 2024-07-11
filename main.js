/*$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-Cancelar'))

    document.querySelector('header button').addEventListener('click', function(){

    })
    
    })*/

    $(document).ready(function(){
      $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-Cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $ ('endereco-da-nova-imagem').val();
        const novoItem = $('<li style=" display: none"></li>');
        $(`img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        $(`<div class="overlay-imagem-link">

                <a href="${enderecoDaNovaImagem}" target="blank" title="ver a image em tamanho real."
                ver a image em tamanho real
                </a>

            </div>

        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);

        $(`endereco-da-nova-imagem`).val(``);
    })

})
