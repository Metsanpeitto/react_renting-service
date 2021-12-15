/* eslint-disable */

const MyReservations = () => {

  return (
    <>
      {
        reservations.map(reserve => {
          return (
            <div>
              <div>
                <h4>{reserve.city}</h4>
                <h4>{reserve.date}</h4>
              </div>
            </div>
          )
        })
      }
    </>
  )
};

export default MyReservations;
