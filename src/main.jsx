//Opus
import { loadApp, registerExternalAction } from 'opus-ui';

//Component Libraries
import 'opus-ui-components';
import 'opus-ui-code-editor';

//Script Actions
import convertMarkdownToComponents from './scriptActions/convertMarkdownToComponents';
import getDocSectionInView from './scriptActions/getDocSectionInView';
import routeFromUrl from './scriptActions/routeFromUrl';
import route from './scriptActions/route';

//Helpers
import handleBrowserBackForward from './helpers/handleBrowserBackForward';

//Styles
import './main.css';

//Internal
const externalActions = {
	convertMarkdownToComponents,
	getDocSectionInView,
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
		config: {
			env: 'development'
		}
	});
})();
