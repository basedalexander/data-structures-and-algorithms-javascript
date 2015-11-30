# for i = (n-1) to 1
#  for j = 0 to (i-1)
#    if A[j] > A[j-1]
#      swap A[j] with A[j-1]

import random
import copy

def sort(seq):
    # BEGIN
       L = len(seq)
       for _ in range(L):
           for n in range(1, L):
               if seq[n] < seq[n - 1]:
                   seq[n - 1], seq[n] = seq[n], seq[n - 1]
     # END

    return seq

# Generate random sequence
sorted_seq = [x for x in range(10) if random.choice([True, False])]

unsorted_seq = copy.copy(sorted_seq)
random.shuffle(unsorted_seq)

assert sorted_seq == sort(unsorted_seq)
