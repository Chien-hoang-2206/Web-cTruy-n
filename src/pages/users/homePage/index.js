import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ContainerPageContent,
  ContainerRow1,
  ContainerRow1Column1,
  ContainerRow1Column2,
  ContainerRow1Column3,
  ContainerRow1Column4,
  ContainerRow2Column1,
  ContainerRow2Column2,
  ContainerRow4,
  ContainerUpdate,
  ContentnerRow4Title,
  ImageBanner,
  TransparentBanner,
} from "./styleHome";
import {
  AuthName,
  Heading1,
} from "../../../components/TextField/TestComponents";
import { Icon } from "@iconify/react";
import CardHomeRecomended from "../../../components/card/CardRecommemded/CardHomeRecomended";
import CardHomeReading from "../../../components/card/CardReading/CardHomeReading";
import NewUpdateRowHomeStyle from "../../../components/NewUpdateRow/NewUpdateRowHome";
import { Button } from "@mui/material";
import "./home.css";
import Footer from "../../../parts/user/footer";
export default function HomePage() {
  return (
    <>
      <ImageBanner>
        <TransparentBanner>
          <ContainerPageContent>
            {/* Truyen de cu  */}
            <ContainerRow1>
              <Row>
                <Col sm={8}>
                  <Row>
                    <ContainerRow1Column1>
                      <Col sm={9}>
                        <Heading1>Truyện được đề cử</Heading1>
                      </Col>
                      <Col sm={3}>
                        <ContainerRow1Column2>
                          <Button
                            size="small"
                            variant="outline"
                            color="inherit"
                            startIcon={
                              <Icon icon="material-symbols:app-registration" />
                            }
                          >
                            Xem tất cả
                          </Button>
                        </ContainerRow1Column2>
                      </Col>
                    </ContainerRow1Column1>
                  </Row>
                  <Row>
                    <ContainerRow2Column1>
                      <CardHomeRecomended
                        nameComic="Tieu de 1"
                        type1="Loai 1 "
                        type2="Loai 2 "
                        type3="Loai 3 "
                        content="Description about thua.ss"
                        auth="Alibaba"
                        numStar="4"
                      />
                      <CardHomeRecomended />
                      <CardHomeRecomended />
                      <CardHomeRecomended />
                    </ContainerRow2Column1>
                  </Row>
                </Col>
                <Col sm={4}>
                  <Row>
                    <ContainerRow1Column3>
                      <Col sm={7}>
                        <Heading1>Đang đọc</Heading1>
                      </Col>
                      <Col sm={6}>
                        <ContainerRow1Column4>
                          <Button
                            size="small"
                            variant="outline"
                            color="inherit"
                            startIcon={
                              <Icon icon="material-symbols:app-registration" />
                            }
                          >
                            Xem tất cả
                          </Button>
                        </ContainerRow1Column4>
                      </Col>
                    </ContainerRow1Column3>
                  </Row>
                  <Row>
                    <ContainerRow2Column2>
                      <CardHomeReading
                        nameComic="Thần Điêu Đại Hiếp"
                        chaperReading="2"
                        chaperNum="2222"
                      />
                      <CardHomeReading />
                      <CardHomeReading />
                      <CardHomeReading />
                      <CardHomeReading />
                      <CardHomeReading />
                      <CardHomeReading />
                      <CardHomeReading />
                    </ContainerRow2Column2>
                  </Row>
                </Col>
              </Row>
            </ContainerRow1>
            {/* Moi cap nhat */}

            <ContainerUpdate>
              <Row>
                <Col sm={10}>
                  <Heading1>Mới cập nhật</Heading1>
                </Col>
                <Col sm={2}>
                  <Button
                    size="small"
                    variant="contained"
                    color="inherit"
                    startIcon={
                      <Icon icon="material-symbols:app-registration" />
                    }
                  >
                    Xem tất cả
                  </Button>
                </Col>
              </Row>
            </ContainerUpdate>

            {/* Cac truyen moi cap nhat */}
            <ContainerRow4>
              <ContentnerRow4Title>
                <Row>
                  <Col sm={2}>
                    <AuthName>Tên truyện</AuthName>
                  </Col>
                  <Col sm={2}>
                    <AuthName>Thể loại</AuthName>
                  </Col>
                  <Col sm={4}>
                    <AuthName>Chương mới nhất</AuthName>
                  </Col>
                  <Col>
                    <AuthName>Tác giả</AuthName>
                  </Col>
                  <Col sm={2}>
                    <AuthName>Thời gian</AuthName>
                  </Col>
                </Row>
              </ContentnerRow4Title>
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
            </ContainerRow4>
          </ContainerPageContent>
          <Footer />
        </TransparentBanner>
      </ImageBanner>
    </>
  );
}
