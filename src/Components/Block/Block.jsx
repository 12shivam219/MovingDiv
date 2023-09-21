import React, { useRef, useState } from 'react'
import './Block.css'

export const Block = () => {

    const [yAxis, setyAxis] = useState(0)
    const [xAxis, setxAxis] = useState(0)

    const movingBlock = useRef()

    const MoveFunc = (arg) => {

        const element = movingBlock.current;

        switch (arg) {
            case 'Up':
                setyAxis(yAxis - 20);
                element.style.top = yAxis - 20 + 'px';
                console.log(element.style.top)
                break;

            case 'left':
                setxAxis(xAxis - 20);
                element.style.left = xAxis - 20 + 'px';
                console.log(element.style.top)
                break;

            case 'right':
                setxAxis(xAxis + 20);
                element.style.left = xAxis + 20 + 'px';
                console.log(element.style.top)
                break;

            case 'bottom':
                setyAxis(yAxis + 20);
                element.style.top = yAxis + 20 + 'px';
                console.log(element.style.top)
                break;

            default:
                console.log('Invalid Argument')
                break;
        }
    }


    return (
        <>
            <div>
                <div className='Parent_Block'>
                    <button className='btn' disabled={yAxis === 0} onClick={() => MoveFunc('Up')}>Up</button>
                    <div className='middle_Block'>
                        <button className='btn v_Btn' disabled={xAxis === 0} onClick={() => MoveFunc('left')}>Left</button>
                        <div className='Block'>
                            <div className='Child_Block' ref={movingBlock}></div>
                        </div>
                        <button className='btn v_Btn' disabled={xAxis === 440} onClick={() => MoveFunc('right')}>Right</button>
                    </div>
                    <button className='btn' disabled={yAxis === 440} onClick={() => MoveFunc('bottom')}>Bottom</button>
                </div>
            </div>

        </>

    )
}
