import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "./prism.css";
import "./App.css";
// import PrismCode from "./PrismCode";
const styles = {
  mainContainter: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerContent: {
    width: "440px",
    maxWidth: "100%",
    padding: "10px",
    textAlign: "center",
    display: "block",
    justifyContent: "center",
    boxSizing: "inherit",
  },
  container: {
    position: "relative",
    textAlign: "left",
    boxSizing: "border-box",
    padding: "10px",
    overflow: "hidden",
  },
  textarea: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    resize: "none",
    color: "inherit",
    overflow: "hidden",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextFillColor: "transparent",
    fontFamily: " Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace",
  },
  highlight: {
    position: "relative",
    pointerEvents: "none",
  },
  editor: {
    margin: 0,
    border: 0,
    background: "none",
    boxSizing: "inherit",
    display: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontVariantLigatures: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    tabSize: "inherit",
    textIndent: "inherit",
    textRendering: "inherit",
    textTransform: "inherit",
    whiteSpace: "pre-wrap",
    wordBreak: "keep-all",
    overflowWrap: "break-word",
  },
};
const App = () => {
  const [code, setCode] = useState(

 `import React from "react";
import ReactDOM from "react-dom";
 
function App() {
      return (
        <h1>Hello world</h1>
      );
    }
    
ReactDOM.render(<App />,
document.getElementById("root"));`);
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  const changeHandler = (event) => {
    setCode(event.target.value);
  };
  const padding = "10px";
  const contentStyle = {
    paddingTop: padding,
    paddingRight: padding,
    paddingBottom: padding,
    paddingLeft: padding,
  };
  return (
    <div style={{ ...styles.mainContainter }}>
      <div style={{ ...styles.containerContent }}>
        <h1>react-text-highlight</h1>
        <p>syntax highlight support for many languages</p>
        <div style={{ ...styles.container, ...contentStyle }}>
          <textarea
            onChange={changeHandler}
            value={code}
            style={{
              ...styles.editor,
              ...styles.textarea,
              ...contentStyle,
              outline: "none",
            }}
          />
          <pre style={{ padding: 0, margin: 0 }}>
            <code
              aria-hidden="true"
              style={{ ...styles.editor, ...styles.highlight }}
              className="language-javascript"
            >
              {code}
            </code>
          </pre>
          {/* <PrismCode code={code} language='js' plugins={["line-numbers"]}/> */}
        </div>
      </div>
    </div>
  );
};

export default App;
