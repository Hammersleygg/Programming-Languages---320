<!-- Assignement 10: 
Gavin Hammersley
CSCI 320 -->

<!--
Language Cheat Sheet:

1.JavaScript
    -Efficiency: 
        a. It is easy to code. ^
        b. It has fast compile times. ^
        c. Not runtime efficient. v
    -Regularity
        a. It is pretty consistant overall, easy to read and write. ^
    -Security
        a. There are no pointers. ^
        b. It is dynamically typed. v
    -Extensibility
        a. Has a varity of different libraries. ^
        b. Has classes. ^
2.TypeScript
    -Efficiency
        a. It programmer efficiency is high. ^
        b. It has a longer compile time. v
        c. It has a slow runtime. v
    -Regularity
        a. Its not orthagonal. v
        b. THere are not many special cases at all. ^
    -Security
        a. There are no pointers. ^
        b. It is statically typed. ^
    -Extensibility
        a. There is a varity of libraries. ^
        b. It has a lot of different typing capabilities. ^
3.Haskell
    -Efficiency: 
        a. programmer efficiency is low(for those who are hardcore functional programmers). v
        b. compilier is moderately efficient. ^
        c. the runtime is efficient. ^
    -Regularity: 
        a. the pure vs impure is not orthagonal. v
        b. $ is edgy. v
    -Security
        a. There are no pointers. ^
        b. It is statically typed. ^
    -Extensibility
        a. Is has a dense varitiy of libraries. ^
        b. It has a lot of typing ability. ^
        c. There are no macros. v
4. Kotlin
    -Efficiency
        a. The programmer efficiency is high. ^
        b. It is easy to read and write. ^
        c. The compile time is slow, through the JVM. v
        d. The runtime is also slow. v
    -Regularity
        a. It is orthangonal. ^
        b. There is not a lot of special cases in kotlin. ^ 
        c. Fairly consistant. ^
    -Security
        a. There are no pointers. ^
        b. it is statically typed. ^
    -Extensibility
        a. There is a varity of libraries in kotlin. ^
        b. There is a lot of different typing capabilities. ^
5.Go
    -Efficiency
        a. Programmer efficiency is high. ^
        b. Syntax is simple for the most part. ^
        c. The compile time is fast. ^
    -Regularity
        a. Very consistant. ^
        b. It is orthagonal. ^
        c. Strict rules to keep it regular. ^ 
    -Security
        a. There are pointers. v
        b. Statically typed. ^
    -Extensibility
        a. There is a varity or libraries. ^
        b. There is a lot of typing capabilities. ^
6.Rust
    -Efficiency
        a. Programmer efficiency is high. ^
        b. compile time. v
    -Regularity
        a. Very consistant. ^
        b. Easy to read. ^
        c. It is orthagonal. ^
    -Security
        a. Has pointers. v
        b. It is statically typed. ^
    -Extensibility
        a. There are a lot of libraries. ^
        b. It has a lot of typing capabilities. ^

-->

<!--
This Rust program accepts a command line argument that is a text file delimited by commas. It then reads the file and stores it into a HashMap. It goes into a loop asking for user input and then prints out if the year was in the file. If Cntl-D is pressed it will break the loop and terminate. 


Print fortmated in: 
 Movie Information: 
 Release Date: 
 Title:
 Actor:
 Main Character: 
-->


<!-- Running the Assignment 10 Rust code 
        Example to compile and run type this into console:
            rustc Assignment10_GavinH.rs
            ./Assignment10_GavinH SampleFile_A10.txt
                
-->