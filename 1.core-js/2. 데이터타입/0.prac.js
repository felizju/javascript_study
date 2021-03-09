var k = 2,
    j;
while (1) {
    j = 2;
    while (k % j != 0)
        j++;
    if (k == j)
        console.log(k);
    if (k < 7) {
        k++;
    } else {
        break;
    }
}