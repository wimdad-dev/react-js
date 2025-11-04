import './App.css'
import Card from './components/Card'
import hyperLink from '../../02-components/src/assets/hyperLink'
import logo from '../../02-components/src/assets/logo'

const App = () => {
  return (
    <div className='parent'>
      <Card platform='Amazon' img={logo.amazonLogo} salary='$120/hr'
        location='Mumbai, India' url={hyperLink.amazonWebLink} />
      <Card platform='Flipkart' img= {logo.flipkartLogo}
        salary='$100/hr' location='Bangalore, India' url={hyperLink.flipkartWebLink} />
      <Card platform='Myntra' img= {logo.myntraLogo}
        salary='$150/hr' location='Abu Dhabhi, UAE' url={hyperLink.myntraWebLink} />
    </div>
  )
}

export default App
