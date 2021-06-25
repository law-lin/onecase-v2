import * as React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
  DateInput,
} from 'react-admin';

export const PostList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source='post_id' />
      <TextField source='description' />
      <DateField source='created_at' />
      <DateField source='updated_at' />
      <EditButton basePath='/post' />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }: any) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props: any) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source='post_id' />
      <TextInput source='post_id' />
      <TextInput source='description' options={{ multiline: true }} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props: any) => (
  <Create title='Create a Post' {...props}>
    <SimpleForm>
      <TextInput source='description' />
    </SimpleForm>
  </Create>
);
