import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Card, Button } from "antd";
import styles from "./styles.module.css";
import { IconTableLink } from "../../../../assets";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [jawaban, setJawaban] = useState("");

  const handleSubmit = () => {
    if (jawaban === "P3X9T") {
      Swal.fire({
        title: "Selamat!",
        text: "Anda mendapat JBL GO 2 Portable ",
        imageUrl: "https://tekateki-7otn.vercel.app/static/media/jbl.jpeg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "philips",
      });
    } else {
      alert("Jwaban anda Salah");
    }
  };

  return (
    <div className={styles.pages}>
      <Row className={styles.rowHeader}>
        <Col xs={2}>
          <Image src={IconTableLink} className={styles.imgMenu} />
        </Col>
        <Col xs={8}>
          <p className={styles.textWallet}>Tablelink</p>
        </Col>
      </Row>
      <Container className={styles.containerHeader}>
        <Row style={{ marginTop: "26px", marginBottom: "26px" }}>
          <h5 className={styles.textWalletH5}>Selesaikan Tantangan ini!</h5>
        </Row>
        <Card title="Quest Tantangan">
          <p>
            Jualan Produk: Pilih benda terdekat di sekitar, lalu promosikan
            seolah-olah itu barang paling berharga di dunia selama 1 menit.
          </p>
        </Card>

        <p className="mt-5">
          Jika sudah menyelesaikan tantangan masukkan code yang diberikan
          panitia!
        </p>
        <Row style={{ marginTop: "10px" }}>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              onChange={(e) => setJawaban(e.target.value)}
            />
          </InputGroup>
        </Row>
        <Button
          variant="success"
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default LoginPage;
