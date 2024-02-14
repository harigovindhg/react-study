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
                    <div className="restaurant-data">
                        <div className="restaurant-primary-data">
                            <h1>About</h1>
                            <div className='rest-card-container'>
                                <UserClass name={"First"} gitLink={'harigovindhg'} />
                                {/* <UserClass name={"Second"} gitLink={'akshaymarch7'} /> */}
                            </div>
                            {/* <p>{`Count: ${count}`}</p>
                            <button onClick={(event) => this.incrementCounter(event)}>Click Me</button> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About;