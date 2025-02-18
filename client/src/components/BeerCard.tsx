import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import "../styles/BeerCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

interface BeerCardProps {
  imagePath: string;
  name: string;
  brewery: string;
  style: string;
  abv: number;
  rating: number;
  numReviewers: number;
}

const BeerCard: React.FC<BeerCardProps> = ({
  imagePath,
  name,
  brewery,
  style,
  abv,
  rating,
  numReviewers,
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
            <Col xs={8}>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle id="Brewery">{brewery}</Card.Subtitle>
              <Card.Subtitle id="Style">{style}</Card.Subtitle>
              <Card.Subtitle id="ABV">{abv}%</Card.Subtitle>
              <Card.Subtitle id="Rating">
                <StarRating rating={rating} />
                <span className="numReviewers">({numReviewers})</span>
              </Card.Subtitle>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </StrictMode>
  );
};

export default BeerCard;