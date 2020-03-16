import React from 'react';
import InputTitle from './inputTitle'

class ProgTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("Test1 :constructor ")
    }

    plusCount = () => {
        const count = this.state.count
        this.setState({
            count: count + 1
        })
    }
    render = () => {
        console.log('Test1 :render')
        return (
            <div>

                {
                    this.state.count > 5 ? <InputTitle /> : ("")
                }

                <button type="button" onClick={this.plusCount}>按鈕+1....5 會跳輸入框</button>
                <p>{this.state.count}</p>
            </div >
        )
    }
}
export default ProgTest; 