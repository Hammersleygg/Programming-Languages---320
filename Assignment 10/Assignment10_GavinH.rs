/*
* Gavin Hammersley
* CSCI 320
* Assignment 10
* April 13, 2023
*/

use std::collections::HashMap;
use std::fs::File;
use std::io::{self, BufRead};
//use std::path::Path;

//Defining a struct for the movie info
struct Movie {
    title: String,
    actor: String, 
    main_character: String, 
}

fn main()  -> io::Result<()> {
    //Accepting argument file 
    let args: Vec<String> = std::env::args().collect();

    if args.len() < 2 {
        eprintln!("FileName: {} <file_name>", args[0]);
        return Ok(());
    }
    else if args.len() > 2{
        eprintln!("Too many arguments.");
    }

    //reading file into hashmap
    let my_file = &args[1];
    let file = File::open(my_file)?;

    let mut movie_hash: HashMap<String, Movie> = HashMap::new();

    //looping to store in map
    for line in io::BufReader::new(file).lines() {
        let line = line?;
        //vec to allow access to index
        let sections: Vec<&str> = line.split(',').collect();

        //Strings, movie struct, movie hash
        if sections.len() >= 4 {
            let year = sections[0].to_string();
            let title = sections[1].to_string();
            let actor = sections[2].to_string();
            let main_character = sections[3].to_string();
            let movie = Movie {
                title, 
                actor,
                main_character
            };
            
            movie_hash.insert(year, movie);
        }
    }

    //user input for movie info
    loop {
        println!("Enter a year you would like to search for movies: ");
        
        let mut input = String::new();

        //breaks loop when CTRL-D is pressed 
        if io::stdin().read_line(&mut input)? == 0 {
            println!("Thank You, Goodbye!");
            break;
        }

        let year = input.trim();
        if let Some(movie) = movie_hash.get(year) {
            println!("Movie Information: ");
            println!("Release Date: {}", year);
            println!("Title: {}", movie.title);
            println!("Actor: {}", movie.actor);
            println!("Main Character: {}", movie.main_character);
            println!("");
        }
        else {
            println!("No movies found for year: {}", year);
            println!("");
        }
    }
        Ok(())
    }
//rustc Assignment10_GavinH.rs
//./Assignment10_GavinH <file name>