import React from "react";
import ReactDOM from "react-dom";
import Slide from "./classProp";
import "./index.css"
const classPropElm=(
    <>
    <Slide heading="Hello, I am React class Prop made from MAC" page={{current:1, total:3}}>
          <ul>
            <li>Props Completed</li>
            <li>next we will do React State</li>
          </ul>
    </Slide>

    <Slide heading="Hello, I am slide 2/2" page={{current:2, total:3}}>
          <ul>
            <li>Props Completed</li>
            <li>next we will do React State</li>
          </ul>
    </Slide>
    

    <Slide heading="Hello, I am slide 2/2" page={{current:3, total:3}}>
          <ul>
            <li>React is best for building ultimate UI</li>
            <li>next we will do React State</li>
          </ul>
    </Slide>

    </>
);

export default classPropElm;