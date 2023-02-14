import { DiffDOM } from 'diff-dom';

interface elementNodeType {
    nodeName: string;
    attributes?: {
        [key: string]: string;
    };
    childNodes?: nodeType[];
    checked?: boolean;
    value?: string | number;
    selected?: boolean;
}
interface textNodeType {
    nodeName: "#text" | "#comment";
    data: string;
    childNodes?: never;
}
type nodeType = elementNodeType | textNodeType;
interface cellType {
    data: string | number | boolean | elementNodeType[] | object;
    text?: string;
    order?: string | number;
}
type inputCellType = cellType | string | number | boolean;
interface headerCellType {
    data: string | number | boolean | elementNodeType[] | object;
    type?: ("html" | "string");
    text?: string;
}
type inputHeaderCellType = headerCellType | string | number | boolean;
interface DataOption {
    headings?: string[];
    data?: inputCellType[][];
}
interface TableDataType {
    headings: headerCellType[];
    data: cellType[][];
}
type renderType = ((cellData: (string | number | boolean | object | elementNodeType[]), td: object, rowIndex: number, cellIndex: number) => elementNodeType | string | void);
type DeepPartial<T> = T extends Function ? T : (T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T);
interface ColumnOption {
    /**An integer or array of integers representing the column(s) to be manipulated. */
    select: number;
    /**Automatically sort the selected column. Can only be applied if a single column is selected. */
    sort?: "asc" | "desc";
    /**When set to false the column(s) cannot be sorted. */
    sortable?: boolean;
    /**When set to true the column(s) will not be visible and will be excluded from search results. */
    hidden?: boolean;
    /**
     * A string reperesenting the type of data in the column(s) cells. Choose from the following options:

    string - lexical ordering (default)
    number - any string with currency symbols, . or , thousand seperators, %, etc
    date - a valid datetime string
     */
    type?: string;
    /**A string representing the datetime format when using the date type. */
    format?: string;
    /**
     * A callback to customise the rendering of the column(s) cell content. The function takes 3 parameters and should return the formatted cell content.
     *
     */
    render?: renderType;
    /**
     * A filter to be used instead of sorting for the selected column(s).
     */
    filter?: (string | number | boolean | ((arg: (string | number | boolean)) => boolean))[];
}
interface LabelsConfiguration {
    /**
     * default: 'Search...'
     * Sets the placeholder of the search input.
     */
    placeholder: string;
    /**
     * default: 'Search within table'
     * Sets the title of the search input.
     */
    searchTitle: string;
    /**
     * default: 'entries per page'
     * Sets the per-page dropdown's label
     */
    perPage: string;
    /**
     * default: 'No entries found'
     * The message displayed when there are no search results
     */
    noRows: string;
    /**
     * default: 'No results match your search query'
     * The message displayed when there are no search results
     */
    noResults: string;
    /**
     * default: 'Showing {start} to {end} of {rows} entries'
     * Displays current range, page number, etc
     *
     * {start} - The first row number of the current page
     * {end} - The last row number of the current page
     * {page} - The current page number
     * {pages} - Total pages
     * {rows} - Total rows
     */
    info: string;
}
interface ClassConfiguration {
    active: string;
    ascending: string;
    bottom: string;
    container: string;
    cursor: string;
    descending: string;
    disabled: string;
    dropdown: string;
    ellipsis: string;
    empty: string;
    filter: string;
    filterActive: string;
    headercontainer: string;
    hidden: string;
    info: string;
    input: string;
    loading: string;
    pagination: string;
    paginationList: string;
    paginationListItem: string;
    paginationListItemLink: string;
    search: string;
    selector: string;
    sorter: string;
    table: string;
    top: string;
    wrapper: string;
}
type pagerRenderType = ((data: [onFirstPage: boolean, onLastPage: boolean, currentPage: number, totalPages: number], pager: elementNodeType) => elementNodeType | void);
type rowRenderType = ((row: object, tr: object, index: number) => elementNodeType | void);
type tableRenderType = ((data: object, table: elementNodeType, type: string) => elementNodeType | void);
interface DataTableConfiguration {
    classes: ClassConfiguration;
    columns: ColumnOption[];
    /**Controls various aspects of individual or groups of columns. Should be an array of objects with the following properties:
     *
     * Docs :https://fiduswriter.github.io/simple-datatables/documentation/columns
     */
    data: DataOption;
    /**
     * Pass an object of data to populate the table.
     *
     * You can set both the headings and rows with headings and data properties, respectively. The headings property is optional.
     *
     * Docs : https://fiduswriter.github.io/simple-datatable/documentation/data
     */
    type: ("date" | "html" | "number" | "boolean" | "string" | "other");
    /**
     * Default data type.
     * 'html' by default.
     */
    format: string;
    /**
     * Default date format.
     * 'YYYY-MM-DD' by default.
     */
    destroyable: boolean;
    /**
     * Default: true
     * Whether enough information should be retained to be able to recreate the initial dom state before the table was initiated.
     */
    ellipsisText: string;
    /**
     * Default: '…'
     * Text to be used for ellipsis.
     */
    firstLast: boolean;
    /**Toggle the skip to first page and skip to last page buttons.
     * Default: false
     */
    firstText: string;
    /**
     * default: '«'
     * Set the content of the skip to first page button.
     *
     */
    fixedColumns: boolean;
    /**
     * Default: true
     * Fix the width of the columns. This stops the columns changing width when loading a new page.
     */
    fixedHeight: boolean;
    /**
     * Default: false
     * Fix the height of the table. This is useful if your last page contains less rows than set in the perPage options and simply stops the table from changing size and affecting the layout of the page.
     */
    footer: boolean;
    /**
     * Default: false
     * Enable or disable the table footer.
     */
    header: boolean;
    /**
     * Default :true
     * Enable or disable the table header.
     */
    hiddenHeader: boolean;
    /**
     * Default:false
     * Whether to hide the table header.
     */
    labels: LabelsConfiguration;
    /**
     * Customise the displayed labels.
     *
     * Defaults :
     *
     * labels: {
     *
            placeholder: "Search...",
            searchTitle: "Search within table",
            perPage: "entries per page",
            noRows: "No entries to found",
            info: "Showing {start} to {end} of {rows} entries",
        }
     *
     * Docs : https://fiduswriter.github.io/simple-datatables/documentation/labels
     */
    template: (DataTableConfiguration: any, HTMLTableElement: any) => string;
    /**
     * Allows for custom arranging of the DOM elements in the top and bottom containers. There are for 4 variables you can utilize:
     *
     * Docs :https://fiduswriter.github.io/simple-datatables/documentation/layout
     */
    lastText: string;
    /**
     * default: '»'
     * Set the content of the skip to last page button.
     */
    nextPrev: boolean;
    /**
     * Default : true
     * Toggle the next and previous pagination buttons.
     */
    nextText: string;
    /**
     * default: '›'
     * Set the content on the next button.
     */
    pagerDelta: number;
    /**
     * Default: 2
     * Delta to use with pager
     */
    pagerRender: false | pagerRenderType;
    /**
    * Default: false
    * Method to call to modify pager rendering output.
    */
    paging: boolean;
    /**
     * Default : true
     * Whether or not paging is enabled for the table
     */
    perPage: number;
    /**
     * Default : 10
     * Sets the maximum number of rows to display on each page.
     */
    perPageSelect: (number | [string, number])[];
    /**
     * Default: [5, 10, 15, 20, 25]
     *
     * Sets the per page options in the dropdown. Must be an array of integers.
     *
     *   Setting this to false will hide the dropdown.
     */
    prevText: string;
    /**
     * default: '‹'
     * Set the content on the previous button.
     */
    rowNavigation: boolean;
    /**
     * Default: true
     * Whether to allow row based navigation
     */
    rowRender: false | rowRenderType;
    /**
     * Default: false
     * Method to call to modify row rendering output.
     */
    scrollY: string;
    /**
     * Default : ""
     *
     * Enable vertical scrolling. Vertical scrolling will constrain the DataTable to the given height, and enable scrolling for any data which overflows the current viewport. This can be used as an alternative to paging to display a lot of data in a small area.
     *
     * The value given here can be given in any CSS unit.
     */
    searchable: boolean;
    sensitivity: string;
    ignorePunctuation: boolean;
    /**
     * Default: true
     * Toggle the ability to sort the columns.
     *
     * This option will be forced to false if the table has no headings.
     */
    sortable: boolean;
    locale: string;
    numeric: boolean;
    caseFirst: string;
    tabIndex: false | number;
    /**
     * Default: false
     * A tab index number to be assigned to the table.
     */
    tableRender: false | tableRenderType;
    /**
     * Default: false
     * Method to call to modify table rendering output.
     */
    truncatePager: boolean;
}
interface DataTableOptions extends DeepPartial<DataTableConfiguration> {
    columns?: ColumnOption[];
    data?: DataOption;
    perPageSelect?: (number | [string, number])[];
    rowRender?: false | rowRenderType;
    tableRender?: false | tableRenderType;
}
interface columnSettingsType {
    render?: renderType;
    type: ("date" | "html" | "number" | "boolean" | "string" | "other");
    format?: string;
    sortable?: boolean;
    locale?: string;
    numeric?: boolean;
    caseFirst?: string;
    searchable?: boolean;
    sensitivity?: string;
    ignorePunctuation?: boolean;
    headerClass?: string;
    cellClass?: string;
    hidden?: boolean;
    filter?: (string | number | boolean | ((arg: (string | number | boolean)) => boolean))[];
    sort?: "asc" | "desc";
    sortSequence?: ("asc" | "desc")[];
}
interface renderOptions {
    noPaging?: true;
    noColumnWidths?: true;
    unhideHeader?: true;
    renderHeader?: true;
}
type filterStateType = (string | number | boolean | elementNodeType[] | object | ((arg: (string | number | boolean | elementNodeType[] | object)) => boolean));
interface columnsStateType {
    sort: (false | {
        column: number;
        dir: "asc" | "desc";
    });
    filters: (filterStateType | undefined)[];
    widths: number[];
}

/**
 * Rows API
 */
declare class Rows {
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
        cols: (string | number | boolean | object | elementNodeType[])[];
    };
    /**
     * Update a row with new data
     */
    updateRow(select: number, data: inputCellType[]): void;
}

declare class Columns {
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

declare class DataTable {
    columns: Columns;
    containerDOM: HTMLDivElement;
    _currentPage: number;
    data: TableDataType;
    _dd: DiffDOM;
    dom: HTMLTableElement;
    _events: {
        [key: string]: ((...args: any[]) => void)[];
    };
    hasHeadings: boolean;
    hasRows: boolean;
    headerDOM: HTMLDivElement;
    _initialInnerHTML: string;
    initialized: boolean;
    _label: HTMLElement;
    lastPage: number;
    _listeners: {
        [key: string]: () => void;
    };
    onFirstPage: boolean;
    onLastPage: boolean;
    options: DataTableConfiguration;
    _pagerDOMs: HTMLElement[];
    _virtualPagerDOM: elementNodeType;
    pages: {
        row: cellType[];
        index: number;
    }[][];
    _rect: {
        width: number;
        height: number;
    };
    rows: Rows;
    _searchData: number[];
    _searchQueries: {
        term: string;
        columns: (number[] | undefined);
    }[];
    _tableAttributes: {
        [key: string]: string;
    };
    totalPages: number;
    _virtualDOM: elementNodeType;
    _virtualHeaderDOM: elementNodeType;
    wrapperDOM: HTMLElement;
    constructor(table: HTMLTableElement | string, options?: DataTableOptions);
    /**
     * Initialize the instance
     */
    init(): boolean;
    /**
     * Render the instance
     */
    _render(): void;
    _renderTable(renderOptions?: renderOptions): void;
    /**
     * Render the page
     * @return {Void}
     */
    _renderPage(lastRowCursor?: boolean): void;
    /** Render the pager(s)
     *
     */
    _renderPagers(): void;
    _renderSeparateHeader(): void;
    /**
     * Bind event listeners
     * @return {[type]} [description]
     */
    _bindEvents(): void;
    /**
     * execute on resize
     */
    _onResize(): void;
    /**
     * Destroy the instance
     * @return {void}
     */
    destroy(): void;
    /**
     * Update the instance
     * @return {Void}
     */
    update(measureWidths?: boolean): void;
    _paginate(): number;
    /**
     * Fix the container height
     */
    _fixHeight(): void;
    /**
     * Perform a simple search of the data set
     */
    search(term: string, columns?: (number[] | undefined)): boolean;
    /**
     * Perform a search of the data set seraching for up to multiple strings in various columns
     */
    multiSearch(queries: {
        term: string;
        columns: (number[] | undefined);
    }[]): boolean;
    /**
     * Change page
     */
    page(page: number, lastRowCursor?: boolean): boolean;
    /**
     * Add new row data
     */
    insert(data: ({
        headings?: string[];
        data?: inputCellType[][];
    } | {
        [key: string]: inputCellType;
    }[])): void;
    /**
     * Refresh the instance
     */
    refresh(): void;
    /**
     * Print the table
     */
    print(): void;
    /**
     * Show a message in the table
     */
    setMessage(message: string): void;
    /**
     * Add custom event listener
     */
    on(event: string, callback: () => void): void;
    /**
     * Remove custom event listener
     */
    off(event: string, callback: () => void): void;
    /**
     * Fire custom event
     */
    emit(event: string, ...args: any[]): void;
}

interface csvConvertUserOptions {
    lineDelimiter?: string;
    columnDelimiter?: string;
    removeDoubleQuotes?: boolean;
    data: string;
    headings?: string[];
}
/**
 * Convert CSV data to fit the format used in the table.
 */
declare const convertCSV: (userOptions: csvConvertUserOptions) => any;

interface jsonConvertUserOptions {
    lineDelimiter?: string;
    columnDelimiter?: string;
    removeDoubleQuotes?: boolean;
    data: string;
    headings?: string[];
}
/**
 * Convert JSON data to fit the format used in the table.
 */
declare const convertJSON: (userOptions: jsonConvertUserOptions) => any;

/**
 * Export table to CSV
 */
interface csvUserOptions {
    download?: boolean;
    skipColumn?: number[];
    lineDelimiter?: string;
    columnDelimiter?: string;
    selection?: number | number[];
    filename?: string;
}
declare const exportCSV: (dt: DataTable, userOptions?: csvUserOptions) => string | false;

/**
 * Export table to JSON
 */
interface jsonUserOptions {
    download?: boolean;
    skipColumn?: number[];
    replacer?: null | ((key: any, value: any) => string) | (string | number)[];
    space?: number;
    selection?: number | number[];
    filename?: string;
}
declare const exportJSON: (dt: DataTable, userOptions?: jsonUserOptions) => string | false;

/**
 * Export table to SQL
 */
interface sqlUserOptions {
    download?: boolean;
    skipColumn?: number[];
    tableName?: string;
    selection?: number | number[];
    filename?: string;
}
declare const exportSQL: (dt: DataTable, userOptions?: sqlUserOptions) => string | false;

/**
 * Export table to TXT
 */
interface txtUserOptions {
    download?: boolean;
    skipColumn?: number[];
    lineDelimiter?: string;
    columnDelimiter?: string;
    selection?: number | number[];
    filename?: string;
}
declare const exportTXT: (dt: DataTable, userOptions?: txtUserOptions) => string | false;

/**
 * Check is item is object
 */
declare const isObject: (val: (string | number | boolean | object | null | undefined)) => boolean;
/**
 * Check for valid JSON string
 */
declare const isJson: (str: string) => boolean;
/**
 * Create DOM element node
 */
declare const createElement: (nodeName: string, attrs?: {
    [key: string]: string;
}) => HTMLElement;

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

/**
 * Main lib
 * @param {Object} dataTable Target dataTable
 * @param {Object} options User config
 */
declare class Editor {
    closed: boolean;
    containerDOM: HTMLElement;
    data: dataType;
    disabled: boolean;
    dt: DataTable;
    editing: boolean;
    editingCell: boolean;
    editingRow: boolean;
    event: Event;
    events: {
        [key: string]: () => void;
    };
    initialized: boolean;
    limits: {
        x: number;
        y: number;
    };
    menuDOM: HTMLElement;
    modalDOM: HTMLElement | false;
    options: EditorOptions;
    originalRowRender: rowRenderType | false;
    rect: {
        width: number;
        height: number;
    };
    wrapperDOM: HTMLElement;
    constructor(dataTable: DataTable, options?: {});
    /**
     * Init instance
     * @return {Void}
     */
    init(): void;
    /**
     * Bind events to DOM
     * @return {Void}
     */
    bindEvents(): void;
    /**
     * contextmenu listener
     * @param  {Object} event Event
     * @return {Void}
     */
    context(event: MouseEvent): void;
    /**
     * dblclick listener
     * @param  {Object} event Event
     * @return {Void}
     */
    click(event: MouseEvent): void;
    /**
     * keydown listener
     * @param  {Object} event Event
     * @return {Void}
     */
    keydown(event: KeyboardEvent): void;
    /**
     * Edit cell
     * @param  {Object} td    The HTMLTableCellElement
     * @return {Void}
     */
    editCell(td: HTMLTableCellElement): void;
    editCellModal(): void;
    /**
     * Save edited cell
     * @param  {Object} row    The HTMLTableCellElement
     * @param  {String} value   Cell content
     * @return {Void}
     */
    saveCell(value: string): void;
    /**
     * Edit row
     * @param  {Object} row    The HTMLTableRowElement
     * @return {Void}
     */
    editRow(tr: HTMLElement): void;
    editRowModal(): void;
    /**
     * Save edited row
     * @param  {Object} row    The HTMLTableRowElement
     * @param  {Array} data   Cell data
     * @return {Void}
     */
    saveRow(data: string[], row: cellType[]): void;
    /**
     * Open the row editor modal
     * @return {Void}
     */
    openModal(): void;
    /**
     * Close the row editor modal
     * @return {Void}
     */
    closeModal(): void;
    /**
     * Remove a row
     * @param  {Object} tr The HTMLTableRowElement
     * @return {Void}
     */
    removeRow(tr: HTMLElement): void;
    /**
     * Update context menu position
     * @return {Void}
     */
    update(): void;
    /**
     * Dismiss the context menu
     * @param  {Object} event Event
     * @return {Void}
     */
    dismiss(event: Event): void;
    /**
     * Open the context menu
     * @return {Void}
     */
    openMenu(): void;
    /**
     * Close the context menu
     * @return {Void}
     */
    closeMenu(): void;
    /**
     * Destroy the instance
     * @return {Void}
     */
    destroy(): void;
    rowRender(row: any, tr: any, index: any): any;
}
declare const makeEditable: (dataTable: DataTable, options?: {}) => Editor;

export { DataTable, convertCSV, convertJSON, createElement, exportCSV, exportJSON, exportSQL, exportTXT, isJson, isObject, makeEditable };
