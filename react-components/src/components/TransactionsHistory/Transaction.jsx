import './TransactionsHistory.css'
import PropTypes from 'prop-types'
export const Transaction = ({index, id, type, amount, currency }) => { 
    const odd = index % 2 > 0;
                       
                        const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
                            first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')
    return (
        <tr  className={odd ? 'tableBgLight' : 'tableBgDark'} >
                                <td>{ capitalizeFirstLetter(type)}</td>
                             <td>{amount}</td>
                             <td>{currency}</td>
                             </tr>
    )
}

Transaction.propTypes = {
    index:PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
}
