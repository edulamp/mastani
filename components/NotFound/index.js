/*
 *
 * NotFound
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils/functions'

import { Icon404, Wrapper, Icon, Text, Title, Desc } from './styles'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:NotFound:index')
/* eslint-enable no-unused-vars */

const NotFound = ({ msg, desc }) => {
  return (
    <Wrapper>
      <Icon>
        <Icon404 path="/static/alarm.svg" />
      </Icon>
      <Text>
        <Title>{msg}</Title>
        <Desc>{desc}</Desc>
      </Text>
    </Wrapper>
  )
}

NotFound.propTypes = {
  // https://www.npmjs.com/package/prop-types
  msg: PropTypes.string,
  desc: PropTypes.string,
}

NotFound.defaultProps = {
  msg: '哦豁! 你所请求的资源并不存在',
  desc: '请检查你的请求参数',
}

export default NotFound
