/*
    Find number of rotations in a circularly sorted array
 
    Given a circularly sorted array of integers, find the number of times the array is rotated. Assume there are no duplicates in the array and the rotation is in anti-clockwise direction.


    

    For example,


    Input: arr = [8, 9, 10, 2, 5, 6]
    Output: The array is rotated 3 times
    
    
    Input: arr = [2, 5, 6, 8, 9, 10]
    Output: The array is rotated 0 times

    

    
    If we carefully analyze the problem, we can see that

    Number of rotations = Number of elements before minimum element of the array or index of the minimum element.

    
    A simple solution would be to run a linear search on the array and find the index of the minimum element. The problem with this approach is that its worst case time complexity is O(n). This solution also do not take advantage of the fact that the input is circularly sorted.

    We can easily solve this problem in O(log(n)) time by modifying binary search algorithm. We have already reduced the problem to finding out the first element of the sorted sequence. The first element (Pivot) has one special property (lets call it pivot property) – both next and previous element of the pivot element are greater than it. No other element in the array will have this property except the pivot element. Since the array is circularly sorted,

    If pivot is the last element, then the first element will be considered as its next element.
    
    If pivot is the first element, then the last element will be considered as its previous element.
    We know that the mid element always divides the array into two sub-arrays and pivot element can lie only in one of these halves. It is worth noticing that at-least one of these sub-arrays will always be sorted. If mid happens to be the point of rotation (minimum element), then both left and right sub-arrays will be sorted but but in any case one half (sub-array) must be sorted and we will make use of this property to discard left half or the right half at each iteration of the binary search.
*/
