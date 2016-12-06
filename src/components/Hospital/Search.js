import React, { PropTypes } from 'react'
import { Form, Input, Button, Select } from 'antd'
import styles from './Search.less'

const search = ({
  field,
  keyword,
  onSearch,
  onAdd,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
}) => {
  function handleSubmit(e) {
    e.preventDefault()
    validateFields((errors) => {
      if (!!errors) {
        return
      }
      onSearch(getFieldsValue())
    })
  }

  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        <Form inline onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('field', {
              initialValue: field || 'c_name',
            })(
              <Select>
                <Select.Option value="c_name">名字</Select.Option>
                <Select.Option value="c_region">地区</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('keyword', {
              initialValue: keyword || '',
            })(<Input />)}
          </Form.Item>
          <Button type="primary" htmlType="submit">搜索</Button>
        </Form>
      </div>
      <div className={styles.create}>
        <Button type="ghost" onClick={onAdd}>添加</Button>
      </div>
    </div>
  )
}

search.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onAdd: PropTypes.func,
  field: PropTypes.string,
  keyword: PropTypes.string,
}

export default Form.create()(search)
