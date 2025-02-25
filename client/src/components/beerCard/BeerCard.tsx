import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "../review/StarRating";
import "./BeerCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

interface BeerCardProps {
  imagePath: string;
  name: string;
  brewery: string;
  style: string;
  abv: number;
  rating: number;
}

const BeerCard: React.FC<BeerCardProps> = ({
  imagePath,
  name,
  brewery,
  style,
  abv,
  rating,
}) => {
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/beer/${encodeURIComponent(name)}`);
  };
  return (
    <StrictMode>
      <Card id="BeerCard" onClick={() => handleClick(name)}>
        <Card.Body>
          <Row>
            <Col xs={4}>
              <Card.Img id="Image" src={imagePath} />
            </Col>
            <Col className="text-col" xs={8}>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle id="Brewery">{brewery}</Card.Subtitle>
              <Card.Subtitle id="Style">{style}</Card.Subtitle>
              <Card.Subtitle id="ABV">{abv}%</Card.Subtitle>
              <Card.Subtitle id="Rating">
                <StarRating rating={rating} />
              </Card.Subtitle>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </StrictMode>
  );
};
export default BeerCard;
