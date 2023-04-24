/*
* Gavin Hammersley
* CSCI 320
* Assignment 8
* April 5, 2023
*/

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"sort"
	"strconv"
)

//Checking for errors 
func errCheck (e error){
	if e != nil {
		panic(e)
	}
}

//Actor Struct
type Actor struct {
	lastName string
	firstName string
	series string
}

func String(list []Actor) {
	for _, a := range list {
		fmt.Printf("%s %s\t%s\n", a.firstName, a.lastName, a.series)
	}
	fmt.Println()
}

func main() {
	//Run Args 
	fileName, err := os.Open(os.Args[1])
	errCheck(err)

	number, err := strconv.Atoi(os.Args[2])
	errCheck(err)

	var actors []Actor

	sc := bufio.NewScanner(fileName)
	sc.Split(bufio.ScanLines)

	for sc.Scan() {
		line := strings.Split(sc.Text(), ",")
		temp := Actor{
				lastName: line[0],
				firstName: line[1],
				series: line[2]}
		actors = append(actors, temp)
	}

	sort.Slice(actors, func(i, j int) bool {
		if number == 0 {
			return actors[i].lastName < actors[j].lastName
		}

		if number == 1 {
			return actors[i].firstName < actors[j].firstName
		}

		if number == 2 {
			return actors[i].series < actors[j].series
		}
		return false
	})

	String(actors)
}