import * as database from "./utils/database.mjs";
//desestruturação
import { disconnectFromDatabase, databaseType } from "./utils/database.mjs";
import { getDataFromAPI } from "./utils/api.js";

database.connectToDatabase("my_database");

getDataFromAPI();

console.log("hello ecma");

disconnectFromDatabase();
