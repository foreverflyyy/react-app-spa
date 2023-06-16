import React, {useMemo, useState} from 'react';
import Pagination from "react-bootstrap/Pagination";

interface PaginationProps {
    page: number,
    changePage: (page: number) => void;
}

const SectionPagination = ({ page, changePage }: PaginationProps) => {

    const [totalPage, setTotalPage] = useState(10);

    let pagesArray = useMemo(() => {
        let items = [];

        for (let number = 1; number <= totalPage; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === page}
                    onClick={() => changePage(number)}
                >
                    {number}
                </Pagination.Item>,
            );
        }
        return items;
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Pagination  size="lg">
                {pagesArray}
            </Pagination>
        </div>
    );
};

export default SectionPagination;