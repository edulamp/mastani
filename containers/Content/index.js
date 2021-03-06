/*
*
* Content
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import randomColor from 'randomcolor'
import shortid from 'shortid'
import { Row, Col } from 'antd'

import { makeDebugger, storeSelector } from '../../utils/functions'
import PostsViewer from '../PostsViewer'
import TutsViewer from '../TutsViewer'
import MapViewer from '../MapViewer'
import JobsViewer from '../JobsViewer'
import CheatSheetViewer from '../CheatSheetViewer'
import * as logic from './logic'

import {
  Wrapper,
  //  CategoryWrapper,
  //  Category,
  Entry,
  Divider,
  Desc,
} from './styles'

const debug = makeDebugger('C:Content')

const cheatsheetData = {
  langs: [
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'django', link: 'link' },
    { title: 'react', link: 'link' },
    { title: 'angular', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'django', link: 'link' },
    { title: 'react', link: 'link' },
    { title: 'angular', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
    { title: 'javascript', link: 'link' },
    { title: 'ruby', link: 'link' },
    { title: 'elixir', link: 'link' },
  ],
  framework: [
    { title: 'django', link: 'link' },
    { title: 'react', link: 'link' },
    { title: 'angular', link: 'link' },
    { title: 'vue', link: 'link' },
  ],
}

const Langs = ({ base }) => {
  //   const base = 'orange' // '#8363B4' //'#68808D'
  const { langs } = cheatsheetData
  const colors = randomColor({
    hue: base,
    luminosity: 'light',
    count: langs.length,
  })

  return (
    <div>
      <Row>
        {langs.map((item, i) => (
          <Col span={5} key={shortid.generate()}>
            <Entry fg={colors[i]}>
              {item.title}
              <Desc>{item.title}</Desc>
            </Entry>
          </Col>
        ))}
      </Row>
    </div>
  )
}

const CheatSheetBody = () => {
  /*
  <CategoryWrapper>
    {colors.map(color => (
       <Category key={shortid.generate()} bg={color}>
         hello
       </Category>
     ))}
  </CategoryWrapper>
 */

  return (
    <Row>
      <Col span={1} />
      <Col span={22}>
        <div>
          <Langs base="green" />
          <Divider />
          <Langs base="yellow" />
          <Divider />
          <Langs base="orange" />
          <Divider />
          <Langs base="red" />
          <Divider />
          <Langs base="pink" />
          <Divider />
          <Langs base="blue" />
          <Divider />
          <Langs base="purple" />
        </div>
      </Col>
      <Col span={1} />
    </Row>
  )
}

const CommonComunity = ({ curRoute }) => {
  const { subQuery } = curRoute

  switch (subQuery) {
    case 'posts': {
      return <PostsViewer />
    }
    case 'news': {
      return <div>news</div>
    }
    case 'tuts': {
      return <TutsViewer />
    }
    case 'map': {
      return <MapViewer />
    }
    case 'meetups': {
      return <div>meetups</div>
    }
    case 'users': {
      return <div>users</div>
    }
    case 'videos': {
      return <div>videos</div>
    }
    case 'jobs': {
      return <JobsViewer />
    }
    case 'cheatsheet': {
      return <CheatSheetViewer />
    }
    default: {
      return <div>posts</div>
    }
  }
}

const renderContent = curRoute => {
  const { mainQuery } = curRoute

  // <CheatSheetBody />
  switch (mainQuery) {
    case 'cheatsheet': {
      return <CheatSheetBody />
    }
    default: {
      return <CommonComunity curRoute={curRoute} />
    }
  }
}

class ContentContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.content)
  }

  render() {
    const { curRoute } = this.props.content
    debug('curRoute: ', curRoute)
    return <Wrapper>{renderContent(curRoute)}</Wrapper>
  }
}

export default inject(storeSelector('content'))(observer(ContentContainer))
