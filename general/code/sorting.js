class Sorting {
  constructor(values) {
    this.initial = this.values = values;
  }
  reset() {
    if (this.initial?.length) {
      this.values = this.initial;
      console.log("Array values are resetted to initial");
    }
  }

  print() {
    console.log("Array values are : ", this.values.join("  "));
  }


  mergeSorter = () => {

    function mergeSort(values) {
      if (values.length <= 1) {
        return values;
      }
      const mid = Math.floor(values.length/2);
      const left = mergeSort(values.slice(0, mid));
      const right = mergeSort(values.slice(mid)); 
      return merge(left, right);

      function merge (left, right) {
        const result = [];
        let i = 0;
        let j = 0;

        while(i < left.length && j < right.length) {
          if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
          } else {
            result.push(right[j]);
            j++;
          }
        }

        while(i < left.length) {
          result.push(left[i]);
          i++;
        }

        while(j < right.length) {
          result.push(right[j]);
          j++;
        }

        console.log(`MERGE result of left ${left} and right ${right} is : `,result)

        return result;
      }
    }

    this.values = mergeSort(this.values);
  }

  xorSorting = () => {
    let result = [...this.values];
    // swapping numnbers
    let isSwapRequired = true;
    while(isSwapRequired) {
      isSwapRequired = false;
      for(let i = 1; i < result.length - 1; i++) {
        if (result[i - 1] > result[i]) {
          result[i - 1] ^= result[i];
          result[i] ^= result[i-1];
          result[i - 1] ^= result[i];
          isSwapRequired = true;
        }
      }
    }

    this.values = result;
  }

  selectionSorting = () => {
    let result = [...this.values];
    for(let i = 0; i < result.length - 1; i++) {
      let leftValue = result[i];
      let minIndex = i + 1;
      for (let j = i + 1; j < result.length; j++) {
        // console.log(`i: ${i}, j: ${j}, array Values are: ${result.join(' ')}, minIndex: ${minIndex}, minValue: ${result[minIndex]}`)
        if (result[j + 1] < result[minIndex]) {
          minIndex = j + 1;
        }
      }
      // console.log(`Swapping i: ${i} : ${result[i]}, minIndex: ${minIndex}: ${result[minIndex]}`);
      
      let rightValue = result[minIndex];
      if(rightValue < leftValue) {
       result[i] = rightValue;
       result[minIndex] = leftValue;
      }
    }
    this.values = result;
  }

  quickSorting = () => {
    function quickSort(result) {
      if (result.length <=1) {
        return result;
      }

      let pivot = result[0];
      let left = [];
      let right = [];
      for(let i = 1; i < result.length; i++) {
        if (result[i] <= pivot) {
          left.push(result[i]);
        } else {
          right.push(result[i]);
        }
      }
      return quickSort(left).concat(pivot, quickSort(right));
    }
    this.values = quickSort(this.values);
  }
}

const arrayValues = [5, 2, 7, 12, 1, 233];
const sorter = new Sorting(arrayValues);

sorter.print();
sorter.mergeSorter();

sorter.print();
sorter.reset();
sorter.print();
sorter.reset();
console.log("**********BUBBLE SORT XOR***************");
sorter.print();
sorter.xorSorting();
sorter.print();
sorter.reset();
console.log("**********SELECTION SORTING***************");
sorter.print();
sorter.selectionSorting();
sorter.print();
sorter.reset();
console.log("**********QUICKSORT***************");
sorter.print();
sorter.quickSorting();
sorter.print();
