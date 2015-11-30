# for i = 1 to n-1
#  j = i
#    while j > 0 and A[j] < A[j-1]
#      swap A[j] with A[j-1]
#      j = j-1

import random
import copy

def sort(seq):
    temp = 1
    # BEGIN (write your solution here)
    for x in range(1, len(seq)):
      b = x
      while b > 0 and seq[b] < seq[b-1]:
        temp = seq[b]
        seq[b] = seq[b-1]
        seq[b-1] = temp
        b = b - 1
    # END

    return seq


# Generate random sequence
sorted_seq = [x for x in range(10) if random.choice([True, False])]

unsorted_seq = copy.copy(sorted_seq)
random.shuffle(unsorted_seq)

assert sorted_seq == sort(unsorted_seq)
