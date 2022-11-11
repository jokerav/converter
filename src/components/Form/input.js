
import { InputNumber, Select } from 'antd';
import React from 'react';
const { Option } = Select;

const selectAfter = (
    <Select
        defaultValue="UAH"
        style={{
            width: 60,
        }}
    >
        <Option value="UAH">₴</Option>
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
        <Option value="CNY">¥</Option>
    </Select>
);
const InputCurrency = () =>
    <InputNumber addonAfter={selectAfter} defaultValue={100} min={0}/>
;
export default InputCurrency;