import TableStyle from './style'
import type ITableProps from './interface'

export default function Table(props: ITableProps) {
  const { dataList, tableColumns, actions } = props
  console.log(dataList,"lllllllll")

  return (
    <TableStyle className='company-table'>
      <div className='table-header'>
        {tableColumns.map((header, index: number) => (
          <div key={index} style={header.style}  className='table-header-item'>
            <div className='inner-item'>{header.label}</div>
          </div>
        ))}
        {actions && <div className='table-header-item'></div>}
      </div>
      <div className='table-body'>
        {dataList?.length > 0 ? (
          dataList?.map((item: any, index: number) => (
            <div key={index} className='table-body-item'>
             
              {tableColumns.map((header, index2: number) => {
                return (
                  <div style={header.style} className='inner-item' key={index2}>
                    <div>{item[header.key]}</div>
                  </div>
                )
              })}
              {actions && (
                <div className='actions'>
                  {actions.map((action, index) => (
                    <div key={index}>
                        <button  onClick={() => action.action(item)}>
                          {action.icon(item)}
                        </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='no-data'>
            {/* <NoResultFoundIcon /> */}
            <h3>No Data Available</h3>
          </div>
        )}
      </div>
    </TableStyle>
  )
}
