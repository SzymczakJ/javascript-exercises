var global_number_count = 0

export function sum(string) {
    if (!isNaN(parseInt(string))) {
      global_number_count += parseInt(string);
    }
    return global_number_count;
  }
  
export function digits(string) {
    var digit_sum = 0;
    for (var i = 0; i < string.length; i++) {
      if (!isNaN(string[i])) {
        digit_sum += parseInt(string[i]);
      }
    }
    return digit_sum
  }
  
export function letters(string) {
    var letter_sum = 0;
    for (var i = 0; i < string.length; i++) {
      if (isNaN(string[i])) {
        letter_sum += 1;
      }
    }
    return letter_sum;
  }