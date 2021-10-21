const express = require('express');
const app = express();
const cors = require('cors');
// const port = process.env.PORT || 3000;
const port = 5000;
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello node bro are you there');
})

const users = [
    {id: 1, name: 'Jahid', email: "jahidhasan321cse@gmail.com", phone: '45654856867'},
    {id: 2, name: 'Hasan', email: "Hasanan321cse@gmail.com", phone: '576556867'},
    {id: 3, name: 'Adom', email: "adoman321cse@gmail.com", phone: '7554856867'},
    {id: 4, name: 'Golammazon', email: "golamazon321cse@gmail.com", phone: '7544856867'},
    {id: 5, name: 'sakib', email: "sakiban321cse@gmail.com", phone: '8655856867'},
    {id: 6, name: 'jahid', email: "jahidhasan321cse@gmail.com", phone: '45654856867'},
    {id: 7, name: 'jahid', email: "jahidhasan321cse@gmail.com", phone: '45654856867'},
    {id: 8, name: 'jahid', email: "jahidhasan321cse@gmail.com", phone: '45654856867'},
    {id: 9, name: 'jahid', email: "jahidhasan321cse@gmail.com", phone: '45654856867'},
    {id: 10, name: 'jahid', email: "jahidhasan321cse@gmail.com", phone: '45654856867'}
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameters
    if(search) {
        const searchResult = users.filter(user =>user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);

    }

    res.send(users);

})
app.get('/post', (req, res)=>{
    res.send("I am a world class software engineer in the world")
})

app.get('/users/:id', (req, res)=>{
    const index = req.params.id;
    const user = users[index];
    res.send(user);
    
})

app.get('/fruits', (req, res)=>{
    res.send(['mangos, apple, komola'])
})
app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('fruits bro you are so sweet')
})

// app.method   


app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})



app.listen(port, ()=>{
    console.log('listening on port', port);
})
// const handler = (req, res) => {
//     res.send("Hello I am a software engineer")
// }