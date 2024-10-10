import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = recentMatch
  const winLoseCss =
    matchStatus === 'Won' ? 'match-card-won' : 'match-card-lose'
  return (
    <li className="recent-match-card-container">
      <img
        alt={`competing team ${competingTeam}`}
        className="match-card-team-logo"
        src={competingTeamLogo}
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={winLoseCss}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
