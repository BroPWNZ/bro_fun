import React from 'react';
import { View, Panel, Div } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import connect from '@vkontakte/vkui-connect-promise';

import Home from './panels/Home'
import Info from './panels/Info'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
			activePanel: "home"
			fetchedUser: null
			}
    }
	
	componentDidMount () {
	connect.send("VKWebAppGetUserInfo", {}).then(e => this.setState({fetchedUser: e.data}))
	}
		
	go = e => {
		this.setState({activePanel: e.currentTarget.dataset.to})
	}
	
    render() {
        return (
            <View>
		<Panel>
			<Div>
			Ты пидор
			</Div>
		</Panel>
	    </View>
        )
    }
}
export default App;
