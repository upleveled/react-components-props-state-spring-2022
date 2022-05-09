import './App.css';
import MyComponent from './Components';
import ControlledComponentsForm from './ControlledComponentsForm';
import EventHandlers from './EventHandlers';
import LetNotUpdating from './LetNotUpdating';
import Props from './Props';
import StatefulCounter from './StatefulCounter';
import StyleProp from './StyleProp';

export default function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <MyComponent />
      <h1>Props</h1>
      <Props />
      <h1>State</h1>
      <StatefulCounter />
      <h1>Form with Controlled Components (using State)</h1>
      <ControlledComponentsForm />
      <h1>Event Handlers: onClick, onChange</h1>
      <EventHandlers />
      <h1>Using `let` won't show you updates</h1>
      <LetNotUpdating />
      <h1>style prop</h1>
      <StyleProp />
    </div>
  );
}
