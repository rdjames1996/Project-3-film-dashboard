 
 fetch("./Top_748_Films.json")
 .then(response => {
    return response.json();
 })
 .then(film_data => console.log(film_data));
 
import {
    DataTable,
    convertJSON
  } from "/simple-datatables"
  const dataTable = new DataTable("#myTable")
  const convertedData = convertJSON({
    data: film_data
  })
  dataTable.insert(convertedData) 