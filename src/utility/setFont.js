const setFont = (fontSize = "20", fontWeight = "400", lineHeight = null) => {
  const style = `
        font-size: ${fontSize}; 
        font-weight: ${fontWeight}; 
        ${lineHeight && `line-height: ${lineHeight}`}
    `;

  return style;
};

export default setFont;
