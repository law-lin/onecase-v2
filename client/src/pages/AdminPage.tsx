import React, { useEffect, useState } from 'react';
import { Admin, LegacyDataProvider, Resource } from 'react-admin';
import { useApolloClient } from '@apollo/client';
import { __schema as schema } from 'schema.json';
// import pgDataProvider, { ProviderOptions } from 'ra-postgraphile';

import buildGraphQLProvider from 'ra-data-graphql';
import { PostCreate, PostEdit, PostList } from 'components/Posts';
import { Col, Input, Form, Button, Table, Space, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import {
  useRegisterUser,
  useAllUsers,
  useUpdateUserByUserId,
  useDeleteUserByUserId,
  useAllJournals,
  useDeleteJournalByJournalId,
} from 'utils/services';

import { createUseStyles } from 'react-jss';
import Carousel from 'components/Carousel';
import ToolDisplay from 'components/ToolDisplay';

const useStyles = createUseStyles({
  hide: {
    display: 'none',
  },
  show: {},
  toolbox: {
    borderRadius: '6px',
    // border: '1px solid black',
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    padding: '10px',
    fontFamily: 'Open Sans',
    color: '#403B3B',
    overflowY: 'auto',
    maxHeight: '295px',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C4C4C4',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#9E9E9E',
    },
    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: '#737373',
    },
  },
  tool: {
    '&:hover': {
      cursor: 'pointer',
      // backgroundColor: '#ABABAB',
      boxShadow: '0 2px 10px 0 rgb(21 27 38 / 10%)',
      border: '1px solid #cbd4db',
    },
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '10px',
  },
});

const RegisterUserForm = () => {
  const [form] = Form.useForm();
  const [registerUser] = useRegisterUser();

  const handleRegister = () => {
    form.validateFields().then(async (values) => {
      form.resetFields();
      try {
        const newUser = await registerUser({
          variables: {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
          },
        });
        if (newUser && newUser.data && newUser.data.registerUser) {
          alert('New user created!');
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <Form form={form} layout='vertical'>
      <Form.Item
        name='name'
        label='Name'
        rules={[{ required: true, message: 'Please enter a name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='username'
        label='Username'
        rules={[{ required: true, message: 'Please enter a username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='email'
        label='Email'
        rules={[{ required: true, message: 'Please enter an email' }]}
      >
        <Input type='email' />
      </Form.Item>
      <Form.Item
        name='password'
        label='Password'
        rules={[{ required: true, message: 'Please enter a name' }]}
      >
        <Input type='password' />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleRegister}>Register</Button>
      </Form.Item>
    </Form>
  );
};

const buildQuery = {
  types: [
    {
      name: 'topic',
      kind: 'OBJECT',
      fields: [{ name: 'topic_id' }, { name: 'title' }],
    },
  ],
  queries: [
    {
      name: 'allTopics',
      description: 'Reads and enables pagination through a set of `Topic`.',
      args: [
        {
          name: 'first',
          description: 'Only read the first `n` values of the set.',
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'last',
          description: 'Only read the last `n` values of the set.',
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'offset',
          description:
            'Skip the first `n` values from our `after` cursor, an alternative to cursor\nbased pagination. May not be used with `last`.',
          type: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'before',
          description: 'Read all values in the set before (above) this cursor.',
          type: {
            kind: 'SCALAR',
            name: 'Cursor',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'after',
          description: 'Read all values in the set after (below) this cursor.',
          type: {
            kind: 'SCALAR',
            name: 'Cursor',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'orderBy',
          description: 'The method to use when ordering `Topic`.',
          type: {
            kind: 'LIST',
            name: null,
            ofType: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'ENUM',
                name: 'TopicsOrderBy',
                ofType: null,
              },
            },
          },
          defaultValue: '[PRIMARY_KEY_ASC]',
        },
        {
          name: 'condition',
          description:
            'A condition to be used in determining which values should be returned by the collection.',
          type: {
            kind: 'INPUT_OBJECT',
            name: 'TopicCondition',
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: 'filter',
          description:
            'A filter to be used in determining which values should be returned by the collection.',
          type: {
            kind: 'INPUT_OBJECT',
            name: 'TopicFilter',
            ofType: null,
          },
          defaultValue: null,
        },
      ],
      type: {
        kind: 'OBJECT',
        name: 'TopicsConnection',
        ofType: null,
      },
      isDeprecated: false,
      deprecationReason: null,
    },
  ],
  resources: [
    {
      type: {
        name: 'topic',
        kind: 'OBJECT',
        fields: [{ name: 'topic_id' }, { name: 'title' }],
      },
      GET_LIST: {
        name: 'allTopics',
        description: 'Reads and enables pagination through a set of `Topic`.',
        args: [
          {
            name: 'first',
            description: 'Only read the first `n` values of the set.',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'last',
            description: 'Only read the last `n` values of the set.',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'offset',
            description:
              'Skip the first `n` values from our `after` cursor, an alternative to cursor\nbased pagination. May not be used with `last`.',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'before',
            description:
              'Read all values in the set before (above) this cursor.',
            type: {
              kind: 'SCALAR',
              name: 'Cursor',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'after',
            description:
              'Read all values in the set after (below) this cursor.',
            type: {
              kind: 'SCALAR',
              name: 'Cursor',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'orderBy',
            description: 'The method to use when ordering `Topic`.',
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'ENUM',
                  name: 'TopicsOrderBy',
                  ofType: null,
                },
              },
            },
            defaultValue: '[PRIMARY_KEY_ASC]',
          },
          {
            name: 'condition',
            description:
              'A condition to be used in determining which values should be returned by the collection.',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'TopicCondition',
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: 'filter',
            description:
              'A filter to be used in determining which values should be returned by the collection.',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'TopicFilter',
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        type: {
          kind: 'OBJECT',
          name: 'TopicsConnection',
          ofType: null,
        },
        isDeprecated: false,
        deprecationReason: null,
      },
    },
  ],
  schema,
};
const AdminPage = () => {
  const classes = useStyles();
  const [dataProvider, setDataProvider] = useState<LegacyDataProvider>();
  const [displayRegister, setDisplayRegister] = useState(false);
  const [displayUsers, setDisplayUsers] = useState(false);
  const [displayPosts, setDisplayPosts] = useState(false);
  const [usersPagination, setUsersPagination] = useState({
    current: 1,
    defaultPageSize: 10,
    pageSizeOption: ['5', '10', '15', '20', '25', '30'],
    showSizeChanger: true,
    locale: { items_per_page: '' },
  });

  const [journalsPagination, setJournalsPagination] = useState({
    current: 1,
    defaultPageSize: 5,
    pageSizeOption: ['5', '10', '15', '20', '25', '30'],
    showSizeChanger: true,
    locale: { items_per_page: '' },
  });
  const [deleteJournal] = useDeleteJournalByJournalId();
  const [updateUser] = useUpdateUserByUserId();
  const [deleteUser] = useDeleteUserByUserId();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [searchInput, setSearchInput] = useState<Input>();

  const client = useApolloClient();

  const users = useAllUsers();
  const journals = useAllJournals();

  interface User {
    userId: string;
    name: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    accountVerified: boolean;
  }

  interface Content {
    type: 'text' | 'image';
    order?: number;
    content?: string | Image[];
  }

  type Image = {
    name: string;
    url: string;
  };

  interface Journal {
    id: string;
    title: string;
    isPrivate: boolean;
    content: Content[];
    toolbox: any[];
    createdAt: string;
    updatedAt: string;
    userId: string;
    userByUserId: {
      username: string;
    };
  }

  const onRegister = () => {
    setDisplayUsers(false);
    setDisplayPosts(false);
    setDisplayRegister(true);
  };

  const onUsers = () => {
    setDisplayPosts(false);
    setDisplayRegister(false);
    users.refetch();
    setDisplayUsers(true);
  };

  const onPosts = () => {
    setDisplayRegister(false);
    setDisplayUsers(false);
    // posts.refetch();
    setDisplayPosts(true);
  };

  const handleUsersChange = (pagination: any, filters: any, sorter: any) => {
    setUsersPagination(pagination);
  };
  const handlePostsChange = (pagination: any, filters: any, sorter: any) => {
    setJournalsPagination(pagination);
  };

  const handleDeleteUser = async (userId: any) => {
    const deletedUser = await deleteUser({
      variables: {
        userId,
      },
    });
    if (
      deletedUser &&
      deletedUser.data &&
      deletedUser.data.deleteUserByUserId
    ) {
      users.refetch();
    }
  };
  const handleVerifyUser = async (userId: any, verified: boolean) => {
    const updatedUser = await updateUser({
      variables: {
        input: {
          userId,
          userPatch: {
            accountVerified: !verified,
            updatedAt: new Date(
              Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
            )
              .toISOString()
              .replace('T', ' ')
              .replace('Z', ''),
          },
        },
      },
    });
    if (
      updatedUser &&
      updatedUser.data &&
      updatedUser.data.updateUserByUserId
    ) {
      users.refetch();
    }
  };
  const handleDeleteJournal = async (journalId: any) => {
    try {
      const deletedJournal = await deleteJournal({
        variables: {
          id: journalId,
        },
      });
      if (
        deletedJournal &&
        deletedJournal.data &&
        deletedJournal.data.deleteJournalById
      ) {
        journals.refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText('');
  };

  type FormInputs = {
    setSelectedKeys: any;
    selectedKeys: any;
    confirm: any;
    clearFilters: any;
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: FormInputs) => (
      <div>
        <Input
          ref={(node) => {
            setSearchInput(node as Input);
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        // setTimeout(() => (searchInput as Input).select(), 100);
      }
    },
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  // const pgDataProviderConfig: ProviderOptions = {
  //   typeMap: {
  //     Post: {
  //       expand: true,
  //     },
  //   },
  // };
  // useEffect(() => {
  //   (async () => {
  //     // const dataProvider = await createDataProvider()
  //     // const dataProvider = await pgDataProvider(
  //     //   client as any,
  //     //   pgDataProviderConfig
  //     // );
  //     const dataProvider = await buildGraphQLProvider({
  //       client,
  //       introspection: { schema },
  //       buildQuery,
  //     });
  //     console.log(dataProvider);
  //     setDataProvider(() => dataProvider);
  //   })();
  // }, []);

  return (
    <Col span={20}>
      <Menu mode='horizontal'>
        <Menu.Item onClick={onRegister}>Register New User</Menu.Item>
        <Menu.Item onClick={onUsers}>Users</Menu.Item>
        <Menu.Item onClick={onPosts}>Journals</Menu.Item>
      </Menu>

      <div className={displayRegister ? classes.show : classes.hide}>
        <RegisterUserForm />
      </div>
      <div className={displayUsers ? classes.show : classes.hide}>
        <Table
          pagination={usersPagination}
          onChange={handleUsersChange}
          dataSource={users?.data?.allUsers?.nodes as User[]}
          columns={[
            {
              title: 'ID',
              dataIndex: 'userId',
              key: 'userId',
              ...getColumnSearchProps('userId'),
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              sorter: (a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
              ...getColumnSearchProps('name'),
            },
            {
              title: 'Username',
              dataIndex: 'username',
              key: 'username',
              sorter: (a, b) =>
                a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1,
              ...getColumnSearchProps('username'),
            },
            {
              title: 'Date Created',
              dataIndex: 'createdAt',
              key: 'createdAt',
              sorter: (a, b) =>
                a.createdAt.toLowerCase() > b.createdAt.toLowerCase() ? 1 : -1,
              // ...getColumnSearchProps('createdAt'),
              render: (a) => {
                let date = new Date(a);
                return <div>{date.toString()}</div>;
              },
            },
            {
              title: 'Last Updated',
              dataIndex: 'updatedAt',
              key: 'updatedAt',
              sorter: (a, b) =>
                a.updatedAt.toLowerCase() > b.updatedAt.toLowerCase() ? 1 : -1,
              // ...getColumnSearchProps('createdAt'),
              render: (a) => {
                let date = new Date(a);
                return <div>{date.toString()}</div>;
              },
            },
            {
              title: 'Actions',
              render: (a) => {
                return (
                  <div>
                    <button
                      className={
                        a.accountVerified ? classes.hide : classes.show
                      }
                      onClick={() =>
                        handleVerifyUser(a.userId, a.accountVerified)
                      }
                    >
                      Verify
                    </button>
                    <button
                      className={
                        a.accountVerified ? classes.show : classes.hide
                      }
                      onClick={() =>
                        handleVerifyUser(a.userId, a.accountVerified)
                      }
                    >
                      Unverify
                    </button>
                    {/* <button onClick={() => handleDeleteUser(a.userId)}>
                      Delete
                    </button> */}
                  </div>
                );
              },
            },
          ]}
        />
      </div>
      <div className={displayPosts ? classes.show : classes.hide}>
        <Table
          loading={journals.loading}
          pagination={journalsPagination}
          onChange={handlePostsChange}
          dataSource={journals?.data?.allJournals?.nodes as Journal[]}
          columns={[
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
              ...getColumnSearchProps('id'),
            },
            {
              title: 'User',
              dataIndex: 'userId',
              key: 'userId',
              ...getColumnSearchProps('userId'),
              render: (value, record) => (
                <div>
                  <b>User ID:</b> {record.userId}
                  <br />
                  <b>Username: </b>
                  {record.userByUserId.username}
                </div>
              ),
            },
            {
              title: 'Title',
              dataIndex: 'title',
              key: 'title',
              sorter: (a, b) =>
                a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
              ...getColumnSearchProps('title'),
            },
            {
              title: 'Visibility',
              dataIndex: 'isPrivate',
              key: 'isPrivate',
              render: (value, record) => (
                <div>{record.isPrivate ? 'Public' : 'Private'}</div>
              ),
            },
            {
              title: 'Content',
              dataIndex: 'content',
              key: 'content',
              ...getColumnSearchProps('content'),
              render: (content, record) => (
                <div
                  style={{
                    maxWidth: '500px',
                    maxHeight: '200px',
                    overflowWrap: 'break-word',
                    overflowY: 'auto',
                  }}
                >
                  {content.map((c: any) => {
                    const item = JSON.parse(c);

                    if (item.type === 'text') {
                      return <div>{item.content}</div>;
                    } else if (item.type === 'image') {
                      let images: string[] = [];
                      item.content.forEach((image: any) => {
                        images.push(image.url);
                      });
                    } else {
                      return (
                        <ToolDisplay
                          currentUser={record.userByUserId}
                          tool={item.content}
                        />
                      );
                    }
                  })}
                </div>
              ),
            },
            {
              title: 'Toolbox',
              dataIndex: 'toolbox',
              key: 'toolbox',
              ...getColumnSearchProps('toolbox'),
              render: (toolbox) => {
                if (toolbox) {
                  return (
                    <div className={classes.toolbox}>
                      {toolbox.map((t: any) => {
                        const tool = JSON.parse(t);

                        return (
                          <div className={classes.tool}>
                            <div></div>
                            {tool.type === 'text' && <div>{tool.content}</div>}
                            {tool.type === 'image' && (
                              <div>
                                <img
                                  src={tool.content}
                                  style={{ height: '150px', width: '150px' }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              },
            },
            {
              title: 'Date Created',
              dataIndex: 'createdAt',
              key: 'createdAt',
              sorter: (a, b) =>
                a.createdAt.toLowerCase() > b.createdAt.toLowerCase() ? 1 : -1,
              render: (a) => {
                let date = new Date(a);
                return <div>{date.toString()}</div>;
              },
            },
            {
              title: 'Last Updated',
              dataIndex: 'updatedAt',
              key: 'updatedAt',
              sorter: (a, b) =>
                a.updatedAt.toLowerCase() > b.updatedAt.toLowerCase() ? 1 : -1,
              render: (a) => {
                let date = new Date(a);
                return <div>{date.toString()}</div>;
              },
            },
            {
              title: 'Actions',
              render: (a) => {
                return (
                  <div>
                    <button onClick={() => handleDeleteJournal(a.id)}>
                      Delete
                    </button>
                  </div>
                );
              },
            },
          ]}
        ></Table>
      </div>

      {/* <Admin dataProvider={dataProvider}>
        <Resource
          name='Post'
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
        /> */}
      {/* <Resource name="Post" list={PostList} create={PostCreate} edit={PostEdit} /> */}
      {/* </Admin> */}
    </Col>
  );
};

export default AdminPage;
