function solution(priorities, location) {
  let answer = 0;
  let printed = false;
  const locationValue = priorities[location];
  const mappingPriorities = priorities.map((value, index) => [value, index]);

  while (printed === false) {
    let shiftValue = mappingPriorities.shift();
    printed = true;

    // 가장 큰 수 인지를 확인
    for (let i = 0; i < mappingPriorities.length; i++) {
      if (shiftValue[0] < mappingPriorities[i][0]) {
        mappingPriorities.push(shiftValue);
        printed = false;
        break;
      }
    }

    // 찾고자 하는 수 인지를 확인
    if (printed === true) {
      answer++;
      // 가장 큰 수지만, 찾는 값이 아닌 경우, 같은 수 지만 index가 다른 경우
      if (shiftValue[0] === locationValue && shiftValue[1] === location) {
        break;
      } else {
        printed = false;
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
