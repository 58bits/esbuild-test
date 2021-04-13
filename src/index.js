import './styles/style.scss'
import { MDCSelect } from '@material/select'

export default async function init() {
  const selectYear = new MDCSelect(document.querySelector('.year-select'))

  // Year dropdown select
  selectYear.listen('MDCSelect:change', () => {
    // eslint-disable-next-line no-console
    console.log(`Selected option at index ${selectYear.selectedIndex} with value "${selectYear.value}"`)
  })
}

init()
