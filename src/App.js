import React from 'react'

export default class App extends React.Component {

    clickHandler = () => {
        console.log('click');
        return "click";
    }

    render() {
        return (
            <div>
                <h1 onClick={ this.clickHandler }>Hello React</h1>
            </div>
        )
    }
}