const findTicket = tickets => {

  let minID, minPrice;
  let minStay = Number.MAX_SAFE_INTEGER;

  while (true) {
    const id = tickets.shift();
    if (id === 'End') return [minID, minPrice, minStay];

    const price = tickets.shift();
    const stay = tickets.shift();

    if (minStay > stay) {
      minID = id;
      minPrice = price;
      minStay = stay;
    }
  }
}

const print = (id, price, stay) => {
  const hours = stay / 60;
  const minutes = stay % 60;
  console.log(`Ticket found for flight ${id} costs ${price * 1.95} leva with ${hours}h ${minutes}m
stay`);
}

const ticket = findTicket([
  'W64301',
  60,
  140,
  'FR9967',
  80,
  200,
  'FR0066',
  45,
  60,
  'End'
])

const [id, price, stay] = ticket;
print(id, price, stay);
// console.log(ticket);
