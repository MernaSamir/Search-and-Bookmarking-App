export default interface ITableProps {
  className?: any
  dataList: any
  tableColumns: { label: string; key: string; style?: any }[]
  actions?: {
    icon: any
    action: (item: any) => void
  }[]
}
