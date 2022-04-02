import React from 'react';
import Select from "react-dropdown-select";
import styled from 'styled-components'

const options = [
    { value: 'Low to High', label: 'Sort:  Low to High' },
    { value: 'High to Low', label: 'Sort:  Hight to Low' },
];

const SelectStyle = styled.div`{
    .react-dropdown-select {
        padding-left: 10px;
        border: 1px solid #1B6A97 !important;
        border-radius: 5px;
    }
}`

const DropDown = ({ }) => {
    const [values, setValues] = React.useState(options)
    return (
        <SelectStyle>
            <Select options={options} onChange={(values) => setValues(values)} values={values} />
        </SelectStyle>
    )
}


export default DropDown; 