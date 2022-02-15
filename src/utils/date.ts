import Time from 'src/interfaces/Time';

export const secondsToTime = (s: number): Time => {
  const hours = Math.trunc(s / 3600);
  const minutes = Math.trunc(s / 60 - hours * 60);
  const seconds = Math.trunc(s - hours * 3600 - minutes * 60);

  return {
    hours,
    minutes,
    seconds,
  };
};

export const formatTime = (time: number): string => {
  return String(time).padStart(2, '0');
};
