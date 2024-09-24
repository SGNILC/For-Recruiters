'return a new list with the strings filtered out'
def filter_list(l):
    newList = [] #a new list to store only int-type values
    
    for item in l: #loop through the list
        if (type(item) is int): #if the an item in the list is an int-type value...
            newList.append(item) #add it to newList
    
    #return the new list with only int-type values        
    return newList

# Test
list = [1,2,'3','4',5,'six','seven',8,'9','10']
print(filter_list(list)) # Prints: [1, 2, 5, 8]