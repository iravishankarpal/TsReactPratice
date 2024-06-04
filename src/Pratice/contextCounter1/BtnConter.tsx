import { useCounterContext } from './CounterContext'

type Props = {}

export default function BtnConter({ }: Props) {
    let [value, setvalue] = useCounterContext()
    return (
        <div className='flex gap-4 '>
            <button onClick={() => setvalue(() => value + 1)}>inc</button>
            <button onClick={() => setvalue(() => value + 1)}>dec</button>
        </div>
    )
}