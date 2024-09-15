import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { IconTableLink, Tgsampah } from "../../../assets";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className={styles.pages}>
      {/* <Helmet title="Home" /> */}
      <Row className={styles.rowHeader}>
        <Col xs={2}>
          <Image src={IconTableLink} className={styles.imgMenu} />
        </Col>
        <Col xs={8}>
          <p className={styles.textWallet}>Tablelink</p>
        </Col>
      </Row>
      <Container className={styles.containerHeader}>
        <Row style={{ marginTop: "36px" }}>
          <p className={styles.textWallet2}>
            Selamat anda mendapatkan Tong Sampah{" "}
          </p>
        </Row>

        <Row className="my-2">
          <Image src={Tgsampah} />
        </Row>
        <div>
          <p className={styles.textWallet4}>
            Apakah kamu mau mau hadiah sebenarnya Klik link dibawah ini!
          </p>
          <Link to={"/doorprize1_2"}>
            <Button variant="primary">Lanjutkan {">"}</Button>{" "}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
