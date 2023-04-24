# Assignment 4 - Haskell

This program runs using the ghci shell. It has various different functions that take in parameters in order to do mathmatic calculations  

## Setup

This program is run from the command line. To run type:

ghci

:l Assignment4_GavinH.hs

## Running the functions 
piece' x
-- with x being an integer 
-- example: piece' 2 will return -2

exp' x y 
-- with x and y being integers 
-- example: exp' 3 2 will return 9

comp' [x, x, x, x, x, ...]
-- with all x's being integers
-- example: comp' [1, 5, 7, 9, 30, 50] will return 3556

count (some function) [x, x, x, x, x, ...]
-- with some function being a function like >10 and all the x's being integers 
-- example: count (>10) [1, 50, 6, 20, 5, 7] will return 2

count'filter (some function) [x, x, x, x, x, ...]
-- with some function being a function like >10 and all the x's being integers 
-- example: count (>10) [1, 50, 6, 20, 5, 7] will return 2

count'lc (some function) [x, x, x, x, x, ...]
-- with some function being a function like >10 and all the x's being integers 
-- example: count (>10) [1, 50, 6, 20, 5, 7] will return 2

closure [x, x, x, x, x, ...]
-- with all x's being integers 
-- this function returns the number of integers greater than 10 
-- example: closure [1, 3, 4, 5, 7] will return 0 

powers' x
-- with x being an integer 
-- will return all the powers of x 
-- example: take 4 (powers' 2) will return [2, 4, 8, 16]


## Notes:

#This code is my own work. 

