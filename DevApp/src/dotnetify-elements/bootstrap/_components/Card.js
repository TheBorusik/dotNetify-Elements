import { Card as _Card, CardImage as _CardImage, CardHeader, CardBody, CardFooter } from '../structure/Card';
import { Card, CardImage } from '../../structure/Card';

Object.assign(Card.componentTypes, {
   Container: _Card,
   ImageContainer: _CardImage,
   HeaderContainer: CardHeader,
   BodyContainer: CardBody,
   FooterContainer: CardFooter
});

export default Card;
export { Card, CardImage };
