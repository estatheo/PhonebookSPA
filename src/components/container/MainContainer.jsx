import React from 'react';
import {Segment, Container, Label} from 'semantic-ui-react';
import ContactList from '../ContactList/ContactList';
import style from './MainContainer.css';
class MainContainer extends React.Component {
    render(){
        return (
        <Container>
            
            <Segment raised className="centeredContent" >            
            <Segment compact >
            <Label color='teal' icon='phone' attached='top left' size='medium'></Label>
                <ContactList />
            </Segment>
            </Segment>
        </Container>
        )
    }
}

export default MainContainer;