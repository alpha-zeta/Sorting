import { sleep } from "./function";

// jshint esversion:6
function bubbleSort(arr) {
  const n = arr.length;
  const arrRet = [...arr];
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arrRet[j] > arrRet[j + 1]) {
        var temp = 0;
        temp = arrRet[j];
        arrRet[j] = arrRet[j + 1];
        arrRet[j + 1] = temp;
      }
    }
  }
  return arrRet;
}
async function bubbleSortRobust(arr, setArr, setComp) {
  var s1 = performance.now();
  const arr1 = bubbleSort(arr);
  var s2 = performance.now();
  let delay = 0;
  if (arr.length < 100) {
    delay = parseInt(2000 / arr.length);
  } else if (arr.length >= 100) {
    delay = 100 / arr.length;
  }
  var placeHolder = [...arr];
  const n = placeHolder.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      var tempArr = [j, false];
      if (placeHolder[j] > placeHolder[j + 1]) {
        var temp = 0;
        temp = placeHolder[j];
        placeHolder[j] = placeHolder[j + 1];
        placeHolder[j + 1] = temp;
        tempArr[1] = true;
      }
      await setComp([j, j + 1]);
      await sleep(delay);
      await setArr([...placeHolder]);
      await sleep(delay);
    }
  }
  await setComp([-1, -1]);
  return [placeHolder, s2 - s1];
}
function insertionSort(arr) {
  let i, key, j;
  const n = arr.length;
  const temp = [...arr];
  for (i = 1; i < n; i++) {
    key = temp[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      temp[j + 1] = temp[j];
      j = j - 1;
    }
    temp[j + 1] = key;
  }
  return temp;
}
async function insertionSortRobust(arr, setArr, setComp) {
  var s1 = performance.now();
  const arr1 = insertionSort(arr);
  var s2 = performance.now();
  let i, key, j;
  const n = arr.length;
  let delay = 0;
  if (arr.length < 100) {
    delay = parseInt(2000 / arr.length);
  } else if (arr.length >= 100) {
    delay = 100 / arr.length;
  }
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    await sleep(delay);
    await setComp([i, -1]);
    await setArr([...arr]);
    await sleep(delay);
  }
  await setComp([-1, -1]);
  return [arr, s2 - s1];
}
function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low + 1;
  let j = high;
  do {
    while (arr[i] <= pivot) {
      i = i + 1;
    }
    while (arr[j] > pivot) {
      j = j - 1;
    }
    if (i < j) {
      let temp = 0;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  } while (i < j);
  let temp = 0;
  temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}
function quick(arr, low, high) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);
    quick(arr, low, partitionIndex - 1);
    quick(arr, partitionIndex + 1, high);
  }
  return arr;
}
function quickSort(arr) {
  var start = performance.now();
  const a = quick(arr, 0, arr.length - 1);
  var end = performance.now();
  return [a, end - start];
}
export { bubbleSortRobust, insertionSortRobust, quickSort };
