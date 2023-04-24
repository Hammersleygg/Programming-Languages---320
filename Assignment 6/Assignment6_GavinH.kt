/*
Gavin Hammersley
Assignment 6
CSCI 320
 */

import java.io.File

fun main(args: Array<String>){

    //If a file name was not provided
    if(args.isEmpty()){
        println("Please enter a file name as an argument ")
        return
    }

    val myFile = args[0]
    val names: MutableMap<String, String> = mutableMapOf<String, String>()

    File(myFile).forEachLine {
        names.set("${it.substringBefore(" ").get(0)}${it.substringAfter(" ").get(0)}", "${it}")
    }

    println("Here is what is in the file: ")
    names.forEach{
        k,v -> 
        println("$k: $v")
    }

    while(true){
        //Asking user for the initials they want to search for.
        println(" ")
        println("Enter initials you would like to search for: ")
        
        var line = readLine()

        //Checking to see if ctrl-d is pressed
        if(line == null){
            println("Bye Bye")
            break
        }

        //If user input matches, print
        //else print didn't find
        if(names.keys.any {it == line}){
            println("Found ${names.get(line)}")
        }
        else{
            println("Did not find")
        }
    }
}