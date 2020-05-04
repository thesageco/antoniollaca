import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

enum ButtonType {
  White="white",
  Gold="gold"
}

interface ButtonProp {
  text: String;
  href: string;
  type: ButtonType;
}

export default function Button(props: ButtonProp) {
  const [state, setState] = useState(props);
  
  return (
    <Link to={state.href} className={`button ${state.type}`}>
      {state.text}
    </Link>
  );

};

export {ButtonType, Button};

