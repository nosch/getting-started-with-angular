'use strict';

var _ = require('lodash');

/**
 * collection
 * @type {Array}
 */
var collection = [
    {id: 101, name: 'Gundula', 'age': 23, 'city': 'Berlin'},
    {id: 102, name: 'Lothar', 'age': 38, 'city': 'Recklinghausen'},
    {id: 103, name: 'Eva', 'age': 41, 'city': 'Köln'}
];

/**
 * query
 * @param {Object} [params]
 * @returns {Array|*}
 */
var query = function (params) {
    return _.where(collection, params);
};

/**
 * getOne
 * @param {Number} id
 * @returns {Object}
 */
var getOne = function (id) {
    return query({id: id})[0];
};

/**
 * getAll
 * @returns {Array|*}
 */
var getAll = function () {
    return query();
};

/**
 * create
 * @param {Object} item
 */
var create = function (item) {
    var friend = item;

    friend.id = Math.floor(Math.random() * 1000);

    collection.push(friend);

    return friend;
};

/**
 * update
 * @param {Object} item
 * @returns {Object}
 */
var update = function (item) {
    var index = _.findIndex(collection, {id: item.id});

    console.log(item);

    if (index !== -1) {
        collection[index] = item;

        return collection[index];
    }
};

/**
 * save
 * @param {Object} item
 */
var save = function (item) {
    if (item.id) {
        update(item);
    } else {
        create(item);
    }
};

/**
 * remove
 * @param {Number} id
 * @returns {Object}
 */
var remove = function (id) {
    return  _.remove(collection, {id: id})[0];
};

module.exports = {
    getAll: getAll,
    getOne: getOne,
    save: save,
    remove: remove
};
