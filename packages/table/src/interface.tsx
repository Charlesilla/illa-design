import {
  HTMLAttributes,
  ReactNode,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react"
import { Column, Row, UseFiltersInstanceProps } from "react-table"
import { SerializedStyles } from "@emotion/react"
import { TableData } from "./table-data"

export type TableSize = "small" | "medium" | "large"

export type TableLayout = "auto" | "fixed"

export type TableAlign = "left" | "center" | "right" | "justify" | "char"

export type TableFixed = "left" | "right"

export interface TableProps<D extends TableData>
  extends HTMLAttributes<HTMLDivElement>,
    TableContextProps,
    ThContextProps {
  columns?: ReadonlyArray<Column<D>>
  data?: readonly D[]
  tableLayout?: TableLayout
  bordered?: boolean
  showHeader?: boolean
  showFooter?: boolean
  disableSortBy?: boolean
  disableFilters?: boolean
  disableResizing?: boolean
  disableRowSelect?: boolean
  onRowSelectChange?: (rows: Array<Row<D>>) => void
  _css?: SerializedStyles
}

export interface TableFilterProps<D extends TableData> {
  renderFilterContent?: (columnProps: UseFiltersInstanceProps<D>) => ReactNode
  columnProps: UseFiltersInstanceProps<D>
  _css?: SerializedStyles
}

export interface TableContextProps {
  borderedCell?: boolean
  striped?: boolean
  size?: TableSize
  align?: TableAlign
}

export interface ThContextProps {
  fixedHeader?: boolean
}

export interface TBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  _css?: SerializedStyles
}

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  _css?: SerializedStyles
}

export interface TdProps
  extends TdHTMLAttributes<HTMLTableDataCellElement>,
    TableContextProps {
  _css?: SerializedStyles
}

export interface TFootProps extends HTMLAttributes<HTMLTableSectionElement> {
  _css?: SerializedStyles
}

export interface THeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  _css?: SerializedStyles
}

export interface ThProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement>,
    TableContextProps,
    ThContextProps {
  _css?: SerializedStyles
}
