/**
 * Recursive Function
 */

function recursiveFunc(n, sourcePole, destinationPole, auxiliaryPole) {
    if(0 == n)
    return;

    recursiveFunc(n - 1, sourcePole, auxiliaryPole, destinationPole);

    console.log("Move the disk " + n + " from " + sourcePole + n + " to " + destinationPole);

    recursiveFunc(n - 1, auxiliaryPole, destinationPole, sourcePole);
}


recursiveFunc(3, 'S', 'D', 'A');