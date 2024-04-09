```mainHeading
# Overriding element attributes
```markdown
When rendering SVG elements you can choose to temporarily or permanently override various attributes on paths that are being rendered. You will find an example of how to do that below. Take notice of the three clickable containers that perform various actions on the generated SVG elements.
```divider
5px
```gap
.
```codeReact
//System
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import { Svg } from './components/svg';

//PropSpecs
import propsSvg from './components/svg/props';

//Opus Lib
import Opus, { registerComponentTypes } from '@intenda/opus-ui';
import '@intenda/opus-ui-svg';

const root = ReactDOM.createRoot(document.getElementById('root'));

registerComponentTypes([{
	type: 'label',
	component: ({ state: { cpt } }) => {
		return <span>{cpt}</span>;
	},
	propSpec: { cpt: { type: 'string' } }
}]);

root.render(
	<Opus
		options={{ env: 'development' }}
		registerComponentTypes={[{
			type: 'svg',
			component: Svg,
			propSpec: propsSvg
		}]}
		startupMda={{
			type: 'containerSimple',
			prps: {
				singlePage: true,
				padding: true,
				dir: 'horizontal',
				gap: 100
			},
			wgts: [{
				type: 'containerSimple',
				prps: { gap: 20 },
				wgts: [{
					type: 'container',
					prps: {
						canClick: true,
						fireScript: {
							actions: [{
								type: 'setState',
								target: 'svg',
								key: 'elementAttributeOverrides',
								value: [{
									id: 'l1',
									attributes: { stroke: 'red' }
								}]
							}]
						}
					},
					wgts: [{
						type: 'label',
						prps: { cpt: 'Permanently set stroke to red' }
					}]
				}, {
					type: 'container',
					prps: {
						canClick: true,
						fireScript: {
							actions: [{
								type: 'setState',
								target: 'svg',
								key: 'tSetElementAttributes',
								value: [{
									id: 'l1',
									attributes: { stroke: 'red' }
								}]
							}]
						}
					},
					wgts: [{
						type: 'label',
						prps: { cpt: 'Temporarily set stroke to red' }
					}]
				}, {
					type: 'container',
					prps: {
						canClick: true,
						fireScript: {
							actions: [{
								type: 'setMultiState',
								target: 'svg',
								value: {
									tRemoveElements: ['l1'],
									tAddElements: [{
										type: 'bezierCurve',
										id: 'l1',
										fromComponent: {
											id: 'n1',
											anchorAxis: 'horizontal'
										},
										toComponent: {
											id: 'n2',
											anchorAxis: 'horizontal'
										}
									}]
								}
							}]
						}
					},
					wgts: [{
						type: 'label',
						prps: { cpt: 'Reset link' }
					}]
				}]
			}, {
				type: 'containerSimple',
				prps: { flex: true },
				wgts: [{
					type: 'container',
					prps: {
						flex: true,
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						scps: [
							{
								id: 's',
								actions: [
									{
										type: 'setVariable',
										name: 'nodes',
										value: [
											{
												id: 'n1',
												x: 0,
												y: 0,
												w: 100,
												h: 100
											},
											{
												id: 'n2',
												x: 200,
												y: 0,
												w: 100,
												h: 100
											}
										]
									},
									{
										type: 'setVariable',
										name: 'links',
										value: [
											{
												id: 'l1',
												source: 'n1',
												target: 'n2'
											}
										]
									},
									{
										id: 'sM',
										type: 'mapArray',
										value: '{{variable.nodes}}',
										mapTo: {
											id: '((variable.record.id))',
											type: 'containerSimple',
											prps: {
												backgroundColor: 'lightGrey',
												padding: true,
												position: 'absolute',
												left: '{{sM.variable.record.x}}',
												top: '{{sM.variable.record.y}}',
												width: '{{sM.variable.record.w}}',
												height: '{{sM.variable.record.h}}'
											},
											wgts: [
												{
													type: 'label',
													prps: { cpt: '{{sM.variable.record.id}}' }
												}
											]
										},
										storeAsVariable: 'extraWgts'
									},
									{
										id: 'sM',
										type: 'mapArray',
										value: '{{variable.links}}',
										mapTo: {
											type: 'bezierCurve',
											id: '((variable.record.id))',
											fromComponent: {
												id: '((sM.variable.record.source))',
												anchorAxis: 'horizontal'
											},
											toComponent: {
												id: '((sM.variable.record.target))',
												anchorAxis: 'horizontal'
											}
										},
										storeAsVariable: 'svgLinks'
									},
									{
										type: 'pushVariable',
										name: 'extraWgts',
										value: {
											id: 'svg',
											type: 'svg',
											prps: {
												position: 'absolute',
												left: 0,
												top: 0,
												width: '100%',
												height: '100%',
												pointerEvents: 'none',
												scps: [
													{
														triggers: [
															{
																event: 'onAllMounted',
																sourceList: '{{s.eval.{{s.variable.nodes}}.map(m => m.id)}}'
															}
														],
														actions: [
															{
																type: 'setState',
																key: 'tAddElements',
																value: '{{s.variable.svgLinks}}'
															}
														]
													}
												]
											}
										}
									},
									{
										type: 'setState',
										key: 'extraWgts',
										value: '{{variable.extraWgts}}'
									}
								]
							}
						]
					}
				}]
			}]
		}}
	/>
);