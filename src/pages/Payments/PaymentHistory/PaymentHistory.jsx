import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

// Припустимо, що це ваш список історії платежів для атлета.
const paymentEvents = [
  { id: 1, athleteId: 1, event: 'Тренування', date: '2024-01-01', amount: 100 },
  { id: 2, athleteId: 1, event: 'Змагання', date: '2024-02-01', amount: 200 },
  { id: 3, athleteId: 2, event: 'Тренування', date: '2024-03-01', amount: 150 },
  // Додайте більше подій за потребою
];

const PaymentHistory = () => {
  const { athleteId } = useParams();

  // Фільтруємо список подій для обраного атлета
  const athletePayments = paymentEvents.filter(event => event.athleteId === Number(athleteId));

  return (
    <div>
      <h1>Історія платежів для Атлета {athleteId}</h1>
      <ul>
        {athletePayments.length > 0 ? (
          athletePayments.map(event => (
            <li key={event.id}>
              <NavLink to={`/payment-history/${athleteId}/payment-details/${event.id}`}>
                {event.event} - {event.date} - {event.amount} грн
              </NavLink>
            </li>
          ))
        ) : (
          <p>Платежі не знайдено для цього атлета.</p>
        )}
      </ul>
    </div>
  );
};

export default PaymentHistory;
