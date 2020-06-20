const delayer = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// export { delayer };
export default delayer;