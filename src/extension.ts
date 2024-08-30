import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('create-flutter-repository.createRepository', async (uri: vscode.Uri) => {
		const repoName = await vscode.window.showInputBox({
			prompt: 'Enter the repository name',
			placeHolder: 'e.g., user'
		});

		if (repoName) {
			try {
				const folderPath = uri.fsPath;
				const repositoryFolderPath = path.join(folderPath, 'repository');
				if (!fs.existsSync(repositoryFolderPath)) {
					fs.mkdirSync(repositoryFolderPath);
				}

				const repoFileName = `${repoName}_repository.dart`;
				const repoImplFileName = `${repoName}_repository_impl.dart`;

				const repoFilePath = path.join(repositoryFolderPath, repoFileName);
				const repoImplFilePath = path.join(repositoryFolderPath, repoImplFileName);

				const repoFileContent = `abstract class ${capitalize(repoName)}Repository {}\n`;
				fs.writeFileSync(repoFilePath, repoFileContent);

				const repoImplFileContent = `import './${repoFileName}';\n\n` +
					`class ${capitalize(repoName)}RepositoryImpl implements ${capitalize(repoName)}Repository {}\n`;
				fs.writeFileSync(repoImplFilePath, repoImplFileContent);

				vscode.window.showInformationMessage(`Repository ${repoName} created successfully!`);
			} catch (error) {
				if (error instanceof Error) {
					vscode.window.showErrorMessage(`Error creating repository: ${error.message}`);
				} else {
					vscode.window.showErrorMessage('An unknown error occurred');
				}
			}
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }

function capitalize(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1);
}