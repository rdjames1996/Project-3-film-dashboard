import { cellType } from "../types";
import { Editor } from "./editor";
interface dataType {
    cell?: cellType;
    rowIndex?: number;
    columnIndex?: number;
    content?: string;
    input?: HTMLInputElement;
    row?: cellType[];
    inputs?: HTMLInputElement[];
}
type menuItemType = {
    text?: (editor: Editor) => string;
    action?: (editor: Editor, event: Event) => void;
    separator?: boolean;
    url?: string;
};
interface EditorOptions {
    classes?: {
        row?: string;
        form?: string;
        item?: string;
        menu?: string;
        save?: string;
        block?: string;
        close?: string;
        inner?: string;
        input?: string;
        label?: string;
        modal?: string;
        action?: string;
        header?: string;
        wrapper?: string;
        editable?: string;
        container?: string;
        separator?: string;
    };
    labels?: {
        editCell?: string;
        editRow?: string;
        removeRow?: string;
        reallyRemove?: string;
    };
    hiddenColumns?: boolean;
    inline?: boolean;
    contextMenu?: boolean;
    clickEvent?: string;
    excludeColumns?: number[];
    menuItems?: menuItemType[];
}
export { dataType, menuItemType, EditorOptions };
