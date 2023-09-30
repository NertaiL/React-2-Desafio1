import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    
    <Container className='text-center pt-4' >
    <h1>Cuentanos, <span>¿En que te podemos ayudar?</span></h1>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
      <Button variant="danger">Enviar</Button>
  </Form>
    </Container>
  )
}

export default Contact