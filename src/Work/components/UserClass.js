import { Component } from 'react';
class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {}
        }
        console.log(`${this.props.name} Child Constructor`);
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
            <div className="rest-card max-w-full min-w-[150px] flex-[0_1_16.66%] m-0 p-4">
                <div className='card-content p-0 bg-cover bg-no-repeat bg-transparent h-80 rounded-xl transition-all ease-in-out relative overflow-hidden before:absolute before:w-full before:h-full before:bg-glimmer before:top-0 before:left-0 before:content-[""] before:transition-all before:ease-in-out after:w-full after:h-full after:absolute after:top-28 after:left-0 after:bg-cardshadow after:content-[""]' style={{ backgroundImage: `url(${avatar_url})` }}>
                    <div className="rest-details py-0 px-3 pb-px text-[#f8eeee] absolute z-10 w-full bottom-0 left-0">
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