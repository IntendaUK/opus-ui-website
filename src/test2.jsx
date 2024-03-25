import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Opus, { registerExternalAction } from '@intenda/opus-ui';

import '@intenda/opus-ui-components';

const root = createRoot(document.getElementById('root'));

const generateEntry = ({ value }) => {
	return {
		scope: 'entry',
		type: 'containerSimple',
		prps: { dir: 'horizontal' },
		wgts: [{
			type: 'label',
			prps: { cpt: value }
		},
		{
			type: 'button',
			prps: {
				cpt: 'Delete',
				fireScript: {
					actions: [{
						type: 'resolveScopedId',
						scopedId: 'entry',
						storeAsVariable: 'idToRecolor'
					},
					{
						type: 'setState',
						target: '||todo||',
						key: 'deleteKeys',
						value: [{
							key: 'extraWgts',
							value: { id: '||entry||' }
						}]
					}]
				}
			}
		}]
	};
};

registerExternalAction({
	type: 'generateEntry',
	handler: generateEntry
});

registerExternal

root.render(
	<Opus startupMda={{
		scope: 'todo',
		type: 'container',
		wgts: [{
			type: 'containerSimple',
			prps: { dir: 'horizontal' },
			wgts: [{
				relId: 'input',
				type: 'input',
				prps: {
					placeholder: 'Enter your task'
				}
			}, {
				type: 'button',
				prps: {
					cpt: 'Add',
					fireScript: {
						actions: [{
							type: 'generateEntry',
							value: '((state.||todo.input||.value))',
							storeAsVariable: 'newEntry'
						},
						{
							type: 'setState',
							target: '||todo||',
							key: 'extraWgts',
							value: '{{variable.newEntry}}'
						}]
					}
				}
			}]
		}]
	}} />
);
