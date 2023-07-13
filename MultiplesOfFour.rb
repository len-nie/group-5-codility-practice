def solution(a)

    multiples_of_four = a.select { |num| num % 4 == 0 }   #use select to filter out multiples of 4 in the numbers
    multiples_of_four.max   #return the maximum value in the array given
  
end
