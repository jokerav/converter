
import {  InputNumber, Select, Space } from 'antd';
import 'antd/dist/antd.css';
import handleСhange from "../../logic";
const { Option } = Select;

const selectAfter = (
    <Select
        defaultValue="USD"
        style={{
            width: 60,
        }}
    >
        <Option value="UAH">₴</Option>
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
    </Select>
);
const Input = () => (
    <Space direction="vertical">
        <InputNumber addonAfter={selectAfter} defaultValue={0} min={0} onChange={()=>handleСhange()}/>
    </Space>
);
export default Input;