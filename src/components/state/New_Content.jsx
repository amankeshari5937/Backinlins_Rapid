import React from "react";

function New_Content({ data }) {
  // Function to add blue color to anchor tags
  const createMarkup = (htmlContent) => {
    const styledContent = htmlContent.replace(
      /<a/g,
      '<a style="color: #0000FF"'
    );
    return { __html: styledContent };
  };

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={createMarkup(data?.content_7 || "")} // Apply createMarkup
      className="prose max-w-none shadow-3d snowbird-content flex-1 overflow-y-auto"
    />
  );
}

export default New_Content;