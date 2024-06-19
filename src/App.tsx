import './App.css';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <div className='grid sm:grid-cols-[40%_60%] md:grid-cols-[50%_50%]'>
        <div className="h-[200px] sm:h-screen grid items-center justify-center justify-items-center gap-2 content-center text-center bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(/assets/abstract2.png)` }}
        >
          <img src="./assets/form.png" alt="" className="w-[50px] sm:w-[100px]" />
          <h1 className='text-2xl sm:text-4xl'>React Forms</h1>
          <p className='hidden sm:block px-4'> This is made by using <b>React Hook Form</b> and <b>Zod</b> for validation </p>
        </div>
        <Forms />
      </div>

      {/* <div className='flex items-center justify-center h-screen'>
        <div className='bg-base-100 shadow-xl w-[50%] '>
          <Forms />
        </div>
      </div> */}
    </div>
  );
}

export default App;
