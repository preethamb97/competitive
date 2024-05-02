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

  mergeSort(values) {
    if (values.length <= 1) {
      return values;
    }
    const mid = Math.floor(values.length/2);
    const left = this.mergeSort(values.slice(0, mid));
    const right = this.mergeSort(values.slice(mid)); 
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

  mergeSorter = () => {
    this.values = this.mergeSort(this.values);
  }
}

const arrayValues = [5, 2, 7, 12, 1, 233];
const sorter = new Sorting(arrayValues);

sorter.print();
sorter.mergeSorter();

sorter.print();
sorter.reset();
sorter.print();
