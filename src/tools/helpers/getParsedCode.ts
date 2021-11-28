const colors = {
    reserved: '#408cff',
    function: '#e6d945',
    string:   '#b3a836',
    operator: '#f2f2f2',
    default:  '#9ecbff',
    modules:  '#8f57d9',
};

export const getParsedCode = (code: string) => {
    let parsedCode = code;

    parsedCode = parsedCode
        .replaceAll(/\+|-|\*|\/|=|;/g, (str) => `<span style="color: ${colors.operator};">${str}</span>`)
        .replaceAll(/function|let|const|var$/g, (str) => `<span style="color: ${colors.reserved};">${str}</span>`)
        .replaceAll(/import|export|return/g, (str) => `<span style="color: ${colors.modules}">${str}</span>`)
        .replaceAll(/'.*'/g, (str) => `<span style="color: ${colors.string}">${str}</span>`)
        .replaceAll(
            /.?\w*\s*\(/g,
            (str) => `${str[ 0 ] === '.' ? '.' : ''}<span style="color: ${colors.function}">${str.slice(str[ 0 ] === '.' ? 1 : 0, -1)}</span>${str.at(-1)}`,
        );

    parsedCode = parsedCode.split('\n').map((line) => `<p style="line-height: normal; color: ${colors.default}">${line || ' '}</p>`)
        .join('');

    return parsedCode;
};
