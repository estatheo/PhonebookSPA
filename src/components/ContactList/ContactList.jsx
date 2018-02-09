import React from 'react';
import { Table } from 'semantic-ui-react';

import { MapToTableRow } from '../../utils/List/ListUtils.js';
import { Get } from '../../utils/Generic/GenericUtils.js';
class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state = { contacts: undefined, json2: undefined };
    }

    

    componentWillMount(){

        const URL = 'http://www.mocky.io/v2/581335f71000004204abaf83';

        let contactsJson;
        Get(URL).then(data => {
          contactsJson=data.contacts;
          console.log('hallo',contactsJson);
        let tableRows = MapToTableRow(contactsJson);
        this.setState({contacts: tableRows});        
        })
        
    }
    render(){
        
        
        return (
            <Table basic="very" celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body >
                    {this.state.contacts}
                </Table.Body>
            </Table>
        )
    }
}

export default ContactList;