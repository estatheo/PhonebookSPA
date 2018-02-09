import {Table, Header, Image} from 'semantic-ui-react';
import React from 'react';
import icon from '../../content/phone.png';
export function MapToTableRow(data){
    
    let key = 0;
    return Object.keys(data).map(
    contact => {
        return (
            <Table.Row key={key++}>
            <Table.Cell>
                <Header as="h4" image>
                <Image rounded size="mini" src={icon} />
                <Header.Content>
                    {data[contact].name}
                </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell>
                {data[contact].phone_number}
            </Table.Cell>
            <Table.Cell>{data[contact].address}</Table.Cell>
            </Table.Row>
        );
    });
}