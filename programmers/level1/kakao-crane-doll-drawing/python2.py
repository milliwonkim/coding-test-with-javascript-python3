def solution(board, moves):
    answer = 0
    box = []
    for move in moves:
        found = 0
        for row in board:
            if (row[move - 1]):
                found = row[move - 1]
                row[move - 1] = 0
                break
        if (found):
            box.append (found)

    i = 0
    while (i < len(box) - 1):
        if (box[i] == box[i+1]):
            print (box[i:i+1])
            box.pop (i)
            box.pop (i)
            if (i >= 1):
                i -= 1
            answer += 2
            continue;
        i += 1
    return answer

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4])

'''

0 0 0 0 0
0 0 1 0 3
0 2 5 0 1
4 2 4 4 2
3 5 1 3 1

'''