const express = require('express');
const app = express();

const requests = new Map();

/*
    It will produce a memory leak because the requests is global and in every
    request, it is setting a new id at it.
    So, it will be a time that the memory will leak.
*/

app.get("/", (req, res) => {
    requests.set(req.id, req);
    res.status(200).send("Hello world")
})