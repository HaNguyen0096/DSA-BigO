function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

//This function use to check a Prime number
//O(n) because it always run n time until it checked all the divider to see if n is a Prime number.