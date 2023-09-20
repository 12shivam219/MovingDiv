import React, { useRef } from 'react'
import './Block.css'

export const Block = () => {

    const movingBlock = useRef()

    const MoveFunc = (arg) => {

        const element = movingBlock.current;

        switch (arg) {
            case 'Up':
                
                break;

            case 'left':
                
                break;

            case 'right':
                
                break;

            case 'bottom':
               
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
                    <button className='btn' onClick={() => MoveFunc('Up')}>Up</button>
                    <div className='middle_Block'>
                        <button className='btn v_Btn' onClick={() => MoveFunc('left')}>Left</button>
                        <div className='Block'>
                            <div className='Child_Block top:[24px]' ref={movingBlock}></div>
                        </div>
                        <button className='btn v_Btn' onClick={() => MoveFunc('right')}>Right</button>
                    </div>
                    <button className='btn' onClick={() => MoveFunc('bottom')}>Bottom</button>
                </div>
            </div>

        </>

    )
}
