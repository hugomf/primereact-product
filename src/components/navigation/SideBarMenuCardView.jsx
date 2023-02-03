import React from 'react';
import { classNames } from '../../utils/classNames';
import "./SideBarMenuCardView.scss";


const SideBarMenuCardView = (props) => {

  const {card, isExpanded} = props;
  
  return (
    <div className="SideBarMenuCardView">
      <img 
        className='profile' 
        src={card.photoUrl} 
        alt={card.displayName} 
        width="100%" />
      <div className={classNames('profileInfo', isExpanded ? '' : 'collapsed')}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        <div className="url">
          <a href={card.photoUrl}>Ir al Perfil</a>
        </div>
      </div>
    </div>
  )
}

export default SideBarMenuCardView