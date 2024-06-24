import React from "react";
import ReactDOM from "react-dom";

import SlideShow from "./propState";
import Slide from "./classProp";

export default (
    <SlideShow>

    <Slide heading ="Impelmenting the React State Through Prop Class" page={{current:1,total:2}}>
        <ul>
            <li>Hey finally did it</li>
            <li> React State using prop class</li>
        </ul>

        <ul>
            <li>Its easy after stuggle</li>
            <li>Completed Sucessfully</li>
        </ul>
    </Slide>

    <Slide heading ="React State Through Prop Class" page={{current:2,total:2}}>
        <ul>
            <li>Hey finally did it</li>
            <li> React State using prop class</li>
        </ul>

        <ul>
            <li>Its easy after stuggle</li>
            <li>Completed Sucessfully</li>
        </ul>
    </Slide>
    </SlideShow>
);