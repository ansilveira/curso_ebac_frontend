$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();

        const taskName = $('#taskInput').val().trim();
        if (taskName === '') return;

        const $li = $('<li></li>').text(taskName);

        // Adiciona a funcionalidade de riscar o texto ao clicar no item da lista
        $li.click(function() {
            $(this).toggleClass('completed');
        });

        const $removeButton = $('<button></button>')
            .text('Remover')
            .addClass('remove-button')
            .click(function(event) {
                event.stopPropagation(); // Impede que o clique no botão de remover risque o texto
                $li.remove();
            });

        $li.append($removeButton);
        $('#taskList').append($li);

        $('#taskInput').val('');
    });
});



