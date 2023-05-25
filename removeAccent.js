function removeAccent(str) {
    return str.normalize('NFD').replace(/\p{Mn}/gu, "")
}

module.exports = removeAccent;