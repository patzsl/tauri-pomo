export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  let remainingSeconds: any = seconds % 60;
  if (remainingSeconds < 10) remainingSeconds = "0" + remainingSeconds;
  return `${minutes}:${remainingSeconds}`;
};
