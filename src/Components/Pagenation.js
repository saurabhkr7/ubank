import { useEffect, useState } from "react";

const Pagenation = ({ data, handleCurrentPage, currentPage }) => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        if (data.length) {
            let nop = data.length / 10;
            const rowsLeft = data.length % 10;
            if (rowsLeft) {
                nop++;
            }
            let page = [];
            let mypages = [];
            for (let i = 1; i <= nop; i++) {
                for (let j = (i - 1) * 10 + 1; j <= i * 10 && j <= data.length; j++) {
                    page.push(data[j - 1])
                }
                mypages.push(page);
                page = [];
            }
            setPages(mypages);
        }
    }, [data]);

    if (currentPage.length === 0 && pages.length > 0) {
        handleCurrentPage(pages[0])
    }

    return (
        <div>
            {pages.length > 0 && pages.map((page, i) => {
                return <button onClick={() => handleCurrentPage(page)}>{i + 1}</button>
            })}
        </div>
    )
}

export default Pagenation;