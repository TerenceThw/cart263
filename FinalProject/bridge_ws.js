
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4200 });
let udp = require('dgram');
let server = udp.createSocket('udp4');



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
server.bind(3335);

  
//  // emits on new datagram msg
//  server.on('message',function(msg,info){
  
  
//     console.log('Data received from client : ' + msg)
//     let jsonParse = JSON.parse(msg)
//     console.log(jsonParse.sensordata)
//   //  ws.send(jsonParse.sensordata)
  
//   });

console.log("Hello from my_ws");

wss.on('connection', function connection(ws,req) {
        // ws.send('thanks');
        server.on('message',function(msg,info){
  
  
           // console.log('Data received from client : ' + msg)
            let jsonParse = JSON.parse(msg)
            console.log(jsonParse.sensordata)
            ws.send(msg.toString())
          
          });
        
  
//  // emits on new datagram msg

})














