const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
if(err) {
return console.log(err);
}
db.collection('Todos').insertOne({
text: 'Something to do fourth',
completed: true
},(err, result)=> {
if(err){
return console.log('unable to insert todo', err);
}

console.log(result.ops[0]._id.getTimestamp());
});


console.log('connected to mongodb server');
db.close();
});
