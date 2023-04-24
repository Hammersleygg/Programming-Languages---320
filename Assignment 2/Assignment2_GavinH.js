"use strict";
exports.__esModule = true;
//importing file reading and arguments processing
var fs = require("fs");
var node_process_1 = require("node:process");
function reader(usrFile, usrNum) {
    //reading in the file to get the data
    var data = fs.readFileSync(usrFile, 'utf-8');
    //storing data into my array and splitting it based on line
    var dataArray = data.split(/\n/);
    //making a 2D array for the data
    var myArray2 = [];
    dataArray.forEach(function (itter) {
        myArray2.push(itter.split(','));
    });
    //Throw an error message if input number is greater than the lenght of lines in the file
    if (usrNum > myArray2[0].length) {
        throw new Error("Index out of bounds. Enter a number from 0 to ".concat(myArray2[0].length));
    }
    function mergeSort(dataArray) {
        // ONLY 1 element
        if (dataArray.length <= 1) {
            return dataArray;
        }
        //cutting the array in half, and getting the left and right 
        var half = Math.ceil(dataArray.length / 2);
        var leftHalf = dataArray.slice(0, half);
        var rightHalf = dataArray.slice(half);
        //continuosly splitting sides until only 1 element is left
        leftHalf = mergeSort(leftHalf);
        rightHalf = mergeSort(rightHalf);
        return mergeIt(leftHalf, rightHalf);
    }
    function mergeIt(leftHalf, rightHalf) {
        // creates an array in order to store the final results 
        var finalArray = [];
        var indexL = 0;
        var indexR = 0;
        while (indexL < leftHalf.length || indexR < rightHalf.length) {
            var leftData = leftHalf[indexL];
            var rightData = rightHalf[indexR];
            //if the left element is there and the right elements isnt 
            if (leftData != undefined) {
                if (rightData == undefined) {
                    finalArray.push(leftData);
                    indexL++;
                    //if the right element does exist
                }
                else {
                    if (leftData[usrNum] < rightData[usrNum]) {
                        finalArray.push(leftData);
                        indexL++;
                    }
                    else if (leftData[usrNum] > rightData[usrNum]) {
                        finalArray.push(rightData);
                        indexR++;
                    }
                    else if (leftData[usrNum + 1] < rightData[usrNum + 1]) {
                        finalArray.push(leftData);
                        indexL++;
                    }
                    else {
                        finalArray.push(rightData);
                        indexR++;
                    }
                }
            }
            //if the right element exists but the left element does not
            if (rightData != undefined) {
                if (leftData == undefined) {
                    finalArray.push(rightData);
                    indexR++;
                }
            }
        }
        return finalArray;
    }
    //prints the sorted contents of the file
    var sorted = mergeSort(myArray2);
    console.log('Sorted File Contents: ');
    sorted.forEach(function (itter) {
        console.log(itter);
    });
}
//Setting the file name to the first argument and number to the second 
//Node Assignment2_GavinH.js FileName #
var fileName = node_process_1.argv[2];
var num = parseInt(node_process_1.argv[3]);
reader(fileName, num);
