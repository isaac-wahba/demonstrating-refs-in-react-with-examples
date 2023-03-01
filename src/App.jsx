import logo from './logo.svg';
import './App.scss';
import Parent from './components/ForwardRefExample/Parent';
import State from './components/StateRefExample/State';
import Ref from './components/StateRefExample/Ref';

function App() {
  //? 1. State VS Ref as a render indicator
  //? 2. forwardRef and children components
  //? 3. forwardRef in COSMIC
  //? 4. ref best practice VS bad prctice.

  return (
    <div className='App'>
      {/* 1. State VS Ref */}
      {/* <State /> */}
      <Ref />
      {/* 2. forwardRef */}
      {/* <Parent />{' '} */}
      {/* 3. Open COSMIC CustomDatePicker */}
      {/* 4. <ContentUpdate /> */}
    </div>
  );
}

export default App;
