import React, {useState} from 'react';
import {RenderElement} from '../../components/RenderElement';

export const RenderFunctionView = () => {
    const [lastRerender, setLastRerender] = useState<number>(Date.now());

    const handleRerender = () => setLastRerender(Date.now());

    const renderElement = () => {
        console.log('renderElement');
        if(1 + 1 !== 2) {
            return null;
        }

        return (
            <RenderElement/>
        );
    };

    return (
        <div id='render-function-view'>
            {lastRerender}
            <button onClick={handleRerender}>rerender</button>
            {renderElement()}
            <RenderElement/>
        </div>
    );

}
