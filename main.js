$(document).ready(function(){ // ($) PARA CHAMAR O JQUERY
    
    //* document.querySelector('header button').addEventListener('click', function(e){comandos})

    // TAMBÉM CHAMADO DE CALLBACK (FUNÇÃO DENTRO DE EVENTO)
    $('header button').click(function(){
        $('form').slideDown(); // (slideDown) PARA TER A ANIMAÇÃO DE DESLIZAR PARA BAIXO
    }) 

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); // (slideUp) PARA TER A ANIMAÇÃO DE DESLIZAR PARA CIMA
    }) 

    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlDaNovaImagem = $('#url-img-nova').val(); // (.val) = .value
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${urlDaNovaImagem}" />`).appendTo(novoItem); // CRIA UMA IMAGEM REFERENTE AO LINK E INSERE DENTRO (appendTo) DA VARIÁVEL
        $(`
            <div class="overlay-img-link"> 
                <a href="${urlDaNovaImagem}" target="_blank">
                    Ver a imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo("ul"); // ADICIONAR ELEMENTO A PÁGINA
        $(novoItem).fadeIn(1000); // fadeIn(5000) ANIMAÇÃO DE SURGIR EM 5 SEGUNDOS
        $('#url-img-nova').val(''); // LIMPAR 
    })
})