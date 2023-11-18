import { useDispatch } from "react-redux";
import { userActions } from "../Actions/userActions";
import { getAuth } from "firebase/auth";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
export function useAuth() {
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();

  const { email } = useSelector((state) => (state as any).user);
  if (!email) {
    if (user?.emailVerified) {
      dispatch(
        userActions.setUser({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          token: (user as any).accessToken,
        })
      );
    }
    console.log(user);
  }
}
