export const cleanUp= `effect((onCleanup) => {
  const user = currentUser();
  const timer = setTimeout(() => {
    console.log(\`1 second ago, the user became \${user}\`);
  }, 1000);
  onCleanup(() => {
    clearTimeout(timer);
  });
});`
