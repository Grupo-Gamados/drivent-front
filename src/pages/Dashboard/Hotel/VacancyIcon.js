import { IconContext } from 'react-icons';
import { IoPersonOutline } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';

export default function VacancyIcon({ vacancy, id }) {
  let color = vacancy === 1 ? '#000000' : '#FF4791';
  return (
    <>
      {vacancy === 0 ? (
        <IconContext.Provider value={{ size: '20px' }}>
          <IoPersonOutline />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ size: '20px' }}>
          <IoPersonSharp color={color} />
        </IconContext.Provider>
      )}
    </>
  );
}
