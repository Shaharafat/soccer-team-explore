import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import './Loader.css';
import loader from '../../icon/loader.svg'
import {useThemeContext} from '../../context/ThemeContext'

const Loader = () => {
  const theme = useThemeContext();
  return (
    <Row className="loader-wrapper mx-auto" style={{background: theme.background}}>
      <Col xs={12} md={8} lg={6} className="d-flex justify-content-center align-items-center">
        <Image src={loader} className="loader-image" />
      </Col>
    </Row>
  )
}

export default Loader
