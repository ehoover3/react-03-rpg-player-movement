// components
import Player from "./components/Player";

export default function App() {
  const data = { h: 32, w: 32 };
  return (
    <div className='zone-container'>
      <Player skin='m1' />
    </div>
  );
}
