import { cellType, columnsStateType, columnSettingsType, DataTableOptions, headerCellType, elementNodeType, renderOptions } from "./types";
export declare const headingsToVirtualHeaderRowDOM: (headings: any, columnSettings: any, columnsState: columnsStateType, { classes, format, hiddenHeader, sortable, scrollY, type }: DataTableOptions, { noColumnWidths, unhideHeader }: renderOptions) => {
    nodeName: string;
    childNodes: any;
};
export declare const dataToVirtualDOM: (tableAttributes: {
    [key: string]: string;
}, headings: headerCellType[], rows: {
    row: cellType[];
    index: number;
}[], columnSettings: columnSettingsType[], columnsState: columnsStateType, rowCursor: (number | false), { classes, hiddenHeader, header, footer, format, sortable, scrollY, type, rowRender, tabIndex }: DataTableOptions, { noColumnWidths, unhideHeader, renderHeader }: renderOptions) => elementNodeType;
