import excelJS from 'exceljs'
import http from 'http'
import { cellObject } from './CellObject.js'
import sheet from './controller/sheet.js'

const workbook = new excelJS.Workbook();
const file = await workbook.xlsx.readFile('./public/OrnekDosya.xlsx');

var cell = new cellObject(file.worksheets);

cell.printRows();

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sheet(cell.printSheet(req.url.substring(1))));
    res.end();
}).listen(8080, 'localhost');

