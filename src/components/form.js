import { Form, InputNumber, Select} from 'antd';
import React from "react";

const FormConverter = ({data}) => {
    const [form] = Form.useForm();

    let currensyList = {};
    data.forEach(({currency,rate})=>
        currensyList[currency]=rate
    )
    currensyList['UAH'] = 1;

    const setInput2=()=>{
        const {currency1, currency2, firstInput} = form.getFieldsValue();
        const value = firstInput*currensyList[currency1]  / currensyList[currency2];
        form.setFieldValue('secondInput', value.toFixed(2))
    }
    const setInput1=()=>{
        const {currency1, currency2,secondInput} = form.getFieldsValue( );
        const value = secondInput*currensyList[currency2]  / currensyList[currency1];
        form.setFieldValue('firstInput', value.toFixed(2))
    }

    const onFinish=()=>{}

    const { Option } = Select;
    return (
        <Form
            form={form}
            name="form"
            onFinish={onFinish}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}>
            <Form.Item
                name="firstInput"
                initialValue={0}>
                <InputNumber
                    min={0}
                    onChange={()=>setInput2()}
                    addonAfter={
                        <Form.Item
                            name="currency1"
                            initialValue='UAH'
                            style={{height: 6}}>
                            <Select
                                onChange={()=>setInput2()}
                                style={{
                                    width: 60,
                                }}>
                                <Option value="UAH">₴</Option>
                                <Option value="USD">$</Option>
                                <Option value="EUR">€</Option>
                                <Option value="GBP">£</Option>
                                <Option value="CNY">¥</Option>
                            </Select>
                        </Form.Item>
                    }
                />
            </Form.Item>
            <Form.Item
                name="secondInput"
                initialValue={0}>
                <InputNumber
                    min={0}
                    onChange={()=>setInput1()}
                    addonAfter={
                        <Form.Item
                            name="currency2"
                            initialValue='USD'
                            style={{height: 6}}>
                            <Select
                                onChange={()=>setInput1()}
                                style={{
                                width: 60,
                                }}>
                            <Option value="UAH">₴</Option>
                            <Option value="USD">$</Option>
                            <Option value="EUR">€</Option>
                            <Option value="GBP">£</Option>
                            <Option value="CNY">¥</Option>
                            </Select>
                        </Form.Item>
                    }
                />
            </Form.Item>
        </Form>
    );
};
export default FormConverter;