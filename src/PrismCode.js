//alternative to using the component in app itself

import React, { useRef } from "react";
import Prism from 'prismjs'
const PrismCode = (props) => {
  const { code, plugins, language } = props;
  const codeRef = useRef();

  const highlightHandler = ()=>{
    if(codeRef&&codeRef.current){
        Prism.highlightElement(codeRef)
    }
  }

  return (
    <pre className={!plugins ? "" : plugins.join(" ")}>
      <code onChange = {highlightHandler} ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
};

export default PrismCode;
