import {app, boardWrapper, output} from './app.css';
import { Board } from './components/board';
import { createState } from './lib/state';

function App() {
  const [state, update] = createState();

  return (
    <div class={app}>
      <div class={boardWrapper}>
        <Board state={state} update={update} />
      </div>
      <div class={output}>
        {JSON.stringify(state(), null, 4)}
      </div>
    </div>
  )
}

export default App
