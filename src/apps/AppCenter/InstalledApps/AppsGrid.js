import React from 'react'
import PropTypes from 'prop-types'
import { breakpoint, font } from '@aragon/ui'
import { RepoType } from '../../../prop-types'
import AppCardContent from './AppCardContent'

const AppsGrid = React.memo(({ repos, card, onOpenApp }) => (
  <div>
    <h1
      css={`
        margin: 0 0 20px;
        ${font({ weight: 'bold' })};
      `}
    >
      Installed apps
    </h1>
    <div
      css={`
        display: grid;
        grid-template-columns: repeat(auto-fill, 230px);
        grid-gap: 35px 45px;
        justify-items: center;
        width: 100%;
        justify-content: space-evenly;

        ${breakpoint(
          'medium',
          `
            justify-content: start;
          `
        )};
      `}
    >
      {repos.map(repo =>
        card(repo.appId, <AppCardContent repo={repo} onOpen={onOpenApp} />)
      )}
    </div>
  </div>
))

AppsGrid.propTypes = {
  repos: PropTypes.arrayOf(RepoType).isRequired,
  card: PropTypes.func.isRequired,
  onOpenApp: PropTypes.func.isRequired,
}

export default AppsGrid
