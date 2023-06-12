import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import useDebounce from "../hooks/useDebounce";

interface SearchFormProps {
    searchByTitle: (value: string) => void;
}

const SearchForm = ({ searchByTitle }: SearchFormProps) => {
    const [textSearch, setTextSearch] = useState('');
    const debounced = useDebounce(textSearch);

    useEffect(() => {
        if(debounced)
            searchByTitle(debounced);
    }, [debounced])

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Search by title:</Form.Label>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={textSearch}
                        onChange={e => setTextSearch(e.target.value)}
                    />
                </Form.Group>
            </Row>
        </Form>
    );
};

export default SearchForm;