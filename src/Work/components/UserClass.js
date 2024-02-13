import { Component } from 'react';
class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {}
        }
        // console.log(`${this.props.name} Child Constructor`)
    }
    async componentDidMount() {
        const { gitLink } = this.props;
        // console.log(`${this.props.name} Child ComponentDidMount`)
        const gitData = await fetch(`https://api.github.com/users/${gitLink}`);
        const data = await gitData.json();
        if (data) {
            this.setState({
                userInfo: data
            })
        }
    }
    render() {
        // console.log(`${this.props.name} Child Render`)
        const { name, location, bio } = this.state.userInfo;
        return (
            <div>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <p>{`"${bio}"`}</p>
            </div>
        )
    }
}

export default UserClass;