import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import {
  DiFaCanadianMapleLeaf,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { MobiusSvg, SystemVerilogSvg } from "../../Assets";
import { mobiuspng } from "../../Assets";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col >
      <Col xs={4} md={2} className="tech-icons">
        <FaCanadianMapleLeaf />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SystemVerilogSvg />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MobiusSvg />
      </Col>
    </Row>
  );
}

export default Techstack;
