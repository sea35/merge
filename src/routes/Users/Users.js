import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import styles from './users.less'
import {Search,Modal } from '../../components/Users'
import {List} from '../../components/common'


function Users({ location, dispatch, users }) {
  const {
    loading, list, total, current, pagination,
    currentItem, modalVisible, modalType,
  } = users

  const { field, keyword } = location.query

  const userModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({
        type: `users/${modalType}`,
        payload: data,
      })
    },
    onCancel() {
      dispatch({
        type: 'users/hideModal',
      })
    },
  }

  const userListProps = {
    dataSource: list,
    loading,
    pagination:pagination,
    onPageChange(page) {
      dispatch(routerRedux.push({
        pathname: '/users',
        query: {
          page:page.current,
          pageSize:page.pageSize
        },
      }))
    },
    onDeleteItem(id) {
      dispatch({
        type: 'users/delete',
        payload: id,
      })
    },
    onEditItem(item) {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
    columns:[
      {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
        width: 64,
        className: styles.avatar,
        render: (text) => <img width={24} src={text} />,
      }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '昵称',
        dataIndex: 'nickName',
        key: 'nickName',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        render: (text) => <span>{text}岁</span>,
      }, {
        title: '性别',
        dataIndex: 'isMale',
        key: 'isMale',
        render: (text) => <span>{text
          ? '男'
          : '女'}</span>,
      }, {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
      }, {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
      }]
  }

  const userSearchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      dispatch({
        type: 'users/query',
        payload: fieldsValue,
      })
    },
    onAdd() {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }

  const UserModalGen = () =>
    <Modal {...userModalProps} />

  return (
    <div className="content-inner">
      <Search {...userSearchProps} />
      <List {...userListProps} />
      <UserModalGen />
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps)(Users)
