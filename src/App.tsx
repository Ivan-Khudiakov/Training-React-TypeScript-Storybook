import React, {useState} from 'react';
import {RatingValueType} from "./components/Rating/Rating";
import {Accordion, CollapsedType} from "./components/Accordion/Accordion";
import {SelfAccordion} from "./components/SelfControledAccordion/SelfAccordion";
import {OnOff, OnType} from "./components/OnOff/OnOff";

function App() {
    // let [ratingValue, setRatingValue] = useState<RatingValueType> (0)
    let [collapsed, setCollapsed] = useState<CollapsedType>(false)
    let [on, setOn] = useState<OnType>(true)
    return (
        <div>
            {/*<AppTitle title={'This is App!'} />*/}
            {/*<Accordion title={'--Articles--'} collapsed={true}/>*/}
            {/*<Accordion title={'--Menu--'} collapsed={false}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            <Accordion title={'accordion'} collapsed={collapsed} onClick={setCollapsed}/>
            <OnOff on={on} onClick={setOn}/>
            <SelfAccordion title={'menu'}/>
            {/*<SelfRating/>*/}
        </div>
    );
}

// type PageTitleProps = {
//     title: string
// }
// function AppTitle(props:PageTitleProps)
//     return (
//         <h1>{props.title}</h1>
//     )
// }

export default App;
