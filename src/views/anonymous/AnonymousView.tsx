import React, {useCallback, useMemo, useState} from 'react';
import './AnonymousView.css';
import {RenderElement} from './RenderElement';

export const AnonymousView = () => {
    const [lastRerender, setLastRerender] = useState<number>(Date.now());

    const handleRerender = () => setLastRerender(Date.now())

    const dataSomething = useMemo(() => ({ foo: 'bar' }), []);

    const handleClick = () => console.log('hey');

    const handleClickCallback = useCallback(() => console.log('hey'), []);

    return (
        <div id='anonymous-view'>
            <button onClick={handleRerender}>rerender</button>
            <div className='container'>
                <div className='bad'>
                    <span>Will always rerender</span>
                    <RenderElement id='example-1' data-something={{ foo: 'bar' }}/>
                    <RenderElement id='example-2' onClick={() => {}}/>
                    <RenderElement id='example-3' onClick={handleClick}/>
                </div>
                <div className='good'>
                    <span>Will just rerender if props changes</span>
                    <RenderElement id='example-4' data-something={dataSomething}/>
                    <RenderElement id='example-5' onClick={handleClickCallback}/>
                </div>
            </div>
        </div>
    )
}
