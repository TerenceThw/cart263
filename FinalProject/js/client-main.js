window.onload = function () {
    console.log("client js loaded in ws example");

   /* Establishing a WebSocket relies on the HTTP Upgrade mechanism , so the request for the protocol upgrade is implicit 
     * when we address the web server as ws://www.example.com or wss://www.example.com.
     *  We are upgrading the HTTP conncection to a web socket connection
     * The WebSocket() constructor doees all the work to create the initial http connection 
     * and the handshaking protocol for you
     */
    //home
    let ws = new WebSocket("ws://172.20.10.2:4200");
    //let ws = new WebSocket("ws://172.31.9.0:4200");
  //1: when the connection is open (setup)
    ws.onopen = function () {
  
    //    //2: when we receive something
       ws.onmessage = function (event) {
        console.log("got something")
        //console.log(event.data);
        console.log(JSON.parse(event.data))
       };

      //  ws.send(JSON.stringify({ eventName: 'config', payload:  {
      //   //home
      //   // server: {
      //   //     port: 3333,
      //   //     host: '127.0.0.1'
      //   // },
      //   // client: {
      //   //     port: 3334,
      //   //     host: '10.0.1.37'
      //   // }

      //     server: {
      //       port: 3333,
      //       host: '127.0.0.1'   //ip of my machine(locla host) laptop
      //   },
      //   client: {
      //       port: 3334,
      //       host: '172.31.9.0'  //cleint ip 
      //   }

  //  } 
  //}
//));
    
    }
}


    // socket.on('message', function(obj) {
    //     var status = document.getElementById("status");
    //     status.innerHTML = obj[0];
    //     console.log(obj);
    // });



    //     let receivedMsg = JSON.parse(event.data);
  
    //     console.log("Message is received..." + receivedMsg);
    //     console.log(receivedMsg);
    //     document.getElementById("response").innerHTML = receivedMsg.payload;
  
   