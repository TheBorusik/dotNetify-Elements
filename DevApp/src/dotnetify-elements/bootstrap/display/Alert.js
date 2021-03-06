import styled from 'styled-components';
import * as utils from '../utils';
import lightTheme from '../../theme-light';

export const Alert = styled.div.attrs({
   className: props => 'alert ' + utils.mapStyleToClass(props, 'alert-')
})`
   ${props => props.theme.Alert};
   ${props => props.css};
`;

Alert.defaultProps = { theme: lightTheme };
