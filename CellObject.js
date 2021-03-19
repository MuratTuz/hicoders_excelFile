
/**
 * 
 * @returns printRows() function which proceed to show all cells' values. 
 * Here is used 'exceljs' npm package which is very well equipped for processing Excel files.
 * So, eachRow() and eachCell() methods belog to this package. 
 * 
 * cellObject is created to parse from Excel worksheet data into atomic cell values
 */


const cellObject = function (worksheets) {
    const sheets = worksheets;

    /**
     * prints screen the data in the sheet of the excel file using console.log command
     */
    const printRows = function () {
        sheets.forEach(sheet => {
            console.log('\n' + sheet.name);
            sheet.eachRow(row => {
                let allCells = '';
                row.eachCell(cell => {
                    let cellString = cell.value.toString();
                    allCells += cellString + ' '.repeat(15 - cellString.length);
                })
                console.log(allCells);
            })
        })
    }

    /**
     * 
     * @param {String} sheetName is case sensitive parameter who indicates the name of the sheet in the
     * excel file
     * @returns a String array that contains datas in the sheet of the excel file
     */
    const printSheet = function (sheetName) {
        let allRows = [];
        sheets.forEach(sheet => {
            if (sheetName == sheet.name) {
                sheet.eachRow(row => {
                    let allCellsOfRow = '';
                    row.eachCell(cell => {
                        let cellString = cell.value.toString();
                        allCellsOfRow += cellString + ' '.repeat(15 - cellString.length);
                    })
                    allRows.push(allCellsOfRow);
                })
            }
        });

        if (allRows.length == 0) allRows[0] = `There is no such sheet name in the excel file. 
        Please keep in mind that sheet names are case sensitive!`;

        return allRows;
    }

    return { printRows, printSheet }
}

export { cellObject }