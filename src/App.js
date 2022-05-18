import './App.css';
import ChildrenPropExample from './ChildrenPropExample';
import ClassComponentsIntoFunctionComponent from './ClassComponentsIntoFunctionComponent';
import MyComponent from './Components';
import ConditionalRendering from './ConditionalRendering';
import ControlledComponent from './ControlledComponent';
import ControlledComponentsForm from './ControlledComponentsForm';
import EventHandlers from './EventHandlers';
import LetNotUpdating from './LetNotUpdating';
import LiftingStateUp from './LiftingStateUp';
import MapOverArrays from './MapOverArrays';
import { MyFavoriteAnimals } from './MyFavoriteAnimals';
import Props from './Props';
import PropTypesExample from './PropTypesExample';
import RandomUsers from './RandomUsers';
import ShowAndDestructure from './ShowAndDestructure';
import StatefulCounter from './StatefulCounter';
import StateIsAsync from './StateIsAsync';
import StyleCssAndCssInJs from './StyleCssAndCssInJs';
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
      <h1>Style prop</h1>
      <StyleProp />
      <h1>State Is Async</h1>
      <StateIsAsync />
      <h1>Show Values and Destructuring</h1>
      <ShowAndDestructure />
      <h1>Map over arrays</h1>
      <MapOverArrays />
      <h1>Conditional Rendering</h1>
      <ConditionalRendering />
      <h1>Controlled components</h1>
      <ControlledComponent />
      <h1>Lifting state up </h1>
      <LiftingStateUp />
      <h1>ClassComponentsIntoFunctionComponent </h1>
      <ClassComponentsIntoFunctionComponent />
      <h1>Style vs CSS vs CSS in JS </h1>
      <StyleCssAndCssInJs />
      <br />
      <ChildrenPropExample />
      <br />
      <PropTypesExample />
      <br />
      <MyFavoriteAnimals />
      <br />
      <RandomUsers />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
