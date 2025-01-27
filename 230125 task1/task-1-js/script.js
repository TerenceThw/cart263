window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */
console.log(document.getElementsByTagName("p"));
/***OUTPUT: 
 * HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */
console.log(document.getElementsByTagName("p")[0]);
/***OUTPUT: 
 * <p id="1">...</p>
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */
console.log(document.getElementsByClassName("inner-container"));
/***OUTPUT: 
 * HTMLCollection(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */
console.log(document.getElementsByClassName("img-container"));    //find out how many img-container contain here (0-7)
console.log(document.getElementsByClassName("img-container")[7]);
/***OUTPUT: 
 * <div class="img-container">flex
 */


/*************************************** */
/* 5A: all h2 elements */
/* 5B: length of the list in 5A */
/* 5C: the text content of the first element in the list from 5A */
/***CODE */
console.log(document.getElementsByTagName("h2"));
console.log(document.getElementsByTagName("h2").length);
console.log(document.querySelector("h2").textContent);
/***OUTPUT: 
 * 0: h2  length: 1
 * 1
 *  The header of this fancy page
 */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */
console.log(document.getElementById("parent"));
/***OUTPUT: 
 * <div class="inner-container">…</div>
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */
/* 1: Select the first paragraph and replace the text within the paragraph... */
/***CODE */
// let paragraphs = document.querySelectorAll("p");
// //go through each element
// for(let  firstParagraph of paragraphs){
//    console.log(firstParagraph)
//    firstParagraph.textContent ="New text in paragraph one: text changed by Terence on the following date: jan 25 2025"
// }
/*************************************** */
/* 2: Select all elements in the HTML that have the class name content-container
 and change the background color ... of first and second ...*/
/***CODE */
// console.log(document.getElementsByClassName("content-container"));
// document.getElementsByClassName("content-container")[0].style.background = "orange";
// document.getElementsByClassName("content-container")[1].style.background = "purple";


/*************************************** */
/* 3: Change the src element of the first image element on the page to be ...
/***CODE */
// document.querySelectorAll("img")[0].setAttribute("src","task-1-images/seven.png");
// console.log(document.querySelectorAll("img")[0]);

/*************************************** */
/* 4: Select the third paragraph element on the page and 
replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
/***CODE */
// document.querySelectorAll("p")[2].innerHTML = "<h2>TEST 123</h2>";

/*************************************** */
/* 5: Select the fourth paragraph element on the page and 
add to the existing content an h2 element containing the text `TEST 123`
/***CODE */
// document.querySelectorAll("p")[3].innerHTML += "<h2>TEST 123</h2>";

/*************************************** */
/* 6: Select the fifth paragraph element on the page and add to the existing content 
an img element that holds `one.png`, and add the class newStyle to said paragraph element.
/***CODE */

// let fifthParagraph = document.querySelectorAll("p")[4];
// let newPhoto = document.createElement('img');
// fifthParagraph.classList.add("newStyle");
// newPhoto.src = "task-1-images/one.png";
// fifthParagraph.appendChild(newPhoto);


/*************************************** */
/* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
then access all elements with class name inner-container and save to a variable called `innerContainers`. 
Next, iterate over the colors array, and for each color: 
assign the element from innerContainers variable with the same index 
(i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
a background using that color.
/***CODE */

// let colors = ['red','blue','green','orange'];
// let innerContainers = document.querySelectorAll('.inner-container');
// for (let i =0; i<colors.length; i++){
//     innerContainers[i].style.backgroundColor=colors[i];
// }



/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1B: Create a function:function customCreateElement(parent){ //body } */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
let AllPTagsThree = document.querySelectorAll('p');
function customCreateElement(parent){
 let paragraph = document.createElement("p");
 paragraph.textContent= "using create Element";
 paragraph.style.backgroundColor = "green";
 paragraph.style.color = "white";
 parent.appendChild(paragraph);

 }

 for (let i =0; i<AllPTagsThree.length; i++){
 customCreateElement(AllPTagsThree[i]);

 }



/***EXPLANATION::
 *  For this code, an extra message with green background has been add to each paragraph element. The logic behind can be break into three parts. First of 
 *  all, we have to find a way to select all the paragraph elemenets and put them in a new vraible. After, we get to the second part, we create a function that 
 * contain all the chanagement we would like to add toward the paragraph element. Once the function has been created, we get to the part three, we call the function.
 * Here, we use a for loop to loop over all the paragraph element, and apply change to each paragraph element.
 *  
 */

/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */

function customNewBoxCreate(parent){ 
    let testDiv = document.createElement("div");
    testDiv.classList.add("testDiv");
    parent.appendChild(testDiv);
    return testDiv;

}

function createGrid(rows, colloms){
    let newBox = document.getElementById('new-grid');

    for (let i=0; i<rows; i++){
        for(let j=0; j<colloms; j++){
            let returnDiv = customNewBoxCreate(newBox);

            returnDiv.style.left = `${j * 40}px`; 
            returnDiv.style.top = `${i * 40}px`;

        }

    }
}
createGrid(10,10);


/***EXPLANATION::
 *  This code can be divide into three different parts. First of all, the function customNewBoxCreate create element div and set it into a class. 
 *  After, we append the testDiv with the funtion. We now move to the next step, create a function that creates grid. We get the elemetn new-grid
 *  in order to use this css setting for the grid structure. i represnt rows and j represent colloms. After, we call the function customNewBoxCreate 
 *  and give setting to the size of each grid. Last tep, we call the funtion createGrid in order to dispaly the grids. 
 */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */

function customNewBoxCreate2(parent){ 
    let testDiv2 = document.createElement("div");
    testDiv2.classList.add("testDiv");
    parent.appendChild(testDiv2);
    return testDiv2;

}

function createGrid(rows, colloms){
    let newBox2 = document.getElementById('new-grid-three');

    for (let i=0; i<rows; i++){
        for(let j=0; j<colloms; j++){
            let returnDiv2 = customNewBoxCreate2(newBox2);

            returnDiv2.style.left = `${j * 40}px`; 
            returnDiv2.style.top = `${i * 40}px`;

            if (j%3 ==0){
                returnDiv2.style.backgroundColor = "red";
                returnDiv2.textContent = "0"; 

            } else if (j%3==1){
                returnDiv2.style.backgroundColor = "orange"
                returnDiv2.textContent = "1"; 

            } else if (j%3 ==2){
                returnDiv2.style.backgroundColor = "yellow"
                returnDiv2.textContent = "2"; 
            }
           
        }

    }
}
createGrid(10,10);




/***EXPLANATION::
 *  the function reamin pretty much the same as the previous one. one top on that, we creatred a for llop that allow us changing 
 *  the background according to the mathematic result. we divide the variable j (or you can also use i, wont change the reuslt) by 3. 
 *  When the result is 0, the backgorund turn red, when the reuslt is 1, the background turn orange and when the result is 2, 
 *  the backgroudn turn yellow. 
 * 
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    




}