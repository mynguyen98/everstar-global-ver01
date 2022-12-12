import { Container, Row, Col } from "react-bootstrap";
import classes from "./hero.module.css";
import Button from "../ui/button";
import { useRouter } from "next/router";
import { heroContent } from "../../data/constant";

export default function Hero() {
  const { locale } = useRouter();
  console.log(useRouter());
  const content = heroContent[locale];
  console.log(content);
  return (
    <section className={classes.section}>
      <Container fluid className={classes.container}>
        <Row className="section-center" noGutters={true}>
          <Col md={6} className="no-padding">
            <div>
              <h1 className={classes.mainHeader}>EVERSTAR GLOBAL</h1>
              <h2 className={classes.subHeader}>Our mission</h2>
              <p className={classes.description}>{content.description}</p>
              <div style={{ display: "flex", paddingTop: "2rem" }}>
                <div style={{ marginRight: "3rem" }}>
                  <Button type={"main"}>{content.btnLearn}</Button>
                </div>
                <div>
                  <Button type={"third"}>{content.btnDown}</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="no-padding">
            <div className={classes.imgContainer}>
              <img src={content.imageUrl} alt="Hero Description" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
