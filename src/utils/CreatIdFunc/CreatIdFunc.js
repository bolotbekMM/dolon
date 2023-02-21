export function generateRandomId() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const randomId = "id-" + randomNumber.toString();
  return randomId;
}
