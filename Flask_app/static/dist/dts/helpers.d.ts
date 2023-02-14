import { elementNodeType, columnSettingsType, textNodeType } from "./types";
/**
 * Check is item is object
 */
export declare const isObject: (val: (string | number | boolean | object | null | undefined)) => boolean;
/**
 * Check for valid JSON string
 */
export declare const isJson: (str: string) => boolean;
/**
 * Create DOM element node
 */
export declare const createElement: (nodeName: string, attrs?: {
    [key: string]: string;
}) => HTMLElement;
export declare const objToText: (obj: (elementNodeType | textNodeType)) => any;
export declare const escapeText: (text: string) => string;
export declare const visibleToColumnIndex: (visibleIndex: number, columns: columnSettingsType[]) => number;
export declare const columnToVisibleIndex: (columnIndex: number, columns: columnSettingsType[]) => number;
