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
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize1"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize1"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize2"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize2"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize3"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize3"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize4"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize4"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize5"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize5"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize6"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize6"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize7"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize7"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize8"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize8"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize9"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize9"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize10"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize10"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize11"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize11"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize12"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize12"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize13"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize13"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize14"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize14"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize15"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize15"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize16"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize16"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize17"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize17"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize18"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize18"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize19"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize19"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize20"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize20"}
            disabled
          />
        </div>
        <div className="mb-5">
          <QRCode size={300} value={"tekatekiouting.vercel.app/doorprize21"} />
          <Input
            placeholder=""
            maxLength={60}
            value={"tekatekiouting.vercel.app/doorprize21"}
            disabled
          />
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
