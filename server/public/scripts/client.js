console.log('JS');
$(onReady);

function onReady() {
    console.log('JQ');
    clickListeners();
    getTasks();
};


function clickListeners() {
    $(`#addTaskBtn`).on(`click`, function () {
        let newTask = {
            task: $(`#taskIn`).val(),
            complete: $(`#completeIn`).val(),
            complete_by: $(`#completeByIn`).val(),
            notes: $(`#notesIn`).val()
        };
        //POST function called here
    });
};


function getTasks() {
    $.ajax({
        method: `GET`,
        url: `/tasks`
    }).then(function(response) {
        console.log('In client side GET');
        //render function
    }).catch(function(error) {
        console.log('Error at client side GET', error);
        res.sendStatus(500);
    });
};