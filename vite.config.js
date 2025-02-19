import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { promises as fs } from 'fs';
import path from 'path';

async function copyFolder (src, dest) {
	await fs.mkdir(dest, { recursive: true });
	const entries = await fs.readdir(src, { withFileTypes: true });
	for (const entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destPath = path.join(dest, entry.name);
		if (entry.isDirectory())
			await copyFolder(srcPath, destPath);
		else
			await fs.copyFile(srcPath, destPath);
	}
}

// Custom plugin to copy the /app folder into /dist/app after build
const copyAppFolderPlugin = () => {
	return {
		name: 'copy-app-folder',
		writeBundle: async () => {
			const src = path.resolve(__dirname, 'app');
			const dest = path.resolve(__dirname, 'dist', 'app');
			try {
				await copyFolder(src, dest);
				console.log('Copied /app to /dist/app');
			} catch (error) {
				console.error('Error copying /app folder:', error);
				throw error;
			}
		}
	};
};

export default defineConfig({
	plugins: [
		react(),
		copyAppFolderPlugin()
	]
});
