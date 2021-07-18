# Scanifly

## Code Challenge

Open the `index.html` file and in the file input add the relevant text file

## Solution

The algorithm created here first builds a map of the Artist and indexes what User Artist List they appear in. This allows me to quickly reference each Artist of O(1) and compare them to each other User Artist List as O(Lists _ Artists). Once mapped and filtered for relevant Artist that appear in at least 50 User Artist List, then when we can do an O(n^2) comparison to get the pairs of Artist that appear together at least 50 times. This algorithm should be more efficient then the brute force method which would be O(n^4) and transforms it into O(Amount of user's list _ Amount of artist in list) + O(Amount of filtered artist ^2)
