const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require("child_process");
const fs = require('fs');

const app = express();
const port = 3080;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.text())

app.post('/check', (req, res) => {
    const body = req.body;
    const filename = "/tmp/script.sh";
    fs.writeFile(filename, body, function(err) {
        if(err) {
            // return console.log(err);
        } else {
            console.log("The file was saved!");

            exec(`bash -n ${filename}`, (error, stdout, stderr) => {
                if (error) {
                    let lines = error.message.split('\n');
                    lines.splice(0,1);
                    const processedLines = [];
                    for (let i = 0; i < lines.length; i++) {
                        processedLines.push(lines[i].slice(filename.length + 2))
                    }
                    let errorMsg = processedLines.join('\n');
                    res.send(errorMsg);
                    return;
                }
                res.send("")
            });
        }
    });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
