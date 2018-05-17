import React from 'react';
import styled from 'styled-components';
import { Frame, Markdown, Panel, Tab, TabItem, Theme, VMContext } from 'elements';
import RenderExample from '../../components/RenderExample';
import RenderCustomize from '../../components/RenderCustomize';

const FormMultiselectList = props => (
   <VMContext vm="FormMultiselectList">
      <Theme>
         <Frame width="95%">
            <h3>MultiselectList</h3>
            <Tab>
               <TabItem label="Overview">
                  <Markdown id="Overview">
                     <MultiselectListExample />
                  </Markdown>
               </TabItem>
               <TabItem label="API">
                  <Markdown id="API" />
               </TabItem>
               <TabItem label="Customize">
                  <MultiselectListCustomize />
               </TabItem>
            </Tab>
         </Frame>
      </Theme>
   </VMContext>
);

class MultiselectListExample extends React.Component {
   render() {
      const buildCode = props => `
\`\`\`jsx
import React from 'react';
import { VMContext, MultiselectList } from 'dotnetify-elements';

const MyApp = _ => (
   <VMContext vm="MultiselectListExample">
      <MultiselectList id="MultiselectList_Example" ${props}/>
   </VMContext>
);
\`\`\``;
      const setState = state => this.setState(state);
      return (
         <RenderExample vm="MultiselectListExample" propTypes={MultiselectList.propTypes} buildCode={buildCode} onChange={setState}>
            <Panel css="min-height: 8rem">
               <MultiselectList id="MultiselectList_Example" {...this.state} />
            </Panel>
         </RenderExample>
      );
   }
}

class MultiselectListCustomize extends React.Component {
   state = { plainText: false, validationMessages: null };

   render() {
      const { plainText } = this.state;
      const componentTypes = MultiselectList.componentTypes;
      const handleSelected = state => this.setState(state);
      const select = value => ({
         plainText: value === 'PlainTextComponent'
      });
      return (
         <RenderCustomize vm="MultiselectListCustomize" name="MultiselectList" componentTypes={componentTypes} select={select} onSelected={handleSelected}>
            <MultiselectList id="MyMultiselectList" label="Label:" plainText={plainText} />
         </RenderCustomize>
      );
   }
}

export default FormMultiselectList;
