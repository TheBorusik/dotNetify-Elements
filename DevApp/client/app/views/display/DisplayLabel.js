import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Element, Label, Markdown, Panel, TabItem, withTheme } from 'dotnetify-elements';
import { TabsArticle, RenderCustomize, RenderExample } from '../../components';
import { Badge, BigIcon } from './demo-helper';

const DisplayLabel = props => (
   <TabsArticle vm="DisplayLabel" id="Overview">
      <TabItem label="Overview" key="Overview">
         <Markdown id="Overview">
            <LabelExample />
         </Markdown>
      </TabItem>
      <TabItem label="API" key="API">
         <Markdown id="API" />
      </TabItem>
      <TabItem label="Customize">
         <LabelCustomize />
      </TabItem>
   </TabsArticle>
);

class LabelExample extends React.Component {
   render() {
      const buildCode = props => `
\`\`\`jsx
import React from 'react';
import { Element, Label, Panel, VMContext } from 'dotnetify-elements';
import { Badge, BigIcon } from './demo-helper';

const MyApp = _ => (
   <VMContext vm="LabelExample">
      <Panel>
         <Label id="Clock" icon="far fa-clock" ${props}/>
         <Label id="NotificationLabel" rightIcon={<Badge id="NotificationCount" />} ${props}/>
         <Label icon={<BigIcon />} css="padding: 1rem; background: white; width: 25rem" ${props}>
            <div>
               <b>Attention</b><br />
               You have <Element id="NotificationCount" /> notifications in your inbox.
            </div>
         </Label>
      </Panel>
   </VMContext>
);
\`\`\``;
      const setState = state => this.setState(state);
      let propTypes = { apart: null, bold: null, italic: null, right: null };
      return (
         <RenderExample vm="LabelExample" propTypes={propTypes} buildCode={buildCode} onChange={setState}>
            <Panel css="margin-bottom: 2rem">
               <Label id="Clock" icon="far fa-clock" {...this.state} />
               <Label id="NotificationLabel" rightIcon={<Badge id="NotificationCount" />} {...this.state} />
               <Label icon={<BigIcon name="far fa-bell" />} css="padding: 1rem; background: white; width: 25rem" {...this.state}>
                  <div>
                     <b>Attention</b>
                     <br />
                     You have <Element id="NotificationCount" /> notifications in your inbox.
                  </div>
               </Label>
            </Panel>
         </RenderExample>
      );
   }
}

class LabelCustomize extends React.Component {
   state = {};
   imageData = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22255%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20255%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163d32075fc%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163d32075fc%22%3E%3Crect%20width%3D%22255%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2294.2578125%22%20y%3D%2296%22%3ELabel%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

   render() {
      const componentTypes = Label.componentTypes;
      const handleSelected = state => this.setState(state);
      const select = value => ({});
      return (
         <RenderCustomize name="Label" componentTypes={componentTypes} select={select} onSelected={handleSelected}>
            <Label icon="far fa-times-circle" rightIcon="far fa-bell">
               Label text
            </Label>
         </RenderCustomize>
      );
   }
}

export default withTheme(DisplayLabel);
