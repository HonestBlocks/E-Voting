import React from 'react';
import { Create,SimpleForm,ReferenceInput, SelectInput, TextInput, LongTextInput ,List, Datagrid, TextField, ReferenceField, EditButton} from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid >
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);