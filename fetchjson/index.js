"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var Url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(Url).then(function (response) {
    console.log(response.data);
    var Todo = response.data;
    var id = Todo.id;
    var title = Todo.title;
    var completed = Todo.completed;
    console.log("The Todo with Id: ".concat(id, "\n        Has a title of :").concat(title));
});
