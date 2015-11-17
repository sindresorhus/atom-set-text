'use strict';
module.exports = function (atom, editor, text) {
	const editorEl = atom.views.getView(editor);
	const cursorPosition = editor.getCursorBufferPosition();
	const line = editorEl.getFirstVisibleScreenRow() + editor.displayBuffer.getVerticalScrollMargin();

	editor.setText(text);
	editor.setCursorBufferPosition(cursorPosition);

	if (editor.getScreenLineCount() > line) {
		editor.scrollToScreenPosition([line, 0]);
	}
};
