import { Container, Row, Col } from "react-bootstrap";
import classes from "./hero.module.css";
import Button from "../ui/button";
import { useRouter } from "next/router";
import { heroContent } from "../../data/constant";
import Image from "next/image";
import { useLangContext } from "../../store/lang-switch-context";
export default function Hero() {
  // const { locale } = useRouter();
  const { currentLocale } = useLangContext();
  const content = heroContent[currentLocale];

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
                  <Button
                    type={"third"}
                    hrefLink="https://drive.google.com/drive/folders/1yRVMQ7ybSIC0mW1GRXnLwdlRA99AthS0"
                  >
                    {content.btnDown}
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="no-padding">
            <div className={classes.imgContainer}>
              <Image
                src={content.imageUrl}
                width={350}
                height={350}
                alt="Hero Description"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
