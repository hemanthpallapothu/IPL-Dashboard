import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  renderHomeComponent = () => {
    const {teamsList} = this.state
    return (
      <>
        <div className="logo-title-alinement">
          <img
            alt="ipl logo"
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>
        <div className="teams-list">
          {teamsList.map(eachItem => (
            <TeamCard key={eachItem.id} teamDetails={eachItem} />
          ))}
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    const background = isLoading ? 'home-bg' : 'home-bg-container'
    return (
      <div className={background}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderHomeComponent()
        )}
      </div>
    )
  }
}

export default Home
