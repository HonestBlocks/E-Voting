import React from 'react';
import { Create,SimpleForm,ReferenceInput, SelectInput, TextInput, LongTextInput ,List, Datagrid, TextField, ReferenceField, EditButton} from 'react-admin';

export const Election = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const ElectionCreate = props => (
    <Create {...props}>
        <SimpleForm>
                <SelectInput optionText="Address" />
                <SelectInput optionText="Party" />
        </SimpleForm>
    </Create>
);