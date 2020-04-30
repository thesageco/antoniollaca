import React, { useState, useContext, MouseEvent } from 'react';
import './index.scss';
import { LanguageSetStore } from '../../App'
import down from '../../assets/icons/down-arrow-2.svg'

interface DropdownProp {
  options: String[];
}

export default function Dropdown(props: DropdownProp) {
  const [state, setState] = useState(props);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useContext(LanguageSetStore);
  
  function toggleOpen() {
    setOpen(!open);
  }
  
  function handleClick(e: MouseEvent, i: number, lang: String) {
    e.preventDefault()
    // @ts-ignore
    dispatch({action: 'update', lang: lang});
    setActiveIndex(i);
    toggleOpen();
    e.stopPropagation();
  }
  
  return (
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title" onClick={toggleOpen}>
          <span>{state.options[activeIndex]}</span>
          <img alt="down arrow" src={down} className={`${open?"up":"down"}`}/>
        </div>
        
      </div>
      <ul className={`dd-list ${open?"show":"hide"}`}>
        {state.options.map((lang, i) => {
          return <li className={`dd-list-item ${activeIndex === i?"selected":""}`} onClick={(e) => handleClick(e, i, lang)} key={i}>{lang}</li>
        })}
      </ul>
    </div>
  );

};
