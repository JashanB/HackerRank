// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example


// If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.


// Person  had to bribe  people to get to the current position. Print Too chaotic.

// Function Description

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the next  pairs of lines are as follows:
// - The first line contains an integer , the number of people in the queue
// - The second line has  space-separated integers describing the final state of the queue.

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let norm = []
  let bribeCount = 0;
  let position = 0;
  let j = 0;
  let chaotic = false;
  for (let i = 1; i <= q.length; i++) {
      norm.push(i);
  }
  for (let i = 0; i < q.length; i++) {
      //iterate through normal array, find value in q that corresponds
      position = 0;        
      j = i;
      if (norm[i] !== q[j]) {
          if ((q[j] - j) > 3) { chaotic = true };
          do {
              position += 1;
              j += 1;
          } while (norm[i] !== q[j] && j < q.length);
          if (norm[i] === q[j]) {
              bribeCount += position;
          }
      }
  }
  chaotic ? console.log("Too chaotic") : console.log(bribeCount);
}