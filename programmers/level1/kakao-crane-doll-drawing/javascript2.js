function solution(board, moves) {
    var answer = 0;
    // const boardLength = board.length;
    const bucket = [];

    moves.map(function (e) {
      for (let i = 0; i < board.length; i++) {
        //for문이 아니라 입력값으로 찾아야됨
        //   for (let j = 0; j < board.length; j++) {
        // console.log(board[i][e]);
        if (board[i][e - 1] !== 0) {
          bucket.push(board[i][e - 1]);
          board[i][e - 1] = 0;
          break;
        } else {
          continue;
        }
        //   }
      }
    });

    (function getAnswer() {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] == bucket[i - 1]) {
          answer += 2;
          bucket.splice(i - 1, 2);
          getAnswer(bucket)
        }
      }
    })();
      return answer
  }


solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])

/**

    0 0 0 0 0
    0 0 1 0 3
    0 2 5 0 1
    4 2 4 4 2
    3 5 1 3 1

*/