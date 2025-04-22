/**
 * Bubbles
 * Terence Tang
 * A game where you control the red bubble and merge all other bubbles.
 * activate the application and move the phone around to contorl the red bubble
 * 
 * Controls: 
 * - Zig Sim Pro, 
 * - Application Zig Sim pro, use your phone to control the red balloon and merge with all others within 5 seconds!
 * 
 * Uses:
 * js script
 * https://p5js.org
 */



const bubbleContainer = document.getElementById('bubble-container');
let bubblesArray = [];
let redBubble=null;
let isGameOver =false;
let mergeTimer = null;
const selectorTimeOut = 5000;
let hasInteracted = false;
console.log("Expected data format examples:");
console.log("Arkit format:", {arkit: {rotation: [0.1, 0.2, 0.3, 0.4]}});
console.log("Accel format:", {accel: {x: 0.001, y: 0.002}});


/**
 * What to reset when we reset the game
 */
function resetGame(){
    isGameOver = false;
    hasInteracted =false;
    bubblesArray =[];
    bubbleContainer.innerHTML='';
    clearTimeout(mergeTimer);
    mergeTimer = null;
    generateBubbles();
}

/**
 * create Bubbles
 */
function generateBubbles() {
    console.log("generateBubbles() called"); 
    const numBubbles = Math.floor(Math.random() * 20) + 10; 
    for (let i = 0; i < numBubbles; i++) {
        createBubble();
        
    }
    console.log(`${bubblesArray.length}`);
    
    if(bubblesArray.length>0){
       selectRedBubble();
    }

    moveBubble();
}

/**
 * random selet a bubble to be the red controable bubble
 */
function selectRedBubble(){
    if (redBubble && redBubble.element) {
        redBubble.element.classList.remove('select-bubble');
        redBubble.element.style.backgroundColor ='';
    }

    if (bubblesArray.length>=2){
    redBubble = bubblesArray[Math.floor(Math.random()*bubblesArray.length)];
    if(redBubble&& redBubble.element){
        redBubble.element.classList.add('select-bubble');
        redBubble.element.style.backgroundColor ='red';
       
    }
}else if (bubblesArray.length ===1 && !isGameOver){
    endGame(true);
    }
}

/**
 * create Bubbles with random position and size
 */
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.top = `${Math.random() * 100}vh`;
    const size = Math.random() * 50 + 30;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;  
    bubbleContainer.appendChild(bubble);

    const bubbleData = {
        element: bubble,
        x: parseFloat(bubble.style.left),
        y: parseFloat(bubble.style.top),
        size: size,
        radius: size/2,
        speed: (Math.random() * 0.5 + 0.2)*0.03,           
        angle: Math.random() * 2 * Math.PI,
    };  

    bubblesArray.push(bubbleData);
    return bubbleData;
}

/**
 * make all bubbles, except the red one randomly move
 */
function moveBubble() {
    if (isGameOver) return;

   for  (let i=0;i<bubblesArray.length; i++){
        const bubble = bubblesArray[i];
    

        if(bubble !== redBubble){
            updatePosition(bubble);
        }
   }
   if (hasInteracted){
   checkDistance();
}
   requestAnimationFrame(moveBubble);
}

/**
 * update bubbles position
 */
    function updatePosition(bubbleData) {
        bubbleData.x += Math.cos(bubbleData.angle) * bubbleData.speed;
        bubbleData.y += Math.sin(bubbleData.angle) * bubbleData.speed;

        bubbleData.element.style.left = `${bubbleData.x}vw`;
        bubbleData.element.style.top = `${bubbleData.y}vh`;

        
        if (bubbleData.x < 0 || bubbleData.x > 100) {
            bubbleData.angle = Math.PI - bubbleData.angle;
        }
        if (bubbleData.y < 0 || bubbleData.y > 100) {
            bubbleData.angle = -bubbleData.angle;
        }

 
    }


/**
 * verify the distamce between red bubble and the other bubbles and seeif red bubble can be merge with other bubble
 */
function checkDistance(){
    if (!redBubble) return;

    for (let i = 0; i< bubblesArray.length; i++){
        const bubble = bubblesArray[i];

            if(bubble !== redBubble){

                const dx = redBubble.x- bubble.x;
                const dy = redBubble.y - bubble.y;
                const distance = Math.sqrt(dx*dx+dy*dy); 

                const redRadiusVw = (redBubble.radius / window.innerWidth) * 100;
                const bubbleRadiusVw = (bubble.radius / window.innerWidth) * 100;

            
    
                if(distance<redRadiusVw + bubbleRadiusVw){
                    mergeBubbles(redBubble,bubble);
                    return;
    
                }
    

            }

            }
            

        }

 /**
 * merge red bubble with the other bubbles
 */
function mergeBubbles(bubble1,bubble2){
    console.log("mergeBubbles");
    if(isGameOver) return;
    
    let mergingBubble;
   
    if(bubble1 ===redBubble){
        mergingBubble = bubble2;
    }else if (bubble2 === redBubble){
        mergingBubble = bubble1;
    }else{
        return;
    }


    const newSize = Math.sqrt(bubble1.size*bubble1.size + bubble2.size*bubble2.size);
    redBubble.element.style.width =`${newSize}px`;
    redBubble.element.style.height =`${newSize}px`;
    redBubble.size =newSize; 
    redBubble.radius = newSize/2;

    mergingBubble.element.remove();
    bubblesArray = bubblesArray.filter(b=> b!==mergingBubble);
    //resetMergeTimer();
    
        if (bubblesArray.length === 1&& !isGameOver){
            endGame(true);
        }

   resetMergeTimer();
}


/**
 * countdown before plyaer lost the game (5 seconds)
 */
function resetMergeTimer(){
    clearTimeout(mergeTimer);
    
        mergeTimer = setTimeout(() =>{
            if(hasInteracted && !isGameOver) {
            endGame(false);
            }
        }, selectorTimeOut);
    
    
}

/**
 * show message according to the condition and reset game
 */

function endGame(won){
    isGameOver = true;
    clearTimeout(mergeTimer);

    if (won){
        if (confirm('You win!')){
            resetGame();
        }

    }else {
        if (confirm("Game Over")){
            resetGame();
        }
    }
}


/**
 * send data from ZIG SIM PRO to websocket and modify data based on condition 
 */

let ws = new WebSocket("ws://172.20.10.2:4200");                // this is modify based ib the sample sabine shared with me

ws.onopen = function () {
    console.log("WebSocket connected");

    ws.onmessage = function (event) {
        try {
            const data = JSON.parse(event.data);
            if (!redBubble || isGameOver) return;

            const sensorData = data.sensordata;
            if (!sensorData) return;

            if (!hasInteracted) {
                hasInteracted = true;
                resetMergeTimer();
            }

           
            if (sensorData.accel) {
                const scale = 1000;
                const targetX = redBubble.x + (sensorData.accel.x * scale);
                const targetY = redBubble.y + (sensorData.accel.y * scale);
                
                
                const smoothing = 0.2; 
                const newX = redBubble.x + (targetX - redBubble.x) * smoothing;
                const newY = redBubble.y + (targetY - redBubble.y) * smoothing;
                
                updateBubblePosition(newX, newY);
            }

            
            if (sensorData.arkit && sensorData.arkit.rotation) {
                const [qx, qy, qz, qw] = sensorData.arkit.rotation;
                const targetX = ((qx + 1) / 2) * 100;
                const targetY = ((qz + 1) / 2) * 100;
                
                
                const smoothing = 0.3; 
                const newX = redBubble.x + (targetX - redBubble.x) * smoothing;
                const newY = redBubble.y + (targetY - redBubble.y) * smoothing;
                
                updateBubblePosition(newX, newY);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };
};

/**
 *  move the red bubble
 */
function updateBubblePosition(x, y) {
    x = Math.max(0, Math.min(100, Number(x)));
    y = Math.max(0, Math.min(100, Number(y)));

    redBubble.x = x;
    redBubble.y = y;
    redBubble.element.style.left = `${x}vw`;
    redBubble.element.style.top = `${y}vh`;
};

resetGame();