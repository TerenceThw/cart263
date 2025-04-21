window.onload = async function(){
    console.log("task 7-8");

    try{
        let response = await fetch('data/iris.json');
        let data = await response.json();
        let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];

        let irisesWithColor = data.map(addColorToIris);

        console.log(irisesWithColor);
        console.log(irisesWithColor[0]);

        const filteredIris = irisesWithColor.filter(function(flower){
            return (flower.sepalWidth<4);
        });


        const totalPetalLength = irisesWithColor.reduce(function(sum, flower) {
            return sum + flower.petalLength;

        }, 0);
        const averagePetalLength = totalPetalLength / irisesWithColor.length;
        console.log("Average");
        console.log(averagePetalLength);


        const findIris = irisesWithColor.find(function(flower){
            return flower.petalWidth >1.0;

        });
        console.log("isis with petalWith>1", findIris);


        const petalOver10 = irisesWithColor.some(function(flower){
            return flower.petalLength >10;

        });
        console.log("flower with petalLength over 10", petalOver10);

        const petalEqual42 = irisesWithColor.some(function(flower){
            return flower.patelLength === 4.2;

        });
        console.log("iris with petal equul to 4.2", petalEqual42);

        const allPetalWidthsUnder3 = irisesWithColor.every(function(flower){
            return flower.petalWidth <3;

        });

        console.log("All iris have width under 3", allPetalWidthsUnder3);

        const allSpetalWidthGreaterThen12 = irisesWithColor.every(function(flower){
            return flower.spealWidth>1.2;
        });
        console.log("irises have sepal Width over 1.2", allSpetalWidthGreaterThen12);


        const irisesWithColorsSorted = irisesWithColor.toSorted(function(a, b){
            return a.PetalWidth - b.petalWidth;

    
    });

    console.log("sorted by petalWidth(smallest to largest)",irisesWithColorsSorted);
       

        function addColorToIris(flower){
            let randomColor = possibleColor [Math.floor(Math.random()*possibleColor.length)];
            return {
                ...flower,
                color: randomColor
                
            };

            
        }
       
    } catch(err){
        console.log(err)
    }

};