import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import "../styles/BeerCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface BeerCardProps {
    imagePath: string;
    name: string;
    brewery: string;
    style: string;
    abv: number;
    rating: number;
    numReviewers: number;
    }

const BeerCard: React.FC<BeerCardProps> = ({imagePath, name, brewery, style, abv, rating, numReviewers}) => {

    return (
      <StrictMode>
        <Card id="BeerCard">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Img id="Image" src={imagePath} />
            <Card.Subtitle id="Brewery">{brewery}</Card.Subtitle>
            <Card.Subtitle id="Style">{style}</Card.Subtitle>
            <Card.Subtitle id="ABV">{abv}%</Card.Subtitle>
            <Card.Subtitle id="Rating">
              <StarRating rating={rating} />
              <span className="numReviewers">({numReviewers})</span>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </StrictMode>
    );
}
export default BeerCard;