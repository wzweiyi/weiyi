# 王珍


- 5.23日报
    - leeCode题库
       - [ x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
       - [  全排列](https://leetcode-cn.com/problems/permutations/submissions/)
    - 文章阅读
       -  [「前端性能」避免回流和重绘的必要性](https://juejin.cn/post/6953029989306466317)
    - 源码阅读
       - [_.dropWhile](https://www.lodashjs.com/docs/lodash.dropWhile)
       - [_.fill](https://www.lodashjs.com/docs/lodash.fill)
    - 项目进度
       - css moudle的应用
  
   -----

- 5.22日报
    - leeCode题库
       - [ 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
       - [猜数字](https://leetcode-cn.com/problems/guess-numbers/)
    - 文章阅读
       -  [如何组织管理css样式](https://www.jianshu.com/p/618e1396383e)
       - [一文彻底搞懂 DvaJS 原理](https://juejin.cn/post/6963466553601835044)
    - 源码阅读
       - [_.dropRight](https://www.lodashjs.com/docs/lodash.dropRight)
       - [_.dropRightWhile](https://www.lodashjs.com/docs/lodash.dropRightWhile)
    - 项目进度
       - layout约定式路由时的全局布局文件。
       - 八维实训平台头部和尾部的编写
   -----

- 5.21日报
    - leeCode题库
       -  [ 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
       - [最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)
    - 文章阅读
       -  [ ES5和ES6写法对照表](https://www.jianshu.com/p/618e1396383e)
       - [promise和async await的区别](https://www.jianshu.com/p/463280af23ef)
    - 源码阅读
       - [_.differenceWith](https://www.lodashjs.com/docs/lodash.differenceWith)
       - [_.drop](https://www.lodashjs.com/docs/lodash.drop)
   
    
   -----
- 5.20日报
    - [Hooks](https://react.html.cn/tutorial/tutorial.html)
       - useState
       - useEffect
          - 第一个参数是一个函数，在对应的生命周期里面执行的逻辑
          - 第二参数是effect的依赖，用来模拟生命周期
          - undefined, 每次组件更新或者props改变都会执行
          - [], 相当于componentDidMount
          - [list], 相当于shouldComponentUpdate, 当list改变的时候才 会执行
          - 第一个参数返回的函数，当组件销毁的时候会执行
               ```js
               useEffect(()=>{
               return ()=>{
               }
               }, [])
               ```
    - [umijs](https://umijs.org/zh-CN/)  
   -----
- 5.19日报
    - componentDidMount为什么适合发ajax请求
       - 1.如果在componentWillMount里面发请求，会出现多次请求的情况
       - 2.render里面不可以修改state
       - 3.constructor是进行初始化的  
    - ajax请求方式
       - get  post  delete   update  options预检请求 
    - ajax传参方式
       - 1.query string
       - 2.headers
       - 3.body
            - form-data  上传文件
            - x-www-form-urlencoded
            - application/json
   -----
- 5.18日报
    - git常用命令
       - git clone url git@github.com:gxx-github/wangzhen.git --克隆远程版本库
       - git init  --初始化本地版本库
       - git add -- 追踪
       - git status --查看状态
       - git commit -m 'update ****' --提交更新之后文档
       - git pull origin main  拉
       - git push origin main  推
       - git log
       - git branch 分支   新建分支
       - git pull add origin 仓库名字    添加远程版本库

    - [promise](https://es6.ruanyifeng.com/#docs/promise)
       - 相当于一个密闭的容器，是一个对象，本身是同步的，内部存放异步代码
       - promise有3个状态  pending fulfilled  rejected
       - promise状态一经改变，不会在变
       - promise状态变化只有两种，可能从pending变为fulfilled，从pending变为rejected
       - promise.all将多个promise实例包装成一个新的promise实例,所有实例成功之后在执行then
       - promise.race 谁先加载完成，先执行谁
 -----

















          






 
