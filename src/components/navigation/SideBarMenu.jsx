import React, { useState } from 'react'
import { classNames } from '../../utils/classNames';
import {VscMenu} from "react-icons/vsc";
import SideBarMenuItemView from './SideBarMenuItemView';
import SideBardMenuCardView from './SideBarMenuCardView';
import "./SideBarMenu.scss";


const SideBarMenu = (props) => {

  const {items, card, children} = props

  const [isExpanded, expand] = useState(true);

const handleClick = () => {
  expand(!isExpanded);
}

  return (
    <div className='container'>
      <div className={classNames("SideBarMenu", isExpanded ? "expanded" : "collapsed")}>
        <div className='menuButton'>
          <button className="barButton" onClick={handleClick}>
            <VscMenu />
          </button>
        </div>
        {/* <SideBardMenuCardView card={card} isExpanded={isExpanded} /> */}
        {
          items.map((item, index) => {
            console.log(item);
            return (
              <SideBarMenuItemView key={index} item={item} isExpanded={isExpanded} />
            )
          })
        }
      </div>
      <main>{children}</main>
    </div>
  );
}

export default SideBarMenu;