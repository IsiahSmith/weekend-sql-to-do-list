console.log('JS');
$(onReady);

function onReady() {
    console.log('JQ');
    clickListeners();
    getTasks();
};

// CLICK LISTENERS
function clickListeners() {
    $(`#addTaskBtn`).on(`click`, function () {
        let taskToSend = {
            task: $(`#taskIn`).val(),
            complete: $(`#completeIn`).val(),
            complete_by: $(`#completeByIn`).val(),
            notes: $(`#notesIn`).val()
        };
        sendTasks(taskToSend);
    });
    $(`#taskDrop`).on(`click`, `.completeBtn`, updateComplete);
};

// CLIENT SIDE GET
function getTasks() {
    $.ajax({
        method: `GET`,
        url: `/weekend-to-do-app`
    }).then(function (response) {
        console.log('In client side GET');
        renderTasks(response);
    }).catch(function (error) {
        console.log('Error at client side GET', error);
        res.sendStatus(500);
    });
};

// CLIENT SIDE POST
function sendTasks(newTask) {
    $.ajax({
        method: `POST`,
        url: `/weekend-to-do-app`,
        data: newTask
    }).then(function (response) {
        console.log('In client side POST');
        getTasks();
    }).catch(function (error) {
        console.log('Error at client side POST', error);
        alert('Failed to add a task');
    });
};

// RENDERS TO DOM
function renderTasks(tasks) {
    $(`#taskDrop`).empty();
    for (let i = 0; i < tasks.length; i++) {
        // let readyClass = ``;
        // if (tasks[i].complete) {
        //     readyClass = 'hidden';
        // };
        let taskEntry = (`
        <tr data-id="${tasks[i].id}">
            <td>${tasks[i].task}</td>
            <td>${tasks[i].complete}</td>
            <td>${tasks[i].complete_by}</td>
            <td>${tasks[i].notes}</td>
            <td>
                <button class="completeBtn">Complete</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
        `);
        $(`#taskDrop`).append(taskEntry);
    };
};

// CLIENT SIDE PUT
function updateComplete() {
    let complete = $(this).text();
    let id = $(this).closest(`tr`).data(`id`);
    console.log(id, complete);

    $.ajax({
        method: `PUT`,
        url: `/weekend-to-do-app/${id}`,
        data: {
            complete: complete
        }
    }).then(function (response) {
        console.log(response);
        getTasks();
    }).catch(function (error) {
        console.log(error);
    });
};