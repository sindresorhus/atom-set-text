/** @babel */
import path from 'path';
import {Point} from 'atom';
import setText from '..';

describe('atom-set-text', () => {
	let editor;

	beforeEach(() => {
		atom.workspace.destroyActivePaneItem();
		waitsForPromise(() =>
			atom.workspace.open(path.join(__dirname, 'fixture', 'example.js')).then(() => {
				editor = atom.workspace.getActiveTextEditor();
			})
		);
	});

	it('updates the editor text', () => {
		expect(editor.getText()).toBe('const a = 1;\n');
		setText('const a = 2;\n');
		expect(editor.getText()).toBe('const a = 2;\n');
	});

	it('preserves cursor position', () => {
		const position = Point.fromObject([0, 2]);
		editor.setCursorBufferPosition(position);
		expect(editor.getCursorBufferPosition()).toEqual(position);
		setText('const a = 2;\n');
		expect(editor.getCursorBufferPosition()).toEqual(position);
	});

	it('scrolls to the same position after setting text', () => {
		editor.scrollToScreenPosition([50, 0]);

		const editorEl = atom.views.getView(editor);
		const row = editorEl.getFirstVisibleScreenRow();

		setText(editor.getText().replace(/b/, 'c'));
		expect(editorEl.getFirstVisibleScreenRow()).toBe(row);
	});
});
