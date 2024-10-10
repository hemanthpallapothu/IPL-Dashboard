import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <div className="team-card-container">
        <img alt={name} className="team-logo" src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
