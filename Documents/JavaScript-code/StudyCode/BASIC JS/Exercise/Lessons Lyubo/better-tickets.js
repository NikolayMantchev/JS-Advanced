const findTicket = tickets => {
  tickets.sort((a, b) => a.stay - b.stay)
  return tickets[0];
}

const ticket = findTicket([
  {
    id: 'W64301',
    price: 60,
    stay: 140
  },
  {
    id: 'FR9967',
    price: 80,
    stay: 200
  },
  {
    id: 'FR0066',
    price: 45,
    stay: 60
  },
  {
    id: 'aoiresnto',
    price: 555,
    stay: 444
  }
])

const print = (id, price, stay) => {
  const hours = stay / 60;
  const minutes = stay % 60;
  console.log(`Ticket found for flight ${id} costs ${price * 1.95} leva with ${hours}h ${minutes}m
stay`);
}

const {id, price, stay} = ticket;
print(id, price, stay);
