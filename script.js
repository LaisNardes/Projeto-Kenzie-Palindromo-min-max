function isPalindrome(str) {
  const padraoLetras = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const comprimento = padraoLetras.length;

  for (let i = 0; i < comprimento / 2; i++) {
    if (padraoLetras[i] !== padraoLetras[comprimento - 1 - i]) {
      return false;
    }
  }

  return true;
}

function arrayMaxMin(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}
