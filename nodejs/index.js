const express = require ('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Testing K8s...');
});

app.listen(8080, () => {
    for (let i=0; i<5; i++) {
    console.log(`Listening port 8080 +${i}`);
    }
});