function vaporcode(string) {
    return string.toUpperCase().replace(/\s/g, "").split("").join("  ")
}