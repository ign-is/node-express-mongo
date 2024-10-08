const express = require('express');
const router = express.Router();
const data = {};
data.employess = require('../../data/employees.json');

router.route('/')
    .get((req, res) => {
        res.json(data.employess);
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });

    router.route('/:id')
        .get((req, res) => {
            res.json({ "id": req.params.id });
        })

module.exports = router;