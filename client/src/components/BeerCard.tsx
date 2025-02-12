import React, { StrictMode } from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import "../styles/BeerCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface BeerCardProps {
    name: string;
    brewery: string;
    style: string;
    abv: number;
    rating: number;
    description?: string;
    }

const BeerCard: React.FC<BeerCardProps> = ({ name, brewery, style, abv, rating, description }) => {

    return (
        <StrictMode>
            <Card id="BeerCard">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle id="Brewery">{brewery}</Card.Subtitle>
                    <Card.Subtitle id="Style">{style}</Card.Subtitle>
                    <Card.Subtitle id="ABV">{abv}</Card.Subtitle>
                    <Card.Subtitle id="Rating">
                        <StarRating rating={rating} />
                    </Card.Subtitle>
                    <Card.Text id="Description">{description}</Card.Text>
                </Card.Body>
            </Card>
        </StrictMode>
    );
}
export default BeerCard;