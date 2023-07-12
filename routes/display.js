const router = require("express").Router()
const path = require("path")

router.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../front/index.html")

    res.sendFile(filePath,(err) => {
        if(err) {
            console.log(err)
        }
    })
})

module.exports = router;