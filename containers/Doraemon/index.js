/*
*
* Magic Doraemon
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'

import InputEditor from './InputEditor'
import NodeIcon from './NodeIcon'
import * as logic from './logic'

import {
  PageOverlay,
  PanelContainer,
  InfoBar,
  Wrapper,
  SuggestionWrapper,
  AlertBar,
  AvatarWrapper,
  ContentWraper,
  Title,
  Desc,
  Hint,
  HintEnter,
} from './styles'

const debug = makeDebugger('C:Doraemon')

const HintIcon = ({ index, active, cur, length }) => {
  if (active === cur) {
    return <HintEnter path={getSVGIconPath('enter')} />
  } else if (length <= 9) {
    return <Hint>^ {index}</Hint>
  }
  return <span />
}

class DoraemonContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    // TODO? maybe: this.logic = new Logic(this.props.doraemon)
    logic.init(this.props.doraemon)
  }
  // ref={infobar => (this[`infobar${suggestion.title}`] = infobar)}
  // ref={wraper => (this.wraper = wraper)}

  render() {
    const { doraemon } = this.props
    const { inputValue, suggestions, activeRaw, prefix, visible } = doraemon

    // debug('activeRaw: ', activeRaw)
    // debug('suggestion.raw: ', suggestions.toJSON())

    return (
      <div>
        <PageOverlay visible={visible} onClick={logic.hidePanel} />
        <PanelContainer visible={visible}>
          <InputEditor value={inputValue} searching={false} prefix={prefix} />
          {logic.repoNotFound(doraemon) && <AlertBar>Repo not found</AlertBar>}
          <Wrapper>
            <SuggestionWrapper empty={suggestions.length === 0}>
              {suggestions.map((suggestion, i) => (
                <InfoBar
                  active={activeRaw === suggestion.raw}
                  key={suggestion.raw}
                  id={suggestion.raw}
                  onMouseEnter={logic.navToSuggestion.bind(this, suggestion)}
                >
                  <AvatarWrapper>
                    <NodeIcon raw={suggestion.raw} />
                  </AvatarWrapper>
                  <ContentWraper>
                    <Title>{suggestion.title}</Title>
                    <Desc>{suggestion.desc}</Desc>
                  </ContentWraper>
                  <HintIcon
                    index={i}
                    active={activeRaw}
                    cur={suggestion.raw}
                    length={suggestions.length}
                  />
                </InfoBar>
              ))}
            </SuggestionWrapper>
          </Wrapper>
        </PanelContainer>
      </div>
    )
  }
}

export default inject(storeSelector('doraemon'))(observer(DoraemonContainer))
