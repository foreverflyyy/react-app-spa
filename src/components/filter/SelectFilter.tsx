import Form from 'react-bootstrap/Form';

interface SelectFilterProps {
    select: string,
    changeSelect: (val: string) => void;
}

const SelectFilter = ({select, changeSelect}: SelectFilterProps) => {

    const options = [
        { value: "title", name: "By title" },
    ]

    return (
        <div style={{maxWidth: 200, paddingBottom: 20}}>
            <div style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 5}}>Select filter:</div>
            <Form.Select
                value={select}
                onChange={event => changeSelect(event.target.value)}
                aria-label="Default select example"
            >
                <option disabled value=''>sort by</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </Form.Select>
        </div>
    );
};

export default SelectFilter;