import { CounterContainerVertical, CounterValue, CounterButton, CounterTextBox } from '@/styles/Counter'
import { Counter, CounterButtons } from '@/components/index'

export default function CounterPanel() {
    return (
        <CounterContainerVertical>
            <Counter />
            <CounterButtons />
        </CounterContainerVertical>
    )
}
