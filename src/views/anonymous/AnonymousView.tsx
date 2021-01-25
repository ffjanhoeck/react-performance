import React, {useCallback, useMemo, useState} from 'react';
import './AnonymousView.css';
import {RenderElement} from '../../components/RenderElement';

export const AnonymousView = () => {
    const [lastRerender, setLastRerender] = useState<number>(Date.now());

    const handleRerender = () => setLastRerender(Date.now())

    const dataSomethingObject = useMemo(() => ({ foo: 'bar' }), []);
    const dataSomethingArray = useMemo(() => (['test']), []);

    const handleClick = () => console.log('hey');

    const handleClickCallback = useCallback(() => console.log('hey'), []);

    return (
        <div id='anonymous-view'>
            <button onClick={handleRerender}>rerender</button>
            <div className='container'>
                <div className='bad'>
                    <span>Will always rerender</span>
                    <RenderElement id='example-1' data-something-object={{ foo: 'bar' }}/>
                    <RenderElement id='example-2' data-something-array={['test']}/>
                    <RenderElement id='example-3' onClick={() => {}}/>
                    <RenderElement id='example-4' onClick={handleClick}/>
                </div>
                <div className='good'>
                    <span>Will just rerender if props changes</span>
                    <RenderElement id='example-5' data-something-object={dataSomethingObject}/>
                    <RenderElement id='example-6' data-something-array={dataSomethingArray}/>
                    <RenderElement id='example-7' onClick={handleClickCallback}/>
                </div>
            </div>
        </div>
    )
}
