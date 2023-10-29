import { useContext } from 'react'
import logo from '../assets/img/carmona.png'
import { MenuContext } from '../context/MenuContext'

const Header = () => {

  const {setMenuVersion} = useContext(MenuContext)

  const handleVersion = (e) =>{
    setMenuVersion(e.target.value)
  }
  return (
    <header className="header">
      <figure>
        <img src={logo} alt="Carmona Delivery" className='logo-carmona'/>
      </figure>
      {/* <h1>Carmona Delivery</h1> */}
      <section className="selectorMenu">
        <label htmlFor="menuversion">Visualizacion</label>
        <select 
          name="menuversion"
          id="menuversion"
          onChange={handleVersion}>
          <option value="1">Tarjetas</option>
          <option value="2">Columna</option>
        </select>
      </section>
    </header>
  )
}

export default Header