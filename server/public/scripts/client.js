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

