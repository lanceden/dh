import { toggleModalShow } from './toggleModal'

function showBanks(bankData) {
  let [tdRows, trRows, rowCount] = ['', '', 0]
  bankData.forEach(bank => {
    rowCount += 1
    // 產td :value="item.bank_code + '-' + item.bank_name
    if (rowCount <= 3) {
      tdRows += `
      <td class="text-center table-bank" name='tdBanks' data-bankcode='${bank.bank_code}-${bank.bank_name}')'>
        (${bank.bank_code})<br>${bank.bank_name}
      </td>`
    }
    // 產tr
    if (rowCount === 3) {
      trRows += `<tr>${tdRows}</tr>`
      tdRows = ``
      rowCount = 0
    }
  })
  toggleModalShow(`<table class="table table-bordered table-rate table-top"><tbody>${trRows}</tbody></table>`)
  return Promise.resolve()
}

export {
  showBanks
}
