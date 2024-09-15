import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import {
  IconLogos,
  IconMaps,
  IconImages1,
  IconImages2,
  IconImages3,
  IconsWa,
  IconTableLink,
  Tgsampah,
} from "../../assets";
import { SlideMenu } from "../../components/atoms";
import { Link, useNavigate } from "react-router-dom";
import { Input, QRCode, Space } from "antd";

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
        <p
          className={styles.textWallet2}
          style={{ marginTop: "30px", textAlign: "center" }}
        >
          Selamat Datang di Tablelink outing doorprize 2024
        </p>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
        <div className="mb-2">
          <QRCode value={"sss"} />
          <Input placeholder="-" maxLength={60} value={""} disabled  />
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
