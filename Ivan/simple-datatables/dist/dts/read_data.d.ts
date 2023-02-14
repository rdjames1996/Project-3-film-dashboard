import { cellType, DataOption, headerCellType, inputCellType, inputHeaderCellType, columnSettingsType } from "./types";
export declare const readDataCell: (cell: inputCellType, columnSettings: columnSettingsType) => cellType;
export declare const readHeaderCell: (cell: inputHeaderCellType) => headerCellType;
export declare const readDOMHeaderCell: (cell: HTMLElement) => headerCellType;
export declare const readTableData: (dataOption: DataOption, dom: (HTMLTableElement | undefined), columnSettings: any, defaultType: any, defaultFormat: any) => {
    data: any[];
    headings: any[];
};
