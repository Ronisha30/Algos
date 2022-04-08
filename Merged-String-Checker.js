// Needed to check to see if given my singel string can be fromed into two new strings
// I will need to use the slice method extract specific parts of my string 
// Return string
function isMerge(s, part1, part2) {
    return !s ? !part1 || part2 :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
    
   }