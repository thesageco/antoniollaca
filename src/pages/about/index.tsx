import React, { useEffect, useState } from 'react';
import './index.scss';
import Banner from '../../components/banner';
import info from '../../assets/info.json';

interface AboutProp {
  lang: String;
}

function information(lang: String){
  // @ts-ignore
  return info[lang]["about"]
}

export default function About(props: AboutProp) {
  const [about, setAbout] = useState([""]);
  let aboutText = about.map((item, i) => {
    return <p key={i}>{item}</p>;
  });
  
  useEffect(() => {
    let info = information(props.lang);
    setAbout(info);
  }, [props.lang]);
  

  return (
  <div className="about container">
    <div className="sub-container container">
      <h1>Biography</h1>
      {aboutText.slice(0,3)}
      {Banner({lang: props.lang})}
      {aboutText.slice(3)}
    </div>
  </div>)
}