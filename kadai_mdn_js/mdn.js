function formatDateJP(date = new Date()) {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

console.log(formatDateJP());