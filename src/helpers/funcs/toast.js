import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export const ToastSuccess = ({ showToast, onClose }) => {
  return (
    <div
      className="position-relative"
      style={{ display: 'flex', justifyContent: 'center', color: '#fff' }}
    >
      <Row>
        <Col xs={12}>
          <Toast
            onClose={onClose}
            show={showToast}
            delay={3000}
            autohide
            bg="success"
          >
            <Toast.Body>Cập nhật thông tin người dùng thành công</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export const ToastErr = ({ showToast, onClose }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff' }}>
      <Row>
        <Col xs={12}>
          <Toast
            onClose={onClose}
            show={showToast}
            delay={3000}
            autohide
            bg="danger"
          >
            <Toast.Body>Cập nhật thông tin người dùng thất bại</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};
