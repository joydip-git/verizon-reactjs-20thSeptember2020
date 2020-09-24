import React from 'react'
import Counter from '../../common/Counter'
import ClickCounter from '../../component/Counter/ClickCounter'
import HoverCounter from '../../component/Counter/HoverCounter'


function CountContainer() {
    return (
        <div>
            <Counter
                name='joydip'
                render=
                {
                    (commonData, commonFn) => {
                        return <ClickCounter
                            value={100}
                            counterValue={commonData}
                            increaseCounterCallback={commonFn} />
                    }
                } />
            <Counter
                name='joydip'
                render=
                {
                    (commonData, commonFn) => {
                        return <HoverCounter
                            data='Hover'
                            counterData={commonData}
                            increaseCounterCallback={commonFn} />
                    }
                } />
        </div>
    )
}

export default CountContainer
