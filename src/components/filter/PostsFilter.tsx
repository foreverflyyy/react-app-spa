import React, {useEffect, useState} from 'react';
import useDebounce from "../../hooks/useDebounce";
import IFilter from "../../models/IFilter";
import SelectFilter from "./SelectFilter";
import SearchFilter from "./SearchFilter";

interface SearchFormProps {
    filter: IFilter
    changeFilter: (value: IFilter) => void;
}

const PostsFilter = ({ filter, changeFilter }: SearchFormProps) => {

    const [textSearch, setTextSearch] = useState('');
    const [currentSelect, setCurrentSelect] = useState('');
    const debounced = useDebounce(textSearch);

    useEffect(() => {
        changeFilter({...filter, query: debounced});
    }, [debounced])

    return (
        <>
            <SearchFilter changeTextSearch={setTextSearch} textSearch={textSearch}/>
            <SelectFilter/>
        </>

    );
};

export default PostsFilter;