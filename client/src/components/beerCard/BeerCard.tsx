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
  style: string;
  rating: number;
}
/**
 *
 * @param BeerCardProps - an object containing the following properties:
 * - imagePath: string - the path to the image of the beer
 * - name: string - the name of the beer
 * - style: string - the style of the beer
 * - rating: number - the average rating of the beer
 * @returns A card that displays the image, name, brewery, style, abv, and rating of a beer.
 * Clicking on the card will navigate to the beer's page.
 */
const BeerCard: React.FC<BeerCardProps> = ({
  imagePath,
  name,
  rating,
  style,
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
              <Card.Subtitle id="Style">{style}</Card.Subtitle>
            </Col>
          </Row>
        </Card.Body>
        <Row>
          <StarRating rating={rating} />
        </Row>
      </Card>
    </StrictMode>
  );
};
export default BeerCard;
