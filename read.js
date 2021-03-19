import excelJS from 'exceljs'
import http from 'http'
import { cellObject } from './CellObject.js'
import sheet from './controller/sheet.js'

const workbook = new excelJS.Workbook();
const file = await workbook.xlsx.readFile('./public/OrnekDosya.xlsx');

var cell = new cellObject(file.worksheets);

// print screen the content of the specified sheet in the excel file. 
cell.printRows();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //if you write sheet name in the excel file to the adresse bar in the browser
    // then it shows specified sheet in the excel file on the browser. Like localhost:8080/Sheet1
    res.write(sheet(cell.printSheet(req.url.substring(1))));
    res.end();
}).listen(8080, 'localhost');

