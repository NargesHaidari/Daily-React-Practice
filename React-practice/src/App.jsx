import './App.css'
import ColorBox from './components/ColorBox';
import UserForm from './components/UserForm';

function handleClick(){
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('.color-box').style.backgroundColor = randomColor;
}

function handleSubmit(event){
    event.preventDefault();
    alert("Form submitted successfully!");
    event.target.reset();
}

function App() {
  return (
    <>
        <ColorBox onClick={handleClick}/>
        <UserForm onSubmit={handleSubmit}/>
    </>
  );
}

export default App;
