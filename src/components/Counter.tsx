import { useAppSelector, useAppDispatch } from '@/hooks/index'
import { decrement, increment, selectCount } from '@/redux/slices/counterSlice'
import { CounterContainerHorizontal, CounterValue, CounterButton } from '@/styles/Counter'

export default function Counter() {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)

    return (
        <CounterContainerHorizontal>
            <CounterButton aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                -
            </CounterButton>
            <CounterValue>{count}</CounterValue>
            <CounterButton aria-label="Increment value" onClick={() => dispatch(increment())}>
                +
            </CounterButton>
        </CounterContainerHorizontal>
    )
}
