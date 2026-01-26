/**
 * Toggle code snippet visibility
 * @param {string} snippetId - The ID of the code snippet element
 */
function toggleCode(snippetId) {
  const codeSnippet = document.getElementById(snippetId);
  if (codeSnippet) {
    codeSnippet.classList.toggle('active');
  }
}
