'use strict';

var express = require('express');
var friends = express.Router();
var resource = require('../resource/friends');

friends.get('/', function (req, res) {
    res.send(resource.getAll());
});

friends.get('/:id', function (req, res) {
    var id = +req.params.id;

    if (isNaN(id) || !resource.getOne(id)) {
        return res.sendStatus(400);
    }

    res.send(resource.getOne(id));
});

friends.post('/', function (req, res) {
    var data = req.body;

    if (!data.name || !data.age) {
        return res.sendStatus(400);
    }

    data.age = +data.age;

    res.send(resource.save(data));
});

friends.put('/', function (req, res) {
    var data = req.body;

    if (!data.id || !data.name || !data.age) {
        return res.sendStatus(400);
    }

    data.id = +data.id;
    data.age = +data.age;

    res.send(resource.save(data));
});

friends.delete('/:id', function (req, res) {
    var id = +req.params.id;

    if (isNaN(id) || !resource.getOne(id)) {
        return res.sendStatus(400);
    }

    res.send(resource.remove(id));
});

module.exports = friends;
