/*
*
* ApiLayout
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils/functions'
import Wrapper from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:ApiLayout')

class ApiLayoutContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.apiLayout)
  }

  render() {
    return <Wrapper>{this.props.children}</Wrapper>
  }
}

ApiLayoutContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

ApiLayoutContainer.defaultProps = {
  children: <div />,
}

export default inject(storeSelector('apiLayout'))(observer(ApiLayoutContainer))
