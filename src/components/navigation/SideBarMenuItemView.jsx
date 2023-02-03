import React from 'react'
import { NavLink } from 'react-router-dom';
import { classNames } from '../../utils/classNames'

import "./SideBarMenuItemView.scss"


const SideBarMenuItemView = (props) => {

    const {item, isExpanded} = props;

  return (
    <div id="SideBarMenuItemView" className='SideBarMenuItemView'>
        <NavLink to={item.url}  className="link" activeClassName="active">
            <div className={classNames("ItemContent", isExpanded ? "" : "collapsed")}>
                <div className="icon">
                    <item.icon size="24" />
                </div>
                <span className='label' >{item.label}</span>
            </div>
        </NavLink>
        {!isExpanded ? <div className="tooltip">{item.label}</div> : ""}
    </div>
  )
}

export default SideBarMenuItemView