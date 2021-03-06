/*
 * @Author: wangtao
 * @Date: 2021-11-15 15:11:53
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-18 10:15:47
 * @Description: file content
 */

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Link from 'next/link'
import Author from '../components/Author'
import Footer from '../components/Footer'
import {
  CalendarOutlined,
  FolderViewOutlined,
  FireOutlined,
} from '@ant-design/icons'
const ArticleList = (list) => {
  const [mylist, setMylist] = useState(list.data)
  useEffect(() => {
    setMylist(list.data)
  })
  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">
                  <Link
                    href={{ pathname: '/detailed', query: { id: item.id } }}
                  >
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <Icon type="calendar" />
                    {item.addTime}
                  </span>
                  <span>
                    <Icon type="folder" /> {item.typeName}
                  </span>
                  <span>
                    <Icon type="fire" /> {item.view_count}人
                  </span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          {/* <Advert /> */}
        </Col>
      </Row>
      <Footer />
    </>
  )
}

ArticleList.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + id).then((res) => resolve(res.data))
  })
  return await promise
}

export default ArticleList
