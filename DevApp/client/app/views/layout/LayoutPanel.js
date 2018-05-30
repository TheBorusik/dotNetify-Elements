import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Markdown, Panel, TabItem, defaultTheme, withTheme } from 'dotnetify-elements';
import { TabsArticle, RenderCustomize, RenderExample } from '../../components';

const LayoutPanel = props => (
   <TabsArticle vm="LayoutPanel" id="Overview">
      <TabItem label="Overview" name="Overview">
         <Markdown id="Overview">
            <PanelExample />
            <ChildPropsExample />
         </Markdown>
      </TabItem>
      <TabItem label="API" name="API">
         <Markdown id="API" />
      </TabItem>
   </TabsArticle>
);

const Rectangle = styled.div`
   width: 20rem;
   height: 3rem;
   border: 1px solid #aaa;
   background: #ccc;
   display: flex;
`;

const Square = styled.div`
   width: 6rem;
   height: 6rem;
   border: 1px solid #aaa;
   background: #ccc;
`;

class PanelExample extends React.Component {
   render() {
      const buildCode = props => `
\`\`\`jsx
import React from 'react';
import { Panel } from 'dotnetify-elements';

const MyApp = _ => (
   <Panel css="border: 2px dashed gray">
      <Panel css="border: 2px dashed tomato" ${props}>
         <Square />      
         <Rectangle />
      </Panel>
   </Panel>   
);
\`\`\``;
      const setState = state => this.setState(state);
      let propTypes = { ...Panel.propTypes, wrap: null };
      return (
         <RenderExample propTypes={propTypes} buildCode={buildCode} onChange={setState}>
            <Panel height="16rem">
               <Panel css="border: 2px dashed #ccc">
                  <Panel css="border: 2px dashed tomato" {...this.state}>
                     <Square />
                     <Rectangle />
                  </Panel>
               </Panel>
            </Panel>
         </RenderExample>
      );
   }
}

const ChildPropsExample = props => (
   <Panel horizontal childProps={{ flex: true, right: true, css: 'background: #fff' }}>
      <Panel>
         <Square />
      </Panel>
      <Panel>
         <Rectangle />
      </Panel>
   </Panel>
);

class PanelCustomize extends React.Component {
   render() {
      const componentTypes = Panel.componentTypes;
      return (
         <RenderCustomize name="Panel" componentTypes={componentTypes}>
            <Panel />
         </RenderCustomize>
      );
   }
}

export default withTheme(LayoutPanel);