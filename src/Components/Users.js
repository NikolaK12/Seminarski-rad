import { Modal, Button, Table } from "react-bootstrap";
import { nanoid } from "nanoid";

export default function Users({ users, show, close }) {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered>
          <thead>
            <tr>
              <th>Username</th>
              <th>Color</th>
              <th>id</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={nanoid()}>
                <td style={{ color: user.clientData.color }}>
                  {user.clientData.username}
                </td>
                <td>{user.clientData.color}</td>
                <td>{user.id}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" className="mt-2" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
