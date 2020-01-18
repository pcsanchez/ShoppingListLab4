
function watchForm() {
    let form = $('form');
    let ul = $('ul');
    $(form).on('submit', (event)=> {
        event.preventDefault();

        $(ul).append(`<li class="ingredient">
                            <p class="ingredientName">${$('input').val()}</p>
                            <button class="checkButton">Check</button>
                            <button class="deleteButton">Delete</button>
                        </li>`);
        $('input').val('');
    })
}

function buttonFunctions() {
    let ul = $('ul');

    $(ul).on('click', '.checkButton', (event)=> {
        $(event.target).siblings('p').toggleClass('checked');
    })

    $(ul).on('click', '.deleteButton', (event)=> {
        $(event.target).parent().remove();
    })
}

function init() {
    watchForm();
    buttonFunctions();
}

init();