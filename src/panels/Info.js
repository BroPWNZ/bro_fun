import React from 'react';
import { Panel, PanelHeader, Group, Div, Button } from '@vkontakte/vkui';

import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline'


const Info = props => (
    <Panel id={props.id}>
			{props.fetchedUser &&
				<Group title="Результат из VK Connect">
					<ListItem
						before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
						description={props.fetchedUser.city && props.fetchedUser.city.title ? props.fetchedUser.city.title : ''}
						>
						{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
					</ListItem>
				</Group>}
    </Panel>
);
export default Info;