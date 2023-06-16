import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

interface SearchFilterProps {
    textSearch: string,
    changeTextSearch: (val: string) => void,
}
const SearchFilter = ({textSearch, changeTextSearch}: SearchFilterProps) => {
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
                            onChange={e => changeTextSearch(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Row>
        </Form>

    );
};

export default SearchFilter;