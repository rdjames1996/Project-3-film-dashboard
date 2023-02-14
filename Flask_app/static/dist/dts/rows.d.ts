import { DataTable } from "./datatable";
import { cellType, inputCellType } from "./types";
/**
 * Rows API
 */
export declare class Rows {
    cursor: (false | number);
    dt: DataTable;
    constructor(dt: DataTable);
    setCursor(index?: (false | number)): void;
    /**
     * Add new row
     */
    add(data: cellType[]): void;
    /**
     * Remove row(s)
     */
    remove(select: number | number[]): any;
    /**
     * Find index of row by searching for a value in a column
     */
    findRowIndex(columnIndex: number, value: string | boolean | number): number;
    /**
     * Find index, row, and column data by searching for a value in a column
     */
    findRow(columnIndex: number, value: string | boolean | number): {
        index: number;
        row: cellType[];
        cols: (string | number | boolean | object | import("./types").elementNodeType[])[];
    };
    /**
     * Update a row with new data
     */
    updateRow(select: number, data: inputCellType[]): void;
}
