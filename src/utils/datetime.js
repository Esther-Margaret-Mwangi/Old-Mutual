export function formatTime(time24) {
  const [hours, minutes] = time24.split(":").map(Number);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function formatTimeRange(startTime, endTime) {
  if (!endTime) {
    return formatTime(startTime);
  }
  return `${formatTime(startTime)} - ${formatTime(endTime)}`;
}
