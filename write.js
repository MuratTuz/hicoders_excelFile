
/**
 * Here is used xlsx npm package for writing the data to excel file. 
 * Data.js and OrnekDosya.xlsx files are keept in the public directory
 */

import excel from 'xlsx'
import { data } from './public/data.js'

// Reading our test file 
const file = excel.readFile('./public/OrnekDosya.xlsx');

const ws = excel.utils.json_to_sheet(data)

excel.utils.book_append_sheet(file, ws, "Sheet3")

// Writing to our file 
excel.writeFile(file, './public/OrnekDosya.xlsx')



