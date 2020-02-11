/*
    Search an element in a circular sorted array
 
    Given a circular sorted array of integers, search an element in it. Assume there are no duplicates in the array and the rotation is in anti-clockwise direction.

    

    For example,

    Input:
    arr = [8, 9, 10, 2, 5, 6]
    target = 10
    
    Output: Element found at index 2
    
    
    Input:
    arr = [9, 10, 2, 5, 6, 8]
    target = 5
    
    Output: Element found at index 3

    A simple solution would be to run a linear search on the array and find the index of the given element. The problem with this approach is that its worst case time complexity is O(n). This solution also do not take advantage of the fact that the input is circularly sorted.

    We can easily solve this problem in O(log(n)) time by modifying binary search algorithm. We know that the mid element always divides the array into two sub-arrays and target element can lie only in one of these sub-arrays. It is worth noticing that at-least one of these sub-arrays will always be sorted. If mid happens to be the point of rotation (minimum element), then both left and right sub-arrays will be sorted but but in any case one half (sub-array) must be sorted. We will make use of this property to discard left half or the right half at each iteration of the binary search.
*/
