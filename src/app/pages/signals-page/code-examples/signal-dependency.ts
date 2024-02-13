export const signalDependency = `const showCount = signal(false);
const count = signal(0);
const conditionalCount = computed(() => {
  if (showCount()) {
    return \`The count is \${count()}.\`;
  } else {
    return 'Nothing to see here!';
  }
});`
