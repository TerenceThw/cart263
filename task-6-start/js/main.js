window.onload = run;


function run() {
  document.querySelector("#stepOneButton").addEventListener("click", fetchText);


 /****** PART A:: FETCH */  

 
 async function fetchText() {
    console.log("in fetch");
    //let raw_rainbow_text = "";
    try {
      let response =await fetch('../files/rainbow.txt');
      let raw_rainbow_text = await response.text();
      document.querySelector("#resetButton").addEventListener("click", resetPoem);
      document.querySelector("#stepOneButton").style.display="none";
      document.querySelector("#inputDiv").style.display ="block";
      document.querySelector("#rainbow_text").textContent = raw_rainbow_text;
      runPartB(raw_rainbow_text);

    } catch (e) {
      console.log(e)
    }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document
      .querySelector("#produce-poem")
      .addEventListener("click", producePoem);

   /* FILL IN HERE */
    function producePoem() {
      console.log(originalRainBowText)
      let input = document.querySelector("#phrase").value;
      let phrase_as_array = input.split(/[\s.!?\n]+/);
      let rainbow_tokens= originalRainBowText.split(/[\s.!?\n]+/);

      
        runPartC(rainbow_tokens, phrase_as_array); 
      } 
    }
  


  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_words, seed_phrase_array) {
    console.log(rainbow_words);
    console.log(seed_phrase_array);

    let poem_sentence ="";

    for (let word of seed_phrase_array){
      let matched_word = "";

      for(let i =0; i< word.length; i++){
        let letter = word[i];

        let match = rainbow_words.find(
          rainbow_word=>rainbow_word.length>i&& rainbow_word[i]===letter
      );

      matched_word += match ? match + " " : word +" ";

    }

    poem_sentence += matched_word.trim()+" ";
  }
    document.querySelector("#rainbow_text").textContent = poem_sentence.trim();

 
    //to next stage
    runPartD(poem_sentence);
  }

  
   /****** PART D:: VISUALIZE  */
  function runPartD(new_sentence){
   
    let outputDiv = document.querySelector("#output");
    outputDiv.style.display ="block";

    outputDiv.innerHTML = "";

    new_sentence.split("").forEach((char, index) => {
      let span = document.createElement("span");
      span.textContent = char;

      span.style.fontSize = `${Math.random()*20+20}px`;
      span.style.color = `hsl(${Math.random()*360}, 100%, 50%)`;
      span.style.margin = "5px";
      span.style.display = "inline-block";
      span.style.transition = "transform 0.2s ease-in-out";
      span.style.position ="absolute";

      span.addEventListener("mousedown", () => {
        span.style.transform = "scale(1.5)";

      });

      span.addEventListener("mouseup", ()=> {
        span.style.transform = "scale(1)";

      });

      outputDiv.appendChild(span);

      const moveRandomly = () => {
        const maxX = outputDiv.clientWidth - span.offsetWidth;
        const maxY = outputDiv.clientHeight - span.offsetHeight;  

        const newX = Math.random()*maxX;
        const newY = Math.random()*maxY;

        span.style.left =`${newY}px`;
        span.style.top = `${newY}px`;
      };
      setInterval(moveRandomly, 2000);
      moveRandomly();
    });




  }

  /****** PART E:: RESET  */
  function resetPoem() {
  /*** TO FILL IN */
  
  }
} //window onload


