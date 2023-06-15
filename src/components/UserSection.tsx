import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {useNavigate} from 'react-router-dom';

interface UserSectionProps {
   userId: number;
}

const UserSection = ({ userId }: UserSectionProps) => {

   const { user, isLoading, error } = useAppSelector(state => state.user);
   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   const handlerMoveToUser = () => {
      navigate(`/user/${userId}`);
   }

   if (error)
      return <h4 style={{ color: 'red' }}>{error}</h4>

   return (
      <div>
         <h4
            onClick={handlerMoveToUser}
         >
            Author:
         </h4>
      </div>
   )
}

export default UserSection;
