# TASKOA后端接口服务

启动服务：`node server.js`

## 获取任务列表信息
  URL：/getTaskList
    limit:每一页展示的数量(默认100条)
    page:当前展示第几页(默认第1页)
    state:任务状态(0全部[默认] 1未完成 2已完成)
  METHOD：GET
  RESULT：{
    code:0,  返回数据的状态码   0->正常  1->非正常
    codeText:'',  数据状态的描述信息
    limit:8, 每页展示数量
    page:1,  当前页码
    pageNum:10,  总页数
    total:98,  总数据量
    list:[
      {
        id:1, 编号
        task:'xxx', 任务信息
        state:1, 任务状态  1未完成  2已完成
        time:'2019-06-15 04:39:00'  预完成时间
        complete:'2019-06-15 04:39:00' 真实完成时间
      },
      ...
    ]
  }
## 增加新任务
  URL：/addTask
  METHOD：POST
  DATA:{ //请求主体格式要求：urlencoded格式字符串
    task:'',
    time:''
  }
  RESULT：{
    code:0,   0->注册成功  1->注册失败
    codeText:''
  }

## 删除任务
  URL: /removeTask?id=1
  METHOD：GET
  RESULT：{
     code:0,  0->删除成功  1->删除失败
     codeText:''
  }

## 完成任务
  URL: /completeTask?id=1
  METHOD：GET
  RESULT：{
     code:0,  0->操作成功  1->操作失败
     codeText:''
  }
