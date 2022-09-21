import { useState } from 'react'
import { useAppDispatch } from '@/hooks/index'
import { incrementByAmount, incrementAsync, incrementIfOdd } from '@/redux/slices/counterSlice'
import { CounterContainerHorizontal, CounterButton, CounterTextBox } from '@/styles/Counter'

export default function CounterButtons() {
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0

    return (
        <CounterContainerHorizontal>
            <CounterTextBox aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
            <CounterButton onClick={() => dispatch(incrementByAmount(incrementValue))} >
                Add amount
            </CounterButton>
            <CounterButton onClick={() => dispatch(incrementAsync(incrementValue))}>
                Add Async
            </CounterButton>
            <CounterButton onClick={() => dispatch(incrementIfOdd(incrementValue))}>
                Add If Odd
            </CounterButton>
        </CounterContainerHorizontal>
    )
}
