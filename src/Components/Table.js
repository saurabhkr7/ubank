const MyTable = ({ data }) => {
    return (
        <div className="table">
            {data.length > 0 && <table>
                <tr>
                    <th>Date</th>
                    <th>Discription</th>
                    <th>Amount</th>
                </tr>
                {data.map((row) => {
                    return <tr key={row.id}>
                        <td>{row.date}</td>
                        <td>{row.description}</td>
                        <td className={row.amount >= 0 ? "positive" : "negative"}>{row.amount}</td>
                    </tr>
                })
                }
            </table>
            }
        </div>
    )
}

export default MyTable;