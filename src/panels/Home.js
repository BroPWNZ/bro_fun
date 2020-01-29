import React from 'react';
import { Panel, PanelHeader, Group, Div, Button } from '@vkontakte/vkui';

import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline'


const Home = props => (
    <Panel id={props.id}>
			<PanelHeader>Ты приемный</PanelHeader>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<Group title="Меню">
					<Div>
						<Button level="secondary" size="xl" onClick={props.go} data-to="add" >
						Справебыдло
						</Button> 
					</Div>
				</Group>
    </Panel>
);
export default Home;