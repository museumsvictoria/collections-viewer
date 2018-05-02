// Replace any newlines with break tags
export const convertNewlines = string =>
  string
    ? String(string).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, `$1<br />$2`)
    : null;

// Create markup based on terms and values.
// Will remove any elements containing null values.
// Will then create heading tag for term, will accept null values.
// Will then create paragraph tag for value unless noWrap is specified.
export const createMarkup = array =>
  array.filter(element => element.value).map(element => {
    return [
      element.term ? `<h3>${element.term}</h3>` : null,
      element.noWrap ? element.value : `<p>${element.value}</p>`,
    ]
      .filter(element => element)
      .join('');
  });

// Concatenate array of strings, accepts separator
export const joinStrings = (array, separator = ', ') => {
  if (!array.length) return null;

  return array.filter(element => element).join(separator);
};

export const createThumbnail = image => ({
  uri: image.medium.uri,
  alternativeText: image.alternativeText
    ? image.alternativeText
    : image.caption,
});
