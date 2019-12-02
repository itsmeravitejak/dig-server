const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const port = 3000
var dig=require("node-dig-dns")

app.get('/', (req, res) => res.send('Just post with ["domain.com", "ANY"]'))
app.post('/', function (req, res) {
    // console.log(req.body['Test'])
    dig(req.body)
        .then((result) => {            
            res.json(result);
        })
        .catch((err) => {
            console.log('Error:', err);
            res.json({error:true})
        });
    
  })

app.listen(process.env.PORT, () => console.log(`dig server listening on port ${port}!`))