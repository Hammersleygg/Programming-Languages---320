/*
Assignement 7: 
Gavin Hammersley
CSCI 320
*/

import kotlin.math.pow
import kotlin.math.sqrt

fun main(args: Array<String>) {
    if(args.isEmpty()){
        println("Please enter a list of words: ")
        return 
    }    
    val listOfWords = args.toMutableList()
    println(listOfWords)

    val numOfWords = listOfWords.size.toDouble()
    val wordLength = listOfWords.map{word -> word.length}

    val average = wordLength.sum() / numOfWords
    println("The average lenght of the words provided is: $average")

    val standardDev1 = (wordLength.map{ len -> (len - average).pow(2) }).sum()
    val standardDev2 = sqrt(standardDev1 / numOfWords)
    println("The standard deviation of the words provided is: $standardDev2")
}
