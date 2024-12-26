import { useEffect, useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/footer.css';

const Footer = () => {

    const [date, setDate] = useState(0)

    useEffect(()=>{
        showDate();
    })

    function showDate (){
        const date = new Date
        const year = date.getFullYear()
        setDate(year)
    }
  return (
    <footer>
        <div className="footer text-center">
            <Row>
                <Col md={4}>
                    <h4>Algum problema?</h4>
                    <div className="columns">
                        <div className="icons-footer">
                            <i className="fa-solid fa-phone icon-footer"></i>
                            <span><a href="http://">(61)99378-1363</a></span>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="icons-footer">
                            <i className="fa-solid fa-envelope icon-footer"></i>
                            <span><a href="http://">suporte@brechoIo.com</a></span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <h4>Contate me</h4>
                    <div className="columns">
                        <div className="icons-footer">
                            <i className=""></i>
                            <span><a href="http://">Este site foi criado para aprendizado</a></span>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="icons-footer">
                            <i className="fa-solid fa-envelope icon-footer"></i>
                            <span><a href="http://">www.linkedin.com/in/zaellybarbosa</a></span>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="copy">
                <p>Brechó.io &copy; <span id="year">{date}</span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
