# to count even numbers

nums = [2,3,7,9,18,6,0,5]

def even_nums(numbers):
    counter = 0
    for n in numbers:
        if n % 2 == 0:
            counter += 1
    return counter

# short version

def count_even(numbers):
    return sum(i % 2 == 0 for i in numbers)

# max difference

def max_diff1(numbers):
    result = 0
    for x in numbers:
        for y in numbers:
            result = max(result, abs(x-y))
    return result

def max_diff2(numbers):
    numbers = sorted(numbers)
    return numbers[-1] - numbers[0]

def max_diff3(numbers):
    return max(numbers) - min(numbers)


print(max_diff3(nums))
            