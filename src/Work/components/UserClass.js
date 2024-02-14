import { Component } from 'react';
class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {}
        }
        console.log(`${this.props.name} Child Constructor`)
    }
    async componentDidMount() {
        const { gitLink } = this.props;
        console.log(`${this.props.name} Child ComponentDidMount`)
        const gitData = await fetch(`https://api.github.com/users/${gitLink}`);
        const data = await gitData.json();
        this.timerInterval = setInterval(() => {
            console.log('setInterval eventListener Called');
        }, 1000);
        if (data) {
            this.setState({
                userInfo: data
            })
        }
    }

    componentDidUpdate() {
        console.log(`${this.props.name} Child ComponentDidUpdate`)
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
        console.log('componentWillUnmount called')
    }
    render() {
        console.log(`${this.props.name} Child Render`)
        const { name, location, bio, avatar_url } = this.state.userInfo;
        return (
            <div className="rest-card">
                <div className="card-content" style={{ backgroundImage: `url(${avatar_url})` }}>
                    <div className="rest-details">
                        <div className="rest-name">
                            <h2>{name}</h2>
                        </div>
                        <div className="rest-subdetails">
                            <div>
                                <h3>{`📍${location}`}</h3>
                            </div>
                            <p>{`"${bio}"`}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserClass;