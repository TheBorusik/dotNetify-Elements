import React from 'react';
import styled from 'styled-components';
import { Frame, Markdown, MarkdownTOC, Panel, Tab, VMContext } from 'dotnetify-elements';

const Sidebar = styled.div`
   position: fixed;
   border-left: 2px solid #ddd;
   margin-left: 2rem;
   padding-left: 1rem;
`;

const Title = styled.div`
   ${props => (!props.show ? 'display: none' : '')};
   ${props => props.theme.MarkdownTOC.Container};
   margin-bottom: 1rem;
   font-size: 1.1rem;
`;

const scrollIntoView = id => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

const Article = props => (
   <VMContext vm={props.vm}>
      <Frame horizontal css="margin-left: 3rem; overflow-x: hidden">
         <Panel css="width: calc(100% - 20rem); overflow-y: hidden">{props.children}</Panel>
         <Sidebar>
            <Title show={props.tocTitle}>
               <a href="javascript:void(0)" onClick={_ => scrollIntoView(props.title)}>
                  {props.tocTitle}
               </a>
            </Title>
            {props.id ? <MarkdownTOC id={props.id} /> : null}
         </Sidebar>
      </Frame>
   </VMContext>
);

export class TabsArticle extends React.Component {
   state = { id: this.props.id, tocTitle: this.props.id };
   render() {
      const { vm, title, children } = this.props;
      const handleActivate = (key, label) => this.setState({ id: key.length > 1 ? key : null, tocTitle: key.length > 1 ? label : null });
      return (
         <Article vm={vm} id={this.state.id} title={title} tocTitle={this.state.tocTitle}>
            <h2 id={title}>{title}</h2>
            <Tab onActivate={handleActivate}>{children}</Tab>
         </Article>
      );
   }
}

export default Article;
