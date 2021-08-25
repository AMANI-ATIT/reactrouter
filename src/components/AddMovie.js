import {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap"
const AddMovie = ({addMovie}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setnewMovie] =useState ([]);
  const handleChange=(e)=>{
    setnewMovie({...newMovie,[e.target.name]:e.target.value})

  }
    return (
        <div>


      <Button variant="primary" onClick={handleShow}>
      Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={handleChange} name="name"  placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={handleChange} name="description" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Poster URL</Form.Label>
    <Form.Control onChange={handleChange} name="posterurl"  placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label> Rating</Form.Label>
    <Form.Control onChange={handleChange} name="rating" placeholder="" />
  </Form.Group>
</Form>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addMovie(newMovie)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
        </div>
    );
}

export default AddMovie;
