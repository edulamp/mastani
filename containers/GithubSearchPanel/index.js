/*
*
* GithubSearchPanel
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'
// import styled from 'styled-components'

import A from '../../components/A'
import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'
import * as logic from './logic'

import {
  PanelContainer,
  InfoBar,
  EditorBar,
  Wraper,
  InputBar,
  AlertBar,
  AddOn,
  AvatarImg,
  AvatarWrapper,
  ContentWraper,
  Title,
  SearchIcon,
  LoadingIcon,
  Desc,
  RepoLang,
  RepoStar,
  SubInfoWraper,
} from './styles'

const debug = makeDebugger('C:UniversePanel')

const SearchEditor = ({ value, searching }) => (
  <EditorBar>
    <AddOn>
      {searching ? (
        <LoadingIcon path={getSVGIconPath('search_loading')} />
      ) : (
        <SearchIcon path={getSVGIconPath('search')} />
      )}
    </AddOn>
    <InputBar
      spellCheck={false}
      autoCapitalize="off"
      autoCorrect="off"
      autoComplete="off"
      placeholder="Github repo search"
      value={value}
      onChange={logic.search}
    />
  </EditorBar>
)

class UniversePanelContainer extends React.Component {
  // TODO use componentWillMount?
  componentWillMount() {
    debug('mount')
    logic.init(this.props.github)
  }

  render() {
    const { github } = this.props
    const { reposData, inputValue, searching } = github

    // debug('repos: ', repos)
    // debug('searching: ', searching)
    // debug('logic.repoNotFound2(github): ', logic.repoNotFound2(github))

    return (
      <PanelContainer>
        <SearchEditor value={inputValue} searching={searching} />

        {logic.repoNotFound(github) && <AlertBar>Repo not found</AlertBar>}
        <Wraper>
          {reposData.map(repo => (
            <InfoBar key={repo.id}>
              <AvatarWrapper onClick={logic.watshData}>
                <AvatarImg src={repo.owner.avatar_url} alt="repo avatar" />
              </AvatarWrapper>
              <ContentWraper>
                <Title>
                  <A href={repo.owner.html_url}>
                    {repo.owner.login} / {repo.name}
                  </A>
                </Title>
                <Desc>{repo.description}</Desc>
                <SubInfoWraper>
                  <RepoLang>{repo.language}</RepoLang>
                  <RepoStar>★&nbsp;{repo.stargazers_count}</RepoStar>
                </SubInfoWraper>
              </ContentWraper>
            </InfoBar>
          ))}
        </Wraper>
      </PanelContainer>
    )
  }
}

export default inject(storeSelector('github'))(observer(UniversePanelContainer))
