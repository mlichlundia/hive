export const untracked_1 = `effect(() => {
  console.log(\`User set to \`\${currentUser()}\` and the counter is \${untracked(counter)}\`);
});`

export const untracked_2 = `effect(() => {
  const user = currentUser();
  untracked(() => {
    // If the \`loggingService\` reads signals, they won't be counted as
    // dependencies of this effect.
    this.loggingService.log(\`User set to \${user}\`);
  });
});`
