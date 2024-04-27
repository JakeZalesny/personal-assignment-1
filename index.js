import express from 'express';

const express = require('express')

const app = express()

app.get('/name', (req, res) => {
    const name = "Big Al";

    res.send(name);
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)

});