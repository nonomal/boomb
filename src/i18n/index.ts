// Copyright 2021-present the xiejiahe. All rights reserved. MIT license.
import { createI18n } from 'vue-i18n'

let locale = localStorage.getItem('locale')

if (!locale) {
  if (window.navigator.language === 'zh-CN') {
    locale = 'zh-CN'
  } else {
    locale = 'en'
  }
}

export default createI18n({
  legacy: false,
  locale,

  messages: {
    en: {
      auth: 'Authorization',
      what: 'What is Boomb?',
      getToken: 'Apply for Token',
      about: 'About Boomb',
      report: 'BUG / Suggest',
      info: 'Current Info',
      login: 'Login',
      logout: 'Sign Out',
      uploadFile: 'Upload Files',
      createDir: 'Create Directory',
      changeFile: 'Change File',
      fileName: 'File Name',
      dirName: 'Name',
      fileSize: 'File Size',
      noData: 'Empty~ Drag the file here',
      bulkDel: 'Delete',
      allCheck: 'Check',
      total: 'Total {len} item',
      confirmDel: 'Are you sure you want to delete {len} files?',
      ok: 'OK',
      cancel: 'Cancel',
      all: 'All',
      refresh: 'Refresh',
      asc: 'ASC',
      desc: 'DESC',
      uploadFileEncode: 'File upload scheme',
      newFile: 'Create a new file',
      publish: 'New',
      publichFileName:
        'Enter the name of the file to be created, if not, it will be randomly generated',
      temp: 'Temp File',
      editFile: 'Edit This File',
      copyed: 'Copy successfully',
      uploadQueue: 'Upload queue',
    },

    'zh-CN': {
      auth: '授 权',
      what: 'Boomb是什么?',
      getToken: '去申请Token',
      about: '关于 Boomb',
      report: 'BUG / 建议',
      info: '当前信息',
      login: '登 录',
      logout: '退出登录',
      uploadFile: '上传文件',
      createDir: '新建文件夹',
      changeFile: '更换文件',
      fileName: '文件名',
      dirName: '目录名',
      fileSize: '文件大小',
      noData: '空空如也~，赶紧将文件拖到这里吧~',
      bulkDel: '批量删除',
      allCheck: '全选',
      total: '共 {len} 项',
      confirmDel: '您确定要删除{len}个文件吗？',
      ok: '确定',
      cancel: '取消',
      all: '全部',
      refresh: '刷新',
      asc: '升序',
      desc: '降序',
      uploadFileEncode: '文件上传方案',
      newFile: '新建文件',
      publish: '新建',
      publichFileName: '输入要新建的文件名, 如果没有将随机生成',
      temp: '临时文件',
      editFile: '编辑此文件',
      copyed: '复制成功',
      uploadQueue: '上传队列',
    },
  },
})
