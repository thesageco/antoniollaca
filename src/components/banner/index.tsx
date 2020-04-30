import React, { useState, useContext, MouseEvent } from 'react';
import './index.scss';
import { LanguageStore } from '../../App'
import down from '../../assets/icons/down-arrow.svg'

interface BannerProp {
  lang: String;
}

function title(lang: String){
  switch(lang){
    case 'EN': 
       return ["Choral conductor, pedagogue and clinician"];
    case 'FR': 
      return ["Chef de chœur, pédagogue et clinicien"];
    case 'SP': 
      return ["Director coral, pedagogo y tallerista"]
    default: 
      return [""];
  }
}

export default function Banner(props: BannerProp) {  
  return (
    <div className="banner">
      <div>
        <h1>Antonio Llaca</h1>
        <p>{title(props.lang)}</p>
      </div>
    </div>
  );
};
