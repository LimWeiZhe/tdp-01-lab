import "./App.css";
import JapFood from "./components/japfood";
// import DisplayMessage from './components/DisplayMessage';
// import ImageFrame from './components/ImageFrame';
// import ramenImage from './images/food/ramen.png';
import SimpleCounter from "./components/SImpleCounter";
import AlertBox from "./components/AlertBox";
import NumberBox from "./components/NumberBox";
import TickleBox from "./components/TickleBox";
import Dice from "./components/Dice";
import SurveyForm from "./components/SurveyForm.js";
import RandomUser from "./components/RandomUser.js";

function App() {
  return (
    <>
      {/* <JapFood />
      <DisplayMessage whatevermessage="Hello from App.js" />
      <ImageFrame ramen={ramenImage}/> */}
      <RandomUser />
      <SimpleCounter initialValue={1000} />
      <NumberBox initialValue={15} />
      <AlertBox initialValue={"Alert!"} />
      <TickleBox message="That Tickles!" />
      <Dice />
      <SurveyForm />
    </>
  );
}

export default App;
