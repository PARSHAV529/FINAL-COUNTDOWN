import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="esay" targetTime={1}/>
        <Timer title="midum" targetTime={5}/>
        <Timer title="hard" targetTime={10}/>
        <Timer title="impossible" targetTime={15}/>

      </div>
    </>
  );
}

export default App;
