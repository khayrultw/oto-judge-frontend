import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Raw HTML in the markdown is not rendered (react-markdown default), so this is safe for user-provided docs.
const components = {
  h1: (props) => <h1 className="text-2xl font-bold mt-4 mb-3 text-gray-900 dark:text-white" {...props} />,
  h2: (props) => <h2 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white" {...props} />,
  h3: (props) => <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-900 dark:text-white" {...props} />,
  h4: (props) => <h4 className="font-semibold mt-3 mb-1 text-gray-900 dark:text-white" {...props} />,
  p: (props) => <p className="my-2 text-gray-800 dark:text-gray-200" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 my-2 text-gray-800 dark:text-gray-200" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 my-2 text-gray-800 dark:text-gray-200" {...props} />,
  a: (props) => (
    <a className="text-blue-600 dark:text-blue-400 underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-3 my-2 text-gray-600 dark:text-gray-400" {...props} />
  ),
  hr: () => <hr className="my-4 border-gray-300 dark:border-gray-600" />,
  pre: (props) => (
    <pre className="my-2 p-3 rounded bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-auto text-sm" {...props} />
  ),
  code: ({ node, className, children, ...props }) => (
    <code className={`${className || ''} font-mono bg-gray-100 dark:bg-gray-900 rounded px-1 text-gray-900 dark:text-gray-100`} {...props}>
      {children}
    </code>
  ),
  table: (props) => (
    <div className="overflow-x-auto my-3">
      <table className="min-w-full border border-gray-300 dark:border-gray-600" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border border-gray-300 dark:border-gray-600 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-left text-gray-900 dark:text-white" {...props} />
  ),
  td: (props) => (
    <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-800 dark:text-gray-200" {...props} />
  ),
  img: (props) => <img className="max-w-full h-auto my-2" alt="" {...props} />,
};

const MarkdownViewer = ({ content }) => {
  if (!content) return null;
  return (
    <div className="break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
