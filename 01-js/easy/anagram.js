/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  

  let newStr1=str1.toLowerCase().split('').sort().join('');
  let newStr2=str2.toLowerCase().split('').sort().join('');

  let n1=newStr1.length
  let n2=newStr2.length

  if (n1!=n2){
    return false;
  }

  for (let i=0;i<n1;i++){
    if (newStr1[i]!=newStr2[i]){
      return false;
    }
    
  }

  return true;

}


module.exports = isAnagram;
