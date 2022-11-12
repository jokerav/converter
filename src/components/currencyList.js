import { Card, List } from 'antd';
import React from 'react';

const CurrencyList = ({data}) => (
      <List
        grid={{
            gutter: 16,
            column: 4,
        }}
        dataSource={data}
        renderItem={({currency, rate} )=>
                 <List.Item>
                <Card title={currency}>{rate}</Card>
            </List.Item>
        }
    />
);
export default CurrencyList;