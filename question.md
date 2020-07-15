I found this recursive loop on stack overflow. It does the job as intended but the problem is it's blocking the thread. All my DOM buttons stop functioning while it runs.

Can this be rewritten so that DOM events can continue to function?

And what specifically in this is doing the blocking? My understanding was that setTimeout simply put the callback on the Call Stack. So that after the delayAmount has expired in the future, the callback is called? And that this allows for the DOM to continue running unblocked.

I also don't believe wrapper is blocking the thread since all it does is call setTimeout each time.

Whether it's a for loop or recursion, my goal is to iterate with a timeout without blocking the thread, thanks for your ideas.

```
  let count = 0;
  function wrapper(delayAmount) {
    setTimeout(() => {
      if (count <= 100) {
        count++;
        //do stuff
        wrapper(delayAmount);
      } else {
        count = 0;
        //reset
      }
    }, delayAmount);
  }
```
