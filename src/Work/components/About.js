import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        // console.log('Parent Constructor');
    }

    componentDidMount() {
        // console.log('Parent ComponentDidMount')
    }
    incrementCounter = (event) => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        });
    }

    render() {
        // console.log('Parent Render');
        const { count } = this.state;
        return (
            <>
                {/* <Header /> */}
                <div className='body'>
                    <h1>About</h1>
                    <User />
                    <UserClass name={"Hari"} location={'India'} gitLink={'harigovindhg'} />
                    <UserClass name={"Mark"} location={'US'} gitLink={'akshaymarch7'} />
                    <UserClass name={"Robert"} location={'UK'} gitLink={'harigovindhg'} />
                    <p>{`Count: ${count}`}</p>
                    <button onClick={(event) => this.incrementCounter(event)}>Click Me</button>
                </div>
            </>
        )
    }
}

export default About;