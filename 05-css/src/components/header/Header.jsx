import styels from '../header/Header.module.css'

const Header = () => {
  return (
    <div className={styels.header}>
      <h3>Waquar Imdad</h3>
      <button className={styels.btn} >Login</button>
    </div>
  )
}

export default Header
