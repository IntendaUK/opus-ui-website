/*
	This suite is responsible for loading markdown and converting it to
	opus components to be rendered as extraWgts
*/

import { registerSuite } from '@intenda/opus-ui';

const loadJson = async ({ setState }, { args: { path, set } }) => {
	const markdown = await fetch(`./../../app/markdown/${path}.json`);

	const res = JSON.parse(await markdown.text());

	setState({ [set.key]: res });
};

registerSuite({
	suite: 'markdown',
	methods: {
		loadAndSetJson: {
			handler: loadJson,
			isAsync: true
		}
	}
});
