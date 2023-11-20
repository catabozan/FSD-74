const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let sendResponse = (response, statusCode, contents, message = null) => {
  let status = "error"

  if (statusCode < 300) {
    status = "ok"
  }

  let responseData = {
    // status: status,
    status,
    message,
    body: contents,
  };

  response.status(statusCode)
    .json(responseData)
};

app.get("/", (req, res) => {
  sendResponse(res, 200, {}, "Hello World")
});

app.get("/test", (request, response) => {
  sendResponse(response, 200, {}, "test response2")
});

app.post("/test-post", (req, res) => {
  let data = req.body;
  sendResponse(res, 201, data)
});

app.post("/age-verification", (req, res) => {
  let age = req.body.age;

  if (age < 18) {
    sendResponse(res, 201, {}, "you are not of legal age, you cannot gamble")
  } else {
    sendResponse(res, 201, {}, "you are of legal age, welcome!")
  }
});

app.all('*', (req, res) => {
  sendResponse(res, 404, {}, "Url not Found")
})

// function myFunction(param1, param2) {
//     console.log("test1")
// }

// let myFunction2 = function (param1, param2) {
//     console.log("test2")
// }

// let myFunction3 = (param1, param2) => {
//     console.log("test3")
// }

// myFunction()
// myFunction2()
// myFunction3()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
