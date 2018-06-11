import React from 'react';
import { PropTypes } from 'prop-types';
import { Form, FormContextTypes } from '../form/Form';
import * as utils from '../utils';

export class Modal extends React.Component {
   static contextTypes = FormContextTypes;

   static propTypes = {
      // Text or component for the card's header.
      header: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),

      // Text or component for the card's footer.
      footer: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),

      // Sets to modal form.
      form: PropTypes.bool,

      // Shows the modal.
      show: PropTypes.bool,

      // Sets dimension to small.
      small: PropTypes.bool,

      // Sets dimension to large.
      large: PropTypes.bool,

      // Sets custom width.
      width: PropTypes.number,

      // Occurs when the form inside the modal is submitted; emits the form data.
      onSubmit: PropTypes.func,

      // Occurs when there's validation error on submit; emits the error.
      onSubmitError: PropTypes.func
   };

   static defaultProps = {
      show: true
   };

   static componentTypes = {
      Container: undefined,
      HeaderContainer: undefined,
      BodyContainer: undefined,
      FooterContainer: undefined
   };

   render() {
      const [ Container, Header, Body, Footer ] = utils.resolveComponents(Modal, this.props);
      const { show, small, large, width, header, footer, form, children, onSubmit, onSubmitError, ...props } = this.props;
      const centered = true;
      const size = small ? 'sm' : large ? 'lg' : null;

      const [ sections, body ] = utils.filterChildren(children, child => child && (child.type === 'header' || child.type === 'footer'));
      const _header = header || sections.filter(section => section.type === 'header').shift();
      const _footer = footer || sections.filter(section => section.type === 'footer').shift();

      let modalContent = (
         <React.Fragment>
            {_header ? <Header>{_header}</Header> : null}
            <Body>{body}</Body>
            {_footer ? <Footer>{_footer}</Footer> : null}
         </React.Fragment>
      );

      if (form || onSubmit || onSubmitError)
         modalContent = (
            <Form onSubmit={onSubmit} onSubmitError={onSubmitError}>
               {modalContent}
            </Form>
         );

      return (
         <Container isOpen={show} centered={centered} size={size} style={{ maxWidth: width }} {...props}>
            {modalContent}
         </Container>
      );
   }
}
