/* eslint-disable indent */
import { useRouter } from 'next/router'
import Style from './style'
import Arrow from '../../../../../../public/Arrow'

const MAX_BUTTONS = 5
const HALF_MAX_BUTTONS = Math.floor(MAX_BUTTONS / 2)

const getVisiblePages = (currentPage: number, totalPages: number): number[] => {
  let startPage: number, endPage: number

  if (totalPages <= MAX_BUTTONS) {
    // Case: Total pages less than or equal to MAX_BUTTONS
    startPage = 1
    endPage = totalPages
  } else {
    // Default range
    startPage = Math.max(currentPage - HALF_MAX_BUTTONS, 1)
    endPage = Math.min(startPage + MAX_BUTTONS - 1, totalPages)

    // Adjust for when current page is near the start or end
    if (currentPage <= HALF_MAX_BUTTONS) {
      startPage = 1
      endPage = MAX_BUTTONS
    } else if (currentPage + HALF_MAX_BUTTONS >= totalPages) {
      startPage = totalPages - MAX_BUTTONS + 1
      endPage = totalPages
    }
  }
  startPage = Math.max(startPage, 2)
  endPage = Math.min(endPage, totalPages - 1)

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
}
const Pagination = (props: any) => {
  const router = useRouter()
  const rtl = router.locale === 'ar'
  let currentPage = props.currentPage

  const switchPage = (page: string | number = 1, inputValue = false) => {
    if (page === 'previous' && currentPage > 1) {
      currentPage--
    } else if (page === 'next') {
      currentPage++
    } else if (typeof page === 'number' || inputValue) {
      currentPage = Number(page)
    }
    props.emit(currentPage)
  }
  const visiblePages = getVisiblePages(currentPage, props.pages)
  const isFirstPageInRange = visiblePages[0] === 1
  const isLastPageInRange = visiblePages[visiblePages.length - 1] === props.pages
  return (
    <Style>
      <li onClick={() => switchPage('previous')} className={`previous${currentPage === 1 || props.loading ? ' disabled' : ''}`}>
        <a>
          <Arrow transform={rtl ? 'rotate(-90deg)' : 'rotate(90deg)'} />
        </a>
      </li>

      {!isFirstPageInRange && (
        <>
          <li className={`page-item ${currentPage == 1 ? 'active' : ''}`} onClick={() => switchPage(1)}>
            <a>1</a>
          </li>
          {currentPage > HALF_MAX_BUTTONS + 2 && <span>...</span>}
        </>
      )}

      {visiblePages.map(page => (
        <li key={page} className={`page-item ${currentPage == page ? 'active' : ''}`} onClick={() => switchPage(page)}>
          <a>{page}</a>
        </li>
      ))}

      {!isLastPageInRange && props?.pages > 1 && (
        <>
          {currentPage < props.pages - HALF_MAX_BUTTONS - 1 && <span>...</span>}
          <li className={`page-item ${currentPage == props.pages ? 'active' : ''}`} onClick={() => switchPage(props.pages)}>
            <a>{props.pages}</a>
          </li>
        </>
      )}

      <li onClick={() => switchPage('next')} className={`next${currentPage === props.pages || props.loading ? ' disabled' : ''}`}>
        <a>
          <Arrow transform={rtl ? 'rotate(90deg)' : 'rotate(270deg)'} />
        </a>
      </li>
    </Style>
  )
}

export default Pagination
