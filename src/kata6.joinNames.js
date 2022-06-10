const joinNames = namesObj => {
    const arrayNames = namesObj.map((element) => element.name);
    return arrayNames.join(", ").replace(/, ([^,]*)$/, ' & $1');
};

module.exports = joinNames;
