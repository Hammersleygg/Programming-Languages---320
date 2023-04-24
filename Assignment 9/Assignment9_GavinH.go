/*
* Gavin Hammersley
* CSCI 320
* Assignment 9
* April 10, 2023
*/

package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"regexp"
	"sync"
)

func main() {
	arg := os.Args[1]

	//open file
	file, err := os.Open(arg)
	if err != nil {
		panic(err)
	}

	//creating scanner and reading each line of the file into a slice
	myScnr := bufio.NewScanner(file)
	myScnr.Split(bufio.ScanLines)
	data := make([]string, 0)

	for myScnr.Scan() {
		data = append(data, myScnr.Text())
	}

	//wait group
	var waitg sync.WaitGroup 

	waitg.Add(len(data))

	//run each slice in goRountine
	for _, line := range data {
		go contents(line, &waitg)
	}
	//waitning for the routine to finish
	waitg.Wait()

	fmt.Println("\nURL's completed.")
}

func contents(url string, waitg *sync.WaitGroup) {
	//decrement counter
	defer waitg.Done()

	//http request
	response, err := http.Get(url)
	
	if err != nil {
		return
		//panic(err)
	}


	//close body 
	defer response.Body.Close()

	//read into variable
	pageBody, err := ioutil.ReadAll(response.Body)
	if err != nil {
		panic(err)
	}

	var title = ""

	//parse regexp & return to match pageBody
	regex := regexp.MustCompile(`<title.*?>(.*)</title>`)
	//return slice for strings in pageBody
	match := regex.FindAllStringSubmatch(string(pageBody), -1)

	if match == nil {
		title = "No web title found."
	}

	for _, i := range match {
		title = i[1]
	}

	fmt.Printf("\nURL: %s\nTitle of Webpage: %s\nLength of Body: %d bytes\n", string(url), string(title), len(pageBody))
	
}