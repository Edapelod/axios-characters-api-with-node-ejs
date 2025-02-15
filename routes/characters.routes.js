const router = require("express").Router();
const axios = require("axios");

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("characters/list-characters", { characters: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.get("/create", (req, res) => {
    res.render("characters/create-character")
})

/* router.get("/characters/:id/update", (req, res) => {
    res.render(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
}) */

router.post("/characters/create", (req, res, next) => {
    console.log(req.body)
    axios.post('https://ih-crud-api.herokuapp.com/characters', req.body)
    .then(responseFromAPI => {
        res.redirect("/characters")
    })
})

router.get("/characters/:id/update", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/edit-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.post("/characters/:id/update", async (req, res, next) => {
     await axios.put(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`, req.body)
    .then(responseFromAPI => {
        res.redirect(`/characters/${req.params.id}`)
    })
    .catch(err => console.error(err))
})

router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.post("/characters/:id/delete", (req, res) => {
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        res.redirect("/characters")
    })
})



module.exports = router;


// https://ih-crud-api.herokuapp.com/characters