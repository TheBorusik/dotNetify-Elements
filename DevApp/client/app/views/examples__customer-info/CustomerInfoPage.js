import React from 'react';
import CustomerInfoForm from './CustomerInfoForm';
import { Button, DataGrid, Form, Frame, Modal, Panel, Theme, VMContext } from 'elements/bootstrap';

export default class CustomerInfoPage extends React.Component {
   state = { editable: false, edit: false, showDialog: false };

   handleSelect = value => this.setState({ editable: value ? true : false });
   toggleEdit = _ => this.setState({ edit: !this.state.edit });
   toggleDialog = _ => this.setState({ showDialog: !this.state.showDialog });

   render() {
      const { editable, edit, showDialog } = this.state;
      const canEdit = editable && !edit;
      return (
         <Theme>
            <VMContext vm="CustomerInfoPage">
               <Frame>
                  <h2>Contacts</h2>
                  <DataGrid id="Contacts" onSelect={this.handleSelect} disabled={edit} />
                  <Form plainText={!edit}>
                     <Panel>
                        <Panel horizontal left>
                           <Button onClick={this.toggleDialog} disabled={edit}>
                              New...
                           </Button>
                           {canEdit ? <Button onClick={this.toggleEdit}>Edit</Button> : null}
                           <Button id="Submit" submit hide={!edit} onClick={this.toggleEdit}>
                              Update
                           </Button>
                           <Button cancel secondary hide={!edit} disabled={false} onClick={this.toggleEdit}>
                              Cancel
                           </Button>
                        </Panel>
                        <CustomerInfoForm />
                     </Panel>
                  </Form>
               </Frame>
            </VMContext>
            <Modal show={showDialog} large>
               <CustomerInfoForm />
               <Panel right>
                  <Button onClick={this.toggleDialog}>OK</Button>
               </Panel>
            </Modal>
         </Theme>
      );
   }
}
