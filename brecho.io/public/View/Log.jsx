import '/src/assets/css/log.css'
import Link from 'react-router-dom'

const Log = () => {
  return (
    <>
  {/* login */}
      <div className="container-corpo">      
        <Link style={{"display" : "block"}} to={"/login"}></Link>
        <Link style={{"display" : "none"}} to={"/cadastro"}></Link>
      </div>
    </>
  )
}

export default Log