import React from 'react'
import '@/views/Task.less';
import { Button, Popconfirm, Table, Modal, Tag } from 'antd';

/* 对日期处理的方法 */
const zero = function zero(text) {
  text = String(text);
  return text.length < 2 ? '0' + text : text;
};
const formatTime = function formatTime(time) {
  let arr = time.match(/\d+/g),
    [, month, day, hours = '00', minutes = '00'] = arr;
  return `${zero(month)}-${zero(day)} ${zero(hours)}:${zero(minutes)}`;
};
/* 表格列的数据 */
const columns = [{
  title: '编号',
  dataIndex: 'id',
  align: 'center',
  width: '8%'
}, {
  title: '任务描述',
  dataIndex: 'task',
  ellipsis: true,
  width: '50%'
}, {
  title: '状态',
  dataIndex: 'state',
  align: 'center',
  width: '10%',
  render: (text) => +text === 1 ? '未完成' : '已完成'
}, {
  title: '完成时间',
  dataIndex: 'time',
  align: 'center',
  width: '15%',
  render: (_, record) => {
    let { state, time, complete } = record;
    if (+state === 2) time = complete;
    return formatTime(time);
  }
}, {
  title: '操作',
  render: (_, record) => {
    let { state } = record;
    return <>
      <Popconfirm title="您确定要删除此任务吗？"
        onConfirm={() => { }}>
        <Button type="link">删除</Button>
      </Popconfirm>

      {+state !== 2 ? <Popconfirm title="您确把此任务设置为完成吗？"
        onConfirm={() => { }}>
        <Button type="link">完成</Button>
      </Popconfirm> : null}
    </>;
  }
}];
class Task extends React.Component {
  // 初始化状态
  state = {
    tableData: [],
    tableLoading: false,
    modalVisible: false,
    confirmLoading: false
  }
  // 关闭窗口
  // handleCancel() {
  //   this.modalVisible(false)
  // }
  // // 点击确定
  // handleOk() {
  //   console.log("点击OK")
  //   this.confirmLoading(true)
  // }
  render() {
    let { tableData, tableLoading, modalVisible, confirmLoading } = this.state
    return (
      < div className="task-box" >
        {/* 头部 */}
        <div className="header" >
          <h2 className="title">TASK OA 任务管理系统</h2>
          <Button type="primary" onClick={() => {
            this.setState({
              modalVisible: true
            })
          }}>新增任务</Button>
        </div>

        {/* 标签 */}
        <div className="tag-box" >
          {
            ['全部', '未完成', '已完成'].map((item, index) => {
              return <Tag key={index}
                // color={index === selectedIndex ? '#1677ff' : ''}
                onClick={() => {

                }}>
                {item}
              </Tag>;
            })
          }
        </div >

        <Table columns={columns}
          dataSource={tableData}
          loading={tableLoading}
          pagination={false}
          rowKey="id" />
        <Modal
          title="新增任务窗口"
          open={modalVisible}
          getContainer={false}
          confirmLoading={confirmLoading}
        // onCancel={() => handleCancel}
        // onOk={handleOk}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div >
    )
  }
};
export default Task;
