/*  Pseudocode
# Sort an array a[0...n-1].
gaps = [701, 301, 132, 57, 23, 10, 4, 1]

# Start with the largest gap and work down to a gap of 1
foreach (gap in gaps)
{
    # Do a gapped insertion sort for this gap size.
    # The first gap elements a[0..gap-1] are already in gapped order
    # keep adding one more element until the entire array is gap sorted
    for (i = gap; i < n; i += 1)
    {
        # add a[i] to the elements that have been gap sorted
        # save a[i] in temp and make a hole at position i
        temp = a[i]
        # shift earlier gap-sorted elements up until the correct location for a[i] is found
        for (j = i; j >= gap and a[j - gap] > temp; j -= gap)
        {
            a[j] = a[j - gap]
        }
        # put temp (the original a[i]) in its correct location
        a[j] = temp
    }
}
*/

var CArray = require('./CArray');
var array = new CArray(10000);
array.setGaps([701, 301, 132, 57, 23, 10, 4, 1]);
array.setData();
console.log('array created');

var start, stop, elapsed;

start = Date.now();
array.shellSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed ' + elapsed);
