 import {  DataTable  } from "/Ivan/simple-datatables/dist/module.js"
const dataTable = new DataTable("table", {
  columns: [
    // Sort the third column in descending order
    { select: 2,type: "number", sort: "desc" },

    // Set the third column as datetime string matching the format "YYYY-MM-DD"
    { select: 5, type: "date", format: "YYYY-MM-DD" },

    // Set type for Number columns
    { select: [3,4,6], type: "number" },
    ]
});
let newData = {
  headings: [
    "Title",
    "Genre",
    "Popularity",
    "Budget",
    "Revenue",
    "Release Date",
    "Run Time", 
    "Production Country"]
  }
dataTable.insert(newData)
dataTable.insert(film_data) 