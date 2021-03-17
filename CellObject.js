
/**
 * 
 * @returns getRows and 
 */


const cellObject = function (worksheets) {
    const sheets = worksheets;
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

    return { printRows }
}

export { cellObject }