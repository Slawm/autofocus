import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>autofocus iframe test</h1>
      <input autoFocus type="text" />
      <br />
      <br />
      <button>
        <a href="https://msp.retailsuite.cgi.com/msp/php/std_meti/POINT/msp_POINT_g_SPPTS_SAI.php?p_nogci=11318&p_type_appel=M&p_cdcat=DEV&p_nopts=223588">
          BOUTON 1
        </a>
      </button>
      <br />
      <br />
      <button>
        <a href="https://www.google.fr/">BOUTON 2</a>
      </button>
      <br />
      <br />
      <button>
        <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe">
          BOUTON 3
        </a>
      </button>
    </>
  )
}

export default App
