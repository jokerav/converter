
import { Form, InputNumber, Select} from 'antd';
import React from "react";

const FormConverter = () => {
    const [form] = Form.useForm();
    const onFinish = () => {
        console.log(form.getFieldsValue());
    };
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
            }}
        >

            <Form.Item name="firstInput" initialValue={100} >
                <InputNumber
                    onChange={()=>onFinish()}
                    addonAfter={
                        <Form.Item name="currency1" initialValue='UAH' style={{height: 6}}>
                            <Select
                                onChange={()=>(onFinish())}
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
                        </Form.Item>}

                />
            </Form.Item>
            <Form.Item name="secondInput" initialValue={100}>
                <InputNumber
                    onChange={()=>onFinish()}
                    addonAfter={
                        <Form.Item name="currency2" initialValue='EUR' style={{height: 6}}>
                        <Select
                             onChange={()=>(onFinish())}
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
                    </Form.Item>}

                />
            </Form.Item>
        </Form>
    );
};
export default FormConverter;