import React from "react"
import Card from "react-bootstrap/Card"
import CollegeGig from './CollegeGig.jpg'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={CollegeGig} /> 
            <Card.Body>
                <Card.Title>Ben Franco Pre-Life</Card.Title>
                <Card.Text>
                    Text coming soon
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
}

export default GitHubCard