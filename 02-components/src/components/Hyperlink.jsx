import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'  

const Hyperlink = () => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite Logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React Logo" />
        </a>

      </div>  
    </>
  );
};

export default Hyperlink;
