import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  console.log(date)
  return (
    <div className="card-container">
      <div className="alinement-1">
        <div className="image-left-container">
          <p className="team-name">{competingTeam}</p>
          <p className="team-name">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
          src={competingTeamLogo}
        />
      </div>
      <hr />

      <div className="image-right-container">
        <h1 className="first-second-innings-text">First Innings</h1>
        <p className="first-team">{firstInnings}</p>
        <h1 className="first-second-innings-text">Second Innings</h1>
        <p className="first-team">{secondInnings}</p>
        <h1 className="man-of-the-match-text">Man Of The Match</h1>
        <p className="man-of-the-match">{manOfTheMatch}</p>
        <p className="umpires-text">Umpires</p>
        <p className="umpires">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
