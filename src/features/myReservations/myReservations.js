/* eslint-disable */

const MyReservations = () => {

  return (
    <section>
      {
        reservations.map(reserve => {
          return (
            <div>
              <div>
                <h4>{reserve.city}</h4>
                <h4>{reserve.date}</h4>
              </div>
            </div>)
        })
      }
    </section>
  )
};

export default MyReservations;
