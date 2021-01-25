import React, {HTMLAttributes, memo} from 'react';

export const RenderElement = memo((props: HTMLAttributes<HTMLDivElement>) => {
    const { ...restProps } = props;

    return (
        <div className='render-element' {...restProps}>
            Render Element
            Last Rerender: {Date.now()}
        </div>
    )
})
