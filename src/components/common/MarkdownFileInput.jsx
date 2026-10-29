import React, { useState } from 'react';

export const MAX_MARKDOWN_BYTES = 1024 * 1024;

const isMarkdownFile = (file) => /\.(md|markdown)$/i.test(file.name);

// Reads a .md file into text and reports it via onChange; an empty string means "no document".
const MarkdownFileInput = ({ value, onChange, disabled }) => {
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    if (!isMarkdownFile(file)) {
      setError('Please select a .md file.');
    } else if (file.size > MAX_MARKDOWN_BYTES) {
      setError('File is too large (max 1 MB).');
    } else {
      try {
        onChange(await file.text());
        setFileName(file.name);
      } catch {
        setError('Failed to read the file.');
      }
    }
    e.target.value = '';
  };

  const handleRemove = () => {
    setError('');
    setFileName('');
    onChange('');
  };

  return (
    <div>
      <input
        type="file"
        accept=".md,.markdown,text/markdown"
        onChange={handleFile}
        disabled={disabled}
        className="block w-full text-sm text-gray-900 dark:text-white"
      />
      {value && (
        <div className="mt-2 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
          <span>{fileName ? `Selected: ${fileName}` : 'A document is attached.'}</span>
          <button
            type="button"
            className="text-red-600 dark:text-red-400 hover:underline"
            onClick={handleRemove}
            disabled={disabled}
          >
            Remove
          </button>
        </div>
      )}
      {error && <div className="mt-1 text-red-500 dark:text-red-400 text-sm">{error}</div>}
    </div>
  );
};

export default MarkdownFileInput;
