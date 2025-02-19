/*
	This suite is responsible for loading markdown and converting it to
	opus components to be rendered as extraWgts
*/

//Sytem
import { registerSuite } from '@intenda/opus-ui';

//Helpers
import convertMarkdownToComponents from '../scriptActions/convertMarkdownToComponents';

//Internals
let blogs;

//Methods
const loadIndexFromSource = async () => {
	const markdown = await fetch('../../app/markdown/blogs/index.json');

	blogs = JSON.parse(await markdown.text());
};

const loadIndex = async ({ setState }, { args: { set } }) => {
	if (blogs === undefined)
		await loadIndexFromSource();

	setState({ [set.key]: [...blogs].reverse() });
};

const loadPostFromIndex = async ({ setState }, { args: { index } }) => {
	if (index === undefined)
		return;

	const iIndex = +index;

	if (blogs === undefined)
		await loadIndexFromSource();

	const markdown = await fetch(`../../app/markdown/blogs/posts/${iIndex}.md`);

	const selectedBlogExpanded = await markdown.text();
	const previousBlog = blogs.find(f => f.id === iIndex - 1) ?? {
		title: 'Blog',
		goto: 'blog'
	};
	const nextBlog = blogs.find(f => f.id === iIndex + 1) ?? {
		title: '',
		goto: null
	};

	const converted = convertMarkdownToComponents({ value: selectedBlogExpanded });
	const componentsBody = converted.components.map(({ type, value }) => {
		return {
			trait: `shared/markdownComponents/${type}`,
			traitPrps: { value }
		};
	});

	setState({
		previousBlog,
		nextBlog,
		selectedIndex: iIndex,
		componentsBody,
		tReloadFromUrl: false
	});
};

//Registration
registerSuite({
	suite: 'blog',
	methods: {
		loadIndex: {
			handler: loadIndex,
			isAsync: true
		},
		loadPostFromIndex: {
			handler: loadPostFromIndex,
			isAsync: true
		}
	}
});
