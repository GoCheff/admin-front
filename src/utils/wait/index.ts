async function wait({ time = 1000 }: { time?: number }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

export { wait };
