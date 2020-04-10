const fs = require('fs');
const path = require('path');

//Create Folder
// fs.mkdir(path.join(__dirname,'/test'),{}, function(err){
//     if(err) throw err;
//     console.log('Folder created');
// });

//Create and Write to file
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//    'Hello World', 
//    err => {
//     if (err) throw err;
//     console.log('File Written');
// }
// );
// //append
// fs.appendFile(
//     path.join(__dirname,'/test','hello.txt'),
//    'I love node.js', 
//    err => {
//     if (err) throw err;
//     console.log('File Written');
// }
// );

fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});