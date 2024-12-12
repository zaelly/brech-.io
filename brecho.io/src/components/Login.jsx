import '/src/assets/css/login.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/button'

const Login = () => {
  return (
      <div className="container-corpo">      
        <div className="container-login">
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
            <Form.Text id="passwordHelpBlock" muted>
              Sua senha deve ter de 8 a 20 caracteres, conter letras e números,
              e não deve conter espaços, caracteres especiais ou emoji.
            </Form.Text>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Lembrar senha?"
            />
            <Button variant="primary" type="submit">
              Login
            </Button>
        </Form>
        </div>
      </div>
  )
}

export default Login