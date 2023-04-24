piece' :: Int -> Int 
piece' x
    | x < -1    = (2 * x) + 1
    | x > 3     = (-3 * x) + 7
    | otherwise = -2


exp' :: Int -> Int -> Int
exp' x y
    | x == 0 = 0
    | x == 1 = x
    | y == 0 = 1
    | even y = (exp' x (div y 2)) * (exp' x (div y 2))
    | odd y = x * (exp' x ( y - 1))


square :: [Int] -> [Int]
square [] = error "Empty"
square list = map (^2) list

summation :: [Int] -> Int
summation [] = 0
summation (x:xs) = x + summation xs

comp' :: [Int] -> Int
comp' list = (summation . square)(list)

count :: (Int -> Bool) -> [Int] -> Int
count myArr [] = 0
count myArr (x:xs)
    | myArr x = 1 + count myArr xs 
    | otherwise = count myArr xs


count'filter :: (Int -> Bool) -> [Int] -> Int
count'filter fn xs = length(filter fn xs)


count'lc :: (Int -> Bool) -> [Int] -> Int
count'lc myArr xs = length[x | x <- xs, myArr x]


closure :: [Int] -> Int
closure = count'filter(>10)


powers' :: Int -> [Int]
powers' x = [x^i | i <- [1 ..]]

