const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
if(err) {
return console.log(err);
}

db.collection('Todos').find().toArray().then((count)=>{
console.log('Todos');
console.log(JSON.stringify(count, undefined, 2));
},(err)=> {
console.log('unable to fetch todos', err);
});



/*db.collection('Todos').insertOne({
text: 'Something to do',
completed: false
},(err, result)=> {
if(err){
return console.log('unable to insert todo', err);
}

console.log(result.ops[0]._id.getTimestamp());
});
*/

console.log('connected to mongodb server');
//db.close();
});
