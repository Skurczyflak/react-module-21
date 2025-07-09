const initialState = {
  tables: [
    {
      id: '1',
      statusId: '3',
      booked: '2',
      capacity: '4',
      bill: '20',
    },
    {
      id: '1',
      statusId: '2',
      booked: '2',
      capacity: '4',
      bill: '20',
    },
    {
      id: '1',
      statusId: '1',
      booked: '2',
      capacity: '4',
      bill: '20',
    },
  ],
  statuses: [
    {
      id: '1',
      name: 'Free',
    },
    {
      id: '2',
      name: 'Busy',
    },
    {
      id: '3',
      name: 'Reserved',
    },
    {
      id: '4',
      name: 'Clenning',
    }

  ]
};

export default initialState;
