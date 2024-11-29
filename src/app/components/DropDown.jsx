import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    
  },
  
  {
    key: '2',
    label: (
      <a target="_blank" className='bg-black' rel="noopener noreferrer" href="https://www.antgroup.com">
        2nd menu item
      </a>
    ),
    
  },

  

];
const DropDown = () => (
  <Dropdown className='cursor-pointer  bg-b hover:text-[#55CBA5] duration-200'
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()} >
      <Space className='cursor-pointer hover:text-[#55CBA5]'>
        Hover me
        <DownOutlined  />
      </Space>
    </a>
  </Dropdown>
);
export default DropDown;