import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function HYAppHeader() {
  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"> </a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
            <Input className="search" placeholder="音乐/电台/视频/用户" prefix={<SearchOutlined />}/>
            <div className="center">创作者中心</div>
            <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

{/* <NavLink to="/">Find Music</NavLink>
<NavLink to="/mine">My Music</NavLink>
<NavLink to="/friend">Friends</NavLink> */}