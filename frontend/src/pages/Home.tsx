import heroImage from '../assets/hero-main.png';
import FraseGallery from '../components/FraseGallery';
import PhraseGallery from '../components/PhraseGallery';
import Acordeon from '../components/Acordeon';



const Home = () => {
  return (
    <>
      <PhraseGallery />
      <div className="flex flex-col items-center" >
      <h1 className='font-semibold text-4xl mb-7'>Don't wait any longer, here is Conectauto</h1>
      <img 
        src={heroImage} 
        alt="A car receiving a technical check-up" 
        style={{
          width: '50%',
          borderRadius: '20px', // Bordes redondeados
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' // Sombra suave
        }} 
      />
    </div>
    <div className="flex justify-center items-center mt-6 mb-1 p-4 border border-gray-300 rounded-xl shadow-md bg-white dark:bg-gray-800 mx-auto max-w-screen-sm px-1"
>
  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white mr-3">
    <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
    Visitors
  </span>
  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white mr-3">
    <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full mr-1.5 flex-shrink-0"></span>
    Sessions
  </span>
  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white mr-3">
    <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full mr-1.5 flex-shrink-0"></span>
    Customers
  </span>
  <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white mr-3">
    <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span>
    Revenue
  </span>
</div>

<div className='flex items-center justify-center mt-9'>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-3 me-2 mb-2 shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Change your car
    </button>
</div>


<div className='flex items-center justify-center mt-20 mb-20'>
  <FraseGallery />
</div>


<div className="flex flex-col justify-center items-center mb-10 ">
<Acordeon id="1" title="Is there a Figma file available?" content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more." />
<Acordeon id="2" title="Is there a Figma file available?" content="Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file." />
<Acordeon id="3" title="Is there a Figma file available?" content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more." />
<Acordeon id="4" title="Is there a Figma file available?" content="Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file." />
<Acordeon id="5" title="Is there a Figma file available?" content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more." />
<Acordeon id="6" title="Is there a Figma file available?" content="Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file." />
  
  </div>
    </>
  );
}

export default Home;