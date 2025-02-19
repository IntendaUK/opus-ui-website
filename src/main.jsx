//Opus
import { loadApp, registerExternalAction } from '@intenda/opus-ui';

//Component Libraries
import '@intenda/opus-ui-components';
import '@intenda/opus-ui-code-editor';

//Script Actions
import convertMarkdownToComponents from './scriptActions/convertMarkdownToComponents';
import getDocSectionInView from './scriptActions/getDocSectionInView';
import depthFirstSearch from './scriptActions/depthFirstSearch';
import routeFromUrl from './scriptActions/routeFromUrl';
import route from './scriptActions/route';

//Helpers
import handleBrowserBackForward from './helpers/handleBrowserBackForward';

//Suites
import './suites/markdown';
import './suites/blog';

//Styles
import './main.css';

//Internal
const externalActions = {
	convertMarkdownToComponents,
	getDocSectionInView,
	depthFirstSearch,
	routeFromUrl,
	route
};


//Setup
window.addEventListener('popstate', handleBrowserBackForward);

(async() => {
	const res = await fetch('/app.json')
	const mdaPackage = await res.json();

	Object.entries(externalActions).forEach(([k, v]) => {
		registerExternalAction({
			type: k,
			handler: v
		});
	});

	loadApp({
		mdaPackage,
		loadUrlParameters: true,
		config: {
			env: 'development'
		}
	});
})();
