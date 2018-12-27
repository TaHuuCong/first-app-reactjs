import React, {Component} from 'react';

class Clock extends Component {
    clicked = false;

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            date: new Date(),
            title: 'Time'
        };
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle() {
        this.clicked = !this.clicked;
        this.setState({
            title: this.clicked ? 'Clock' : 'Time'
        })
    }

    render() {
        console.log('render');
        return (
            <div className="clock">
                <h2>{this.state.title}: {this.state.date.toLocaleTimeString()}.</h2>
                <button type="button" className="btn btn-success" onClick={this.changeTitle}>
                    Change Title
                </button>
            </div>
        );
    }

    // before render
    componentWillMount() {
        console.log('componentWillMount');
    }

    // after rendered
    componentDidMount() {
        console.log('componentDidMount');
        // thực hiện hàm tick() 1s/1 lần --> UI update 1s/ 1 lần
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    // cập nhật trạng thái component
    tick() {
        this.setState({date: new Date()});
    }
}

export default Clock;