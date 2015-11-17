'use strict';
module.exports = function (text, editor) {
	editor = editor || atom.workspace.getActiveTextEditor();

	if (!editor) {
		return;
	}

	const editorEl = atom.views.getView(editor);
	const cursorPosition = editor.getCursorBufferPosition();
	const line = editorEl.getFirstVisibleScreenRow() + editor.displayBuffer.getVerticalScrollMargin();

	editor.setText(text);
	editor.setCursorBufferPosition(cursorPosition);

	if (editor.getScreenLineCount() > line) {
		editor.scrollToScreenPosition([line, 0]);
	}
};
