import excelJS from 'exceljs'
import { cellObject } from './CellObject.js'

const workbook = new excelJS.Workbook();
const file = await workbook.xlsx.readFile('./public/OrnekDosya.xlsx');

var cell = new cellObject(file.worksheets);

cell.printRows();


