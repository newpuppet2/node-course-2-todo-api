var express = require('express');
var bodyParser = require('body-parser');

var {mongoose}= require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=> {
var todo = new Todo({
text: req.body.text
});

todo.save().then((doc)=> {
res.send(doc);
}, (e) => {
res.status(400).send(e);
});
});

app.listen(3000, ()=>{
console.log('server listening on port 3000');
});
/*var Todo = mongoose.model('Todo',{
text: {
type: String,
required: true,
minlength: 1,
trim: true
},
completed: {
type: Boolean,
default: false
},
completedAt: {
type: Number,
default: null
}
});

var newtodo = new Todo({
text: '  cook dinner for everyone1  '
});

newtodo.save().then((doc)=> {
console.log('saved todo', doc);
}, (e)=> {
console.log('unable to save todo');
});
*/

/*var User = mongoose.model('User', {
email: {
type: String,
required: true,
trim: true,
minlength: 1
}
});
*/
/*var user = new User({
email: 'pulkit.khaitan@tcs.com'
});

user.save().then((doc)=> {
console.log('user saved', doc);
}, (e)=> {
console.log('unable to save user', e);
});
*/
