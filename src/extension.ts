import * as vscode from 'vscode';
import { DashboardPanel } from './panels/DashboardPanel';

export function activate(context: vscode.ExtensionContext) {
  console.log('AI Development Assistant is now active');

  let disposable = vscode.commands.registerCommand('vscode-ai-assistant.showDashboard', () => {
    DashboardPanel.createOrShow(context.extensionUri);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}