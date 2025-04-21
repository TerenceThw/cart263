
let udp = require('dgram');
let server = udp.createSocket('udp4');
let fs = require('fs');
// --------------------creating a udp server --------------------


// emits when any error occurs
server.on('error',function(error){
    console.log('Error: ' + error);
    server.close();
  });
  
  
  //emits when socket is ready and listening for datagram msgs
  server.on('listening',function(){
    let address = server.address();
    let port = address.port;
    let family = address.family;
    let ipaddr = address.address;
    console.log('Server is listening at port: ' + port);
    console.log('Server ip : ' + ipaddr);
    console.log('Server is IP4/IP6: ' + family);
  });
  
  //emits after the socket is closed using socket.close();
  server.on('close',function(){
    console.log('Socket is closed !');
  });
server.bind(3333);
  
 // emits on new datagram msg
  server.on('message',function(msg,info){
  
  
    console.log('Data received from client : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
    //socket.emit('new_data',  msg.toString());
   // fs.appendFileSync('message.txt', msg.toString());

  
//   //sending msg
//   server.send(msg,info.port,'localhost',function(error){
//     if(error){
//       client.close();
//     }else{
//       console.log('Data sent !!!');
//     }
  
//   });
  
  });



//});









// setTimeout(function(){
// server.close();
// },8000);

// -------------------- udp client ----------------

// let buffer = require('buffer');

// // creating a client socket
// let client = udp.createSocket('udp4');

// //buffer msg
// let data = Buffer.from('siddheshrane');

// client.on('message',function(msg,info){
//   console.log('Data received from server : ' + msg.toString());
//   console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
// });

// //sending msg
// client.send(data,2222,'localhost',function(error){
//   if(error){
//     client.close();
//   }else{
//     console.log('Data sent !!!');
//   }
// });

// let data1 = Buffer.from('hello');
// let data2 = Buffer.from('world');

// //sending multiple msg
// client.send([data1,data2],2222,'localhost',function(error){
//   if(error){
//     client.close();
//   }else{
//     console.log('Data sent !!!');
//   }
// });
