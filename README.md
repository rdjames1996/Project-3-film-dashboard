# Project 3: Film Dashboard

## Group Members:
* Robert James
* Ana Gonzalez
* Ivan Villa
* Roy Jiang
* Stephanie Tran

## Data Sources:
1) https://www.themoviedb.org/: https://developers.themoviedb.org/3/movies/get-movie-details
2) https://www.omdbapi.com/
3) https://www.statista.com/statistics/187122/movie-releases-in-north-america-since-2001/ (Release March 2022)
4) https://www.kaggle.com/datasets/johnharshith/hollywood-theatrical-market-synopsis-1995-to-2021 

## Proposal
Our project aims to look at trends in film. We'll examine budget, revenue, ratings, and genres in the United States since 2021. In addition to, we will extract data from The Movie Database and various public data sets currently tracking movie statistics in the United States.

## Responsibilities
ETL Process: Each person will clean and analyze data to create different charts within the web page.

Visualizations/Website: Each person will assist in transferring graphs into each web page.


## Summary
"Hello everyone, We are group 5. our members are Ana Gonzalez, Stephanie Tran, Ivan Villa, Roy Jiang, and Robert James. For this project, we decided to investigate movies and their budgets, popularity, and the revenues they brought in. We wanted to explore whether or not there was a specific genre that brought in the most revenue, or if budget effected revenue. We examined international movies to discover the same thing, and looked at which actors always seem to land the leading role. Finally, we included some fun taglines on our dashboard as well. To gather this data, we pulled from TMDB, "The Numbers" database, as well as IMDB's database. We looped through these databases and stored the results in JSON's and CSVs, which were then run through our Flask API to be presented to you in the form of a dashboard."

## API (IMDB), visualization, analysis and dataframes.
We retried movie data from IMDB using website generated API key and obtained necessary movie information and converted it into dataframe as csv files.

We were able to conduct data analysis and visualization based on the dataframes (US movies and international movies).
The data analysis was used to generate html with javascipts that contain bar, line and pie charts.

## JS Library
We incorporated the JavaScript Library Simple-Datatables to create an interactive datatable for our film details.
https://github.com/fiduswriter/simple-datatables  
This library allowed us to import JSON data right into our html file to create a sortable, searchable, and flexible data table from our API data.
