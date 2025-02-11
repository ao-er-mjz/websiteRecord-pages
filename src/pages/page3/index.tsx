import React from 'react';
import { Anchor, Col, Row } from 'antd';
import dataList, { listItemType } from '../../const/index';

const App: React.FC = () => (
    <Row>
        <Col span={16}>
            {dataList.map((item, index) => {
                return (
                    <div id={item.key} key={index} style={{ height: '100vh', background: 'rgba(255,0,0,0.01)' }}>
                        {item.title}
                    </div>
                );
            })}
            {/* <div id='CSS' style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
            <div id='part-2' style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
            <div id='javaScript' style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} /> */}
        </Col>
        <Col span={8}>
            <Anchor items={dataList} />
        </Col>
    </Row>
);

export default App;
