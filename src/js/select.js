import React from 'react';
import PropTypes from 'prop-types';

const SelectCurrency = ({ dataselect, change }) => {
    const select = dataselect.map(item => {
        return (
            <option
                key={item.name}
                data-code={item.code}
                data-sign={item.sign}
                data-sell={item.sellRate}
                value={item.name}>{item.name}</option>
        );
    }).slice(1);
    return <select onChange={change}>{select}</select>
};

SelectCurrency.propTypes = {
    dataselect: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired
};

export default SelectCurrency;
