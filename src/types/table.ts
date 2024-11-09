type TableColumnType = {
    label: string
    type: string
    class: string
}
type TableCellDataType = string | number | boolean
type TableRowDataType = TableCellDataType[]

type TableDragEventType = {
    draggable: boolean
    currentIndex: number
}

type TableDataType = {
    dragevent: TableDragEventType
    columns: TableColumnType[]
    rows: TableRowDataType[]
}
