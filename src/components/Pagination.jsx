import React from "react"

export const Pagination = ({chunkNumber, setChunkNumber, totalChunks}) => {

    const links = [];
    for (let i = 1; i <= totalChunks; i++) {
        links.push(i);
    }
    const breakPoints = {
        small: 480,
        large: 980
    }

    const linksVisible = ((window.innerWidth < breakPoints.small && 6) || (window.innerWidth < breakPoints.large && 10) || 20)
    const totalPartOfLinks = Math.ceil(chunkNumber / linksVisible)
    const leftPortionPageNumber = (totalPartOfLinks - 1) * linksVisible + 1
    const rightPortionPageNumber = totalPartOfLinks * linksVisible
    const partOfLinks = links.filter(p => p <= rightPortionPageNumber && p >= leftPortionPageNumber)


    const clickHandler = (e, p) => {
        e.preventDefault()
        setChunkNumber(p)
    }

    return (
        <nav aria-label="Search results pages">
            <ul className="pagination justify-content-center">
                {chunkNumber > 1 && <li className="page-item">
                    <a className="page-link" href="/" aria-label="Previous"
                       onClick={(e) => clickHandler(e, --chunkNumber)}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>}
                {partOfLinks.map((p) => (
                    <li className={`page-item ${p === chunkNumber && 'active'}`} key={p}>
                        <a className="page-link"
                           href="/" onClick={(e) => clickHandler(e, p)}
                        >{p}</a>
                    </li>))}
                {chunkNumber < totalChunks && <li className="page-item">
                    <a className="page-link" href="/" aria-label="Next"
                       onClick={(e) => clickHandler(e, ++chunkNumber)}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>}
            </ul>
        </nav>
    )
}
