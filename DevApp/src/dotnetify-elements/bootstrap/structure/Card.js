import styled from 'styled-components';
import * as utils from '../../utils';
import lightTheme from '../../theme-light';

export const Card = styled.div.attrs({
   className: 'card'
})`
   flex: ${utils.flexAuto};
   ${props => (props.horizontal ? 'flex-direction: row;' : '')}
   width: ${props => (props.width ? props.width : 'inherit')};
   ${props => props.theme.Card.Container};
   ${props => props.css};
`;

export const CardImage = styled.div.attrs({
   className: props => (props.bottom ? 'card-img-bottom' : props.left ? 'card-img-left' : props.right ? 'card-img-right' : 'card-img-top')
})`
   img { 
      ${props => (props.left || props.right ? 'height: auto' : 'width: 100%')}; 
   }
   ${props => props.theme.Card.ImageContainer}
`;

export const CardHeader = styled.div.attrs({
   className: 'card-header'
})`
   ${props => props.theme.Card.HeaderContainer}
`;

export const CardBody = styled.div.attrs({
   className: 'card-body'
})`
   width: inherit;
   ${props => props.theme.Card.BodyContainer}
`;

export const CardFooter = styled.div.attrs({
   className: 'card-footer'
})`
   ${props => props.theme.Card.FooterContainer}
`;

Card.defaultProps = { theme: lightTheme };
CardImage.defaultProps = { theme: lightTheme };
CardHeader.defaultProps = { theme: lightTheme };
CardBody.defaultProps = { theme: lightTheme };
CardFooter.defaultProps = { theme: lightTheme };
