const CODES = {
    A: 65,
    Z: 90
}

function createCell(columnId, rowId) {
    // return function () {
        return `
            <div class="cell" contenteditable="">
                ${columnId + rowId}
            </div>
        `;
    // }
}

function createHeaderCell(columnId) {
    // return function () {
        return `<div class="column">${columnId}</div>`;
    // }
}

function createRow(dataTemplate, rowId = '') {
    return `
        <div class="row">    
            <div class="row-info">${rowId}</div>
            <div class="row-data">
                ${dataTemplate}
            </div>
        </div>
    `
}

export function createTable(rowsCount = 15) {
    const columnsCount = CODES.Z - CODES.A + 1;
    const rows = new Array(rowsCount - 1 ).fill('');
    const columns = new Array(columnsCount).fill('').map(toChar);

    // make table header
    const headerCells = columns.map(createHeaderCell).join('');
    rows.push(createRow(headerCells))

    //make content rows
    rows.map((_, rowIdx) => {
        const rowId = rowIdx + 1;
        const contentRowCells = columns.map((el) => createCell(el, rowId)).join('')
        rows.push(createRow(contentRowCells, String(rowId)))
    })

    return rows.join('');
}

function toChar(_, colIdx) {
    return String.fromCharCode(colIdx + CODES.A);
}