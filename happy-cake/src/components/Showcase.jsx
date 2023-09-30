import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cake1 from '../img/tortita.png'
import cake2 from '../img/torta2.jpg'
import cake3 from '../img/torta3.jpg'
import cake4 from '../img/torta4.jpg'
import {Container} from 'react-bootstrap';

const Showcase = () => {
  return (
    <Container>
      <div className='flex-card'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={cake1} />
    <Card.Body>
      <Card.Title>Pastel Villarica</Card.Title>
      <Card.Text>
      Sumérgete intensamente en la fusión del chocolate derretido y las frutillas frescas en esta exquisita obra maestra culinaria. Representa una danza entre decadencia y frescura, siendo el punto central de una experiencia gustativa inolvidable y vibrante.
      </Card.Text>
      <Button variant="danger">No te arrepentiras😲</Button>
    </Card.Body>
  </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={cake2} />
    <Card.Body>
      <Card.Title>Pastel Etapa 18 Años</Card.Title>
      <Card.Text>
      Esta torta es majestuosa y simboliza el rito de paso a la adultez. Marca el inicio de una nueva etapa, siendo el punto focal de una transición significativa, y la pieza central en una festividad que celebra la madurez y los nuevos horizontes que se abren.
      </Card.Text>
      <Button variant="danger">No te arrepentiras😲</Button>
    </Card.Body>
  </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={cake3} />
    <Card.Body>
      <Card.Title>Pastel del Amor Eterno</Card.Title>
      <Card.Text>
      Sumérgete en el encanto de esta Torta del Amor Eterno, con su forma de corazón que irradia pasión. Es el detalle perfecto para un momento romántico. Ideal para celebrar conexiones profundas y momentos inolvidables con tu ser amado.
      </Card.Text>
      <Button variant="danger">No te arrepentiras😲</Button>
    </Card.Body>
  </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={cake4} />
    <Card.Body>
      <Card.Title>Pastel de Casamiento</Card.Title>
      <Card.Text>
      Esta exquisita torta simboliza un día inolvidable, destinada a ser recordada eternamente. Representa la unión de dos almas en un momento trascendental, siendo el pilar dulce de una celebración única y la joya central de una festividad llena de amor y compromiso.
      </Card.Text>
      <Button variant="danger">No te arrepentiras😲</Button>
    </Card.Body>
  </Card>
      </div>
    </Container>
  )
}

export default Showcase
