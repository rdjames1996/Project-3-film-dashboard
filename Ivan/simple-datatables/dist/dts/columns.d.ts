import { DataTable } from "./datatable";
import { columnsStateType, inputCellType, inputHeaderCellType, columnSettingsType } from "./types";
export declare class Columns {
    dt: DataTable;
    settings: columnSettingsType[];
    _state: columnsStateType;
    constructor(dt: DataTable);
    init(): void;
    /**
     * Swap two columns
     */
    swap(columns: [number, number]): void;
    /**
     * Reorder the columns
     */
    order(columns: number[]): void;
    /**
     * Hide columns
     */
    hide(columns: number[]): void;
    /**
     * Show columns
     */
    show(columns: number[]): void;
    /**
     * Check column(s) visibility
     */
    visible(columns: number | number[] | undefined): boolean | boolean[];
    /**
     * Add a new column
     */
    add(data: {
        data: inputCellType[];
        heading: inputHeaderCellType;
    } & columnSettingsType): void;
    /**
     * Remove column(s)
     */
    remove(columns: number[]): any;
    /**
     * Filter by column
     */
    filter(column: number, init?: boolean): void;
    /**
     * Sort by column
     */
    sort(index: number, dir?: ("asc" | "desc" | undefined), init?: boolean): void;
    /**
     * Measure the actual width of cell content by rendering the entire table with all contents.
     * Note: Destroys current DOM and therefore requires subsequent dt.update()
     */
    _measureWidths(): void;
}
