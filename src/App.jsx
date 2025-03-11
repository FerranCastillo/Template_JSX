import { useEffect, useState } from 'react';
import { Solucion, SolucionUseEffect, SolucionUseState } from './components/Ejercicios';
import './styles/App.css';
import { soluciones1, soluciones2 } from './resources/solutions';
import ButtonComponent from './components/shared/ButtonComponent';
import Ejemplo from './components/Ejemplo';

function App() {
  const [ejercicio, setEjercicio] = useState(1);
  const [tabs, setTabs] = useState(1);
  const [showSolution, setShowSolution] = useState(false);
  //console.log(import.meta.env.VITE_APP_TEST);

  useEffect(() => {
    setEjercicio(1);
  }, [tabs]);

  useEffect(() => {
    setShowSolution(false);
  }, [ejercicio, tabs]);

  return (
    <div className="app">
      <div className="display-flex">
        <div className="margin-right">
          <ButtonComponent onClick={() => setTabs(0)} text={'Ejercicios Básicos'} disabled={!(tabs != 0)} />
        </div>
        <div className="margin-right">
          <ButtonComponent onClick={() => setTabs(1)} text={'Ejercicios useState'} disabled={!(tabs != 1)} />
        </div>
        <div className="margin-right">
          <ButtonComponent onClick={() => setTabs(2)} text={'Ejercicios useEffect'} disabled={!(tabs != 2)} />
        </div>
      </div>
      <div className="display-flex margin-top">
        <div className="margin-right">
          <button onClick={() => setEjercicio(ejercicio - 1)} disabled={ejercicio == 1}>
            Anterior
          </button>
        </div>
        <div>
          <button onClick={() => setEjercicio(ejercicio + 1)} disabled={ejercicio == (tabs == 0 ? 12 : 4)}>
            Siguiente
          </button>
        </div>
      </div>
      <div className="display-flex">
        <div className="exercices-wrapper">
          {tabs == 0 ? (
            <Solucion exercice={ejercicio} />
          ) : tabs == 1 ? (
            <SolucionUseState exercice={ejercicio} />
          ) : (
            <SolucionUseEffect exercice={ejercicio} />
          )}
        </div>
        {tabs != 2 && (
          <div className="solutions-wrapper margin-top">
            <button onClick={() => setShowSolution(!showSolution)}>Mostrar Solución</button>
            <hr />
            <pre className="soluciones-text">
              {showSolution && (tabs == 0 ? soluciones1[ejercicio - 1] : soluciones2[ejercicio - 1])}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
