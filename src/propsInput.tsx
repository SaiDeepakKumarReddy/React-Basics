import React from "react";
import ReactDOM from "react-dom";
import PropElement from "./props";

const elm=(
    <>
    <PropElement heading="Hello, I am React Prop made from MAC" page={{current:1, total:2}}>
          <ul>
            <li>Props Completed</li>
            <li>next we will do React State</li>
          </ul>
    </PropElement>

    <PropElement heading="Hello, I am slide 2/2" page={{current:2, total:2}}>
          <ul>
            <li>Props Completed</li>
            <li>next we will do React State</li>
          </ul>
    </PropElement>
    </>
);

export default elm;