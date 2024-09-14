import DisplayCounter from './DisplayCounter'
import BtnConter from './BtnConter'
import CounterContextProvider from './CounterContext'
function App() {

  return (
    <>
      <CounterContextProvider>
        <DisplayCounter />
        <BtnConter></BtnConter>
      </CounterContextProvider>
    </>
  )
}

export default App
