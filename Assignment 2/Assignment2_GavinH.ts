//importing file reading and arguments processing
import * as fs from 'fs';
import {argv} from 'node:process';


function reader(usrFile:string, usrNum:number): void {
    //reading in the file to get the data
    const data:string = fs.readFileSync(usrFile, 'utf-8')

    //storing data into my array and splitting it based on line
    let dataArray:string[] = data.split(/\n/)

    //making a 2D array for the data
    let myArray2:string[][] = []
    dataArray.forEach((itter) => {
        myArray2.push(itter.split(','))
    })

    //Throw an error message if input number is greater than the lenght of lines in the file
    if(usrNum > myArray2[0].length){
        throw new Error(`Index out of bounds. Enter a number from 0 to ${myArray2[0].length}`)
    }

function mergeSort(dataArray:any[]): any[]{
    // ONLY 1 element
    if(dataArray.length <= 1) {
        return dataArray 
    }
    //cutting the array in half, and getting the left and right 
    var half:number = Math.ceil(dataArray.length/2)

    var leftHalf:any[] = dataArray.slice(0, half)
    var rightHalf:any[] = dataArray.slice(half)

    //continuosly splitting sides until only 1 element is left
    leftHalf = mergeSort(leftHalf)
    rightHalf = mergeSort(rightHalf)

    return mergeIt(leftHalf, rightHalf)
}

function mergeIt(leftHalf:any[], rightHalf:any[]): any[]{
    // creates an array in order to store the final results 
    let finalArray:any[] = []

    let indexL = 0;
    let indexR = 0; 

    while(indexL < leftHalf.length || indexR < rightHalf.length){
        let leftData = leftHalf[indexL]
        let rightData = rightHalf[indexR]


        //if the left element is there and the right elements isnt 
        if(leftData != undefined){
            if(rightData == undefined){
                finalArray.push(leftData)
                indexL++
            //if the right element does exist
            } else{
                if(leftData[usrNum] < rightData[usrNum]) {
                    finalArray.push(leftData)
                    indexL++
                } else if(leftData[usrNum] > rightData[usrNum]){
                    finalArray.push(rightData)
                    indexR++
                } else if(leftData[usrNum + 1] < rightData[usrNum + 1]){
                    finalArray.push(leftData)
                    indexL++
                    } else{
                        finalArray.push(rightData)
                        indexR++
        }}}
        //if the right element exists but the left element does not
        if(rightData != undefined){
            if(leftData == undefined){
                finalArray.push(rightData)
                indexR++
            }}} 
        return finalArray
    }
    //prints the sorted contents of the file
    let sorted = mergeSort(myArray2)
    console.log('Sorted File Contents: ')
    sorted.forEach((itter) => {
        console.log(itter)
    })
}

//Setting the file name to the first argument and number to the second 
//Node Assignment2_GavinH.js FileName #
const fileName = argv[2]
const num = parseInt(argv[3])

reader(fileName, num)