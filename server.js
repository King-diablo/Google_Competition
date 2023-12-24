const express = require("express");
const bodyParser = require("body-parser");
const sendmail = require("./src/helper/sendMail");

const port = 3000

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))


app.post("/sendmail", (req, res) => {

    const { to, subject, msg } = req.body;

    sendmail(to, subject, msg);

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})