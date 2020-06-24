import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
class Result extends Component {
    render() {
        return (
            <div>
                 <div id="align-top"></div>
                 <Tabs>
    <TabList>
      <Tab>Đánh Giá Quá Trình</Tab>
      <Tab>Bài Học Tích Lũy</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
               
            </div>
        );
    }
}

export default Result;