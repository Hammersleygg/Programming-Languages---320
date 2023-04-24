/*
* Gavin Hammersley
* CSCI 320
* Assignment 1
* January 19, 2023
*/

const fs = require('fs')

function main(myFile){
    //Reading in the constenst of the file and storing them in 'data'
    const data = fs.readFileSync(myFile, 'utf-8')

    //Splitting the data in order to loop through the array and getting the length stored in a var 
    let sampleArray = data.split(/\n/)
    var length = sampleArray.length

    //looping through the file and preforming the bubble sort 
    for(var i = 0; i < length; i++){
        for(var j = 0; j < (length - 1 - i); j++){
            if(sampleArray[j].codePointAt(0) > sampleArray[j + 1].codePointAt(0)){
                var tempVar = sampleArray[j]
                sampleArray[j] = sampleArray[j + 1]
                sampleArray[j + 1] = tempVar
            }
        }
    }
    //Printing out the sorted contents
    console.log('Sorted contents: ')
    for(var itter = 0; itter < length; itter++){
        console.log(sampleArray[itter])
    }
}

//Running the code reading in the sample file provided 
main('SampleFile_A1.txt')
