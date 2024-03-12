// Create Sub-Components of my main Card Component. 

import Card from "./Card";
import CardContent from "./CardContent";   
import CardImg from "./CardImg";    
import CardTitle from "./CardTitle";
import CardHeader from "./CardHeader";

Card.Img = CardImg;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Header = CardHeader;

export default Card;