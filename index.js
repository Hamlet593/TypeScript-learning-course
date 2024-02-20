"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
function logTodo(id, title, completed) {
    console.log("ToDo id: ".concat(id, ", ToDo Title: ").concat(title, " Todo Completed: ").concat(completed));
}
