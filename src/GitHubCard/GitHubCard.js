import React from "react"
import Card from "react-bootstrap/Card"
import BenFranco from './BenF.jpg'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "5rem", height: "5rem"}}>
            <Card.Img variant="top" src={BenFranco} /> 
            <Card.Body style={{ height: "10rem", width: "15rem"}}>
                <Card.Title>Ben Franco</Card.Title>
                <Card.Text>
                    Two Years ago I was a working musician studying Music at The College of New Jersey. I have performed in Jazz bars, Cocktail events, Weddings, Competitions and even in the subways of New York. When the global pandemic started I noticed that the world is ever changing. Therefore, I decided to change as well. I am currently at NJIT Software development Bootcamp. My goal is that one day I can connect my passion for music with my knonwledge for programing.  
                </Card.Text>
            </Card.Body>
            </Card>
    </div>
    );
}

export default GitHubCard