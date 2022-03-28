function solution(progresses, speeds) {
  var answer = [];
  let completedProgressCnt = 0;

  if (progresses.length > 100 || speeds.length > 100) {
    return -1;
  }

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];

      if (progresses[0] >= 100) {
        completedProgressCnt++;
        progresses.splice(i, 1);
        speeds.splice(i, 1);
        i--;
      }
    }

    if (completedProgressCnt) {
      answer.push(completedProgressCnt);
      completedProgressCnt = 0;
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
