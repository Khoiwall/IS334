export default function timeSince(date: number): string {
  var seconds = Math.floor((Date.now() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    if (interval >= 2) {
      return Math.floor(interval) + "y ago";
    } else {
      return Math.floor(interval) + "y ago";
    }
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    if (interval >= 2) {
      return Math.floor(interval) + "m ago";
    } else {
      return Math.floor(interval) + "m ago";
    }
  }
  interval = seconds / 86400;
  if (interval > 1) {
    if (interval >= 2) {
      return Math.floor(interval) + "d ago";
    } else {
      return Math.floor(interval) + "d ago";
    }
  }
  interval = seconds / 3600;
  if (interval > 1) {
    if (interval >= 2) {
      return Math.floor(interval) + "h ago";
    } else {
      return Math.floor(interval) + "h ago";
    }
  }
  interval = seconds / 60;
  if (interval > 1) {
    if (interval >= 2) {
      return Math.floor(interval) + "m ago";
    } else {
      return Math.floor(interval) + "m ago";
    }
  }
  return Math.floor(seconds) + "s ago";
}
