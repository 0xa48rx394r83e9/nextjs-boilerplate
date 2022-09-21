import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks/index'
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from '@/redux/slices/counterSlice'
import { CounterContainer, CounterValue, CounterButton, CounterTextBox } from '@/styles/Counter'

export default function Counter() {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0

    return (
        <CounterContainer>
            <CounterContainer>
                <CounterButton aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    -
                </CounterButton>
                <CounterValue>{count}</CounterValue>
                <CounterButton aria-label="Increment value" onClick={() => dispatch(increment())}>
                    +
                </CounterButton>
            </CounterContainer>
            <CounterContainer>
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
            </CounterContainer>
        </CounterContainer>
    )
}
