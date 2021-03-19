
/**
 * 
 * @param {String} cellArray contains data of one sheet in the excel file
 * @returns html codes which contains sheet data. The first line with <h1> is for headers of each column in the sheet
 * whereas the other lines are for data of sheet using <h2>
 */

function sheet(cellArray) {
    let header = `<h1>${cellArray[0]}</h1>`;
    let body = '';
    if (cellArray.length > 1) {
        cellArray.slice(1).forEach(element => {
            body += `<h2>${element}</h2>`

        });
    }
    return header + body;
}

export default sheet