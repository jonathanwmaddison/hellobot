'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    let text = req.body.text;
    if(/hello/.test(text)) {
        let data = {
            response_type: 'in_channel',
            text: 'Hello World',
            attachments: [
                {
                    image_url: 'https://steemitimages.com/0x0/http://www.amir.ninja/content/images/2015/12/Hello-World.png'
                }
        ]};
        res.json(data);
        return
     } else {
        res.send('Say hello - be polite!');
        return
     }
});

const server = app.listen(3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);  
});
