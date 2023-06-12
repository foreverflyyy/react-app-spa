import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
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
                    <Form.Label style={{fontSize: 20, fontWeight: 'bold'}}>Search by title:</Form.Label>
                    <br />
                    <InputGroup size="lg">
                        <Form.Control
                            type="search"
                            aria-label="Search:"
                            placeholder="Search..."
                            aria-describedby="inputGroup-sizing-sm"
                            value={textSearch}
                            onChange={e => setTextSearch(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default SearchForm;